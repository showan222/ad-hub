
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    name: "Advantage Hub",
    description: "Mini-App for verified Web3 projects",
    image: "https://i.imgur.com/YOUR_IMAGE_URL.png", // 🔁 تصویر رو بعداً عوض می‌کنیم
    buttons: [{ label: "Share", action: "share" }],
  });
}
