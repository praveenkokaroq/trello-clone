// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      const lane = await prisma.lane.create({
        data: req.body,
      });

      return res.status(200).json({ lane });
    }

    case "GET": {
      const lane = await prisma.lane.findFirst({
        where: {
          id: req.query.laneId as string,
        },
      });

      return res.status(200).json({ lane });
    }

    case "PUT": {
      const lane = await prisma.lane.update({
        where: {
          id: req.query.lane as string,
        },
        data: req.body,
      });

      return res.status(200).json({ lane });
    }
  }
}
