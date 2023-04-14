// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const lanes = await prisma.lane.findMany({
        include: {
          cards: true,
        },
      });

      return res.status(200).json({ lanes });
    }
  }
}
