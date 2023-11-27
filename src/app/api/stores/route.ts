import { NextResponse } from "next/dist/server/web/spec-extension/response";

type Data = { name: string };
export async function GET() {
  const data = await import("@/data/seoul_store.json");

  return NextResponse.json({ data });
}
