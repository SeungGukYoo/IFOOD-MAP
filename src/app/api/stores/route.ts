import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/dist/server/web/spec-extension/response";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const prisma = new PrismaClient();
  console.log(req.nextUrl.searchParams.get("page"), "abcsdafsd");
  if (req.nextUrl.searchParams.get("page")) {
    const query = parseInt(req.nextUrl.searchParams.get("page")!);
    const skipPage = (query - 1) * 20;
    const dataSize = await prisma.store.count();
    const stores = await prisma.store.findMany({ orderBy: { id: "asc" }, take: 20, skip: skipPage });

    return NextResponse.json({ data: stores, dataSize, page: query, totalPage: Math.ceil(dataSize / 20) });
  } else {
    const stores = await prisma.store.findMany({ orderBy: { id: "asc" } });
    return NextResponse.json({ data: stores });
  }
}
