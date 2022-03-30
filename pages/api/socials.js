// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import socialsdata from "data/socials.json";

export default function socialsHandler(req, res) {
  res.status(200).json(socialsdata);
}
