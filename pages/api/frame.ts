import { NeynarAPIClient } from "@neynar/nodejs-sdk";
import { FrameRequest, getFrameHtmlResponse } from "frames.js";

const client = new NeynarAPIClient(process.env.NEYNAR_API_KEY!);

export const config = {
  runtime: "edge",
};

export default async function handler(req: Request): Promise<Response> {
  const body = await req.json();
  const frameRequest = FrameRequest.parse(body);

  const userFid = frameRequest?.untrustedData?.fid;

  const html = getFrameHtmlResponse({
    buttons: [
      {
        label: "Visit GitHub",
        action: "link",
        target: "https://github.com/showan222/ad-hub",
      },
    ],
    image: "https://ad-hub-ecru.vercel.app/cover.png",
    postUrl: "https://ad-hub-ecru.vercel.app/api/frame",
    ogTitle: "Advantage Hub",
    ogDescription: `Verified Web3 projects — for you!`,
  });

  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
