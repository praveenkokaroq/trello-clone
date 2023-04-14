// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Card ID", req.query.cardId);
  console.log("Data", req.body);
  switch (req.method) {
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
