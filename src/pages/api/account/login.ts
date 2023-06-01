// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next"

export default function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.json({ name: "Quang" })
  } catch (error) {
    console.log(error)
  }
}
