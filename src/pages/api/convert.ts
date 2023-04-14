// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body.code);

  switch (req.method) {
    case "POST": {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `
        
        ##### Translate this function  from Javascript into Python
        ### Javascript
            
            ${req.body.code}
            
        ### Python
        
        `,
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["###"],
      });

      return res.status(200).json({ code: response.data?.choices?.[0]?.text });
    }
  }
}
