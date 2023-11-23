import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

type Data = { name: string };
export async function GET() {
  const data = {
    pokemon: {
      name: "꼬부기",
    },
  };
  return NextResponse.json({ data });
}
