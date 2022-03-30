// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import headerdata from 'data/headerMenu.json'

export default function headerHandler(req, res) {
  res.status(200).json(headerdata)
}
