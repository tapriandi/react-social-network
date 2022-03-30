// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import footerdata from 'data/footerMenu.json'

export default function footerHandler(req, res) {
  res.status(200).json(footerdata)
}
