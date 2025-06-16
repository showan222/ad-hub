import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    frame: {
    
      version: 'vNext',
      image: 'https://ad-hub-ecru.vercel.app/cover.jpg',
      post_url: 'https://ad-hub-ecru.vercel.app/api/frame',
      buttons: [
        {
          label: 'Explore Projects'
        }
      ]
    }
  });
}
