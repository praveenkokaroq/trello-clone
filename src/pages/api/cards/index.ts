// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db";
import { Platform } from "@roq/nextjs";

const roq = new Platform({
  host: process.env.ROQ_PLATFORM_URL!,
  apiKey: process.env.ROQ_API_KEY!,
  environmentId: process.env.ROQ_ENVIRONMENT_ID!,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      const card = await prisma.card.create({
        data: req.body,
      });

      console.log("Card title ", card.title);

      roq.asSuperAdmin().notify({
        notification: {
          key: "new-card",
          data: [
            {
              key: "cardTitle",
              value: card.title || "New card",
            },
          ],
          recipients: {
            allUsers: true,
          },
        },
      });

      return res.status(200).json({ card });
    }

    case "GET": {
      const cards = await prisma.card.findMany({
        where: {
          laneId: req.query.laneId as string,
        },
      });

      return res.status(200).json({ cards });
    }

    case "PUT": {
      const card = await prisma.card.update({
        where: {
          id: req.query.cardId as string,
        },
        data: req.body,
      });

      return res.status(200).json({ card });
    }
  }
}
