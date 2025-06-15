import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    name: "Advantage Hub",
    description: "Mini-App for verified Web3 projects, updated daily.",
    image: "https://i.imgur.com/kYHgzSl.png",
    buttons: [
      {
        label: "Share",
        action: "share"
      }
    ]
  });
}
