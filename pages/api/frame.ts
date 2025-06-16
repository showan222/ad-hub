import type { NextApiRequest, NextApiResponse } from 'next'
import { createFrame } from '@neynar/nodejs-sdk'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const frame = createFrame({
    title: "Today's Web3 Pick 🚀",
    image: 'https://raw.githubusercontent.com/showan222/ad-hub/main/public/default-cover.jpg', // یک عکس ساده تا بعداً داینامیک بشه
    buttons: [
      {
        label: '🔍 View Project',
        action: 'link',
        target: 'https://github.com/showan222/ad-hub'
      }
    ],
    postUrl: 'https://ad-hub.vercel.app/api/frame',
    ogTitle: 'Advantage Hub',
    ogDescription: 'Top Web3 Projects – Daily on Farcaster!',
    ogImage: 'https://raw.githubusercontent.com/showan222/ad-hub/main/public/default-cover.jpg',
  })

  res.setHeader('Content-Type', 'text/html')
  res.status(200).send(frame)
}

export default handler
