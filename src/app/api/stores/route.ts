import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/dist/server/web/spec-extension/response";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const prisma = new PrismaClient();
  if (req.nextUrl.searchParams.get("page")) {
    const districtQuery = req.nextUrl.searchParams.get("district");
    const storeQuery = req.nextUrl.searchParams.get("store");
    const pageQuery = parseInt(req.nextUrl.searchParams.get("page")!);
    const skipPage = (pageQuery - 1) * 20;
    const dataSize = await prisma.store.count();
    const stores = await prisma.store.findMany({
      where: {
        AND: {
          address: districtQuery ? { contains: districtQuery } : {},
          name: storeQuery ? { contains: storeQuery } : {},
        },
      },
      orderBy: { id: "asc" },
      take: 20,
      skip: skipPage,
    });

    return NextResponse.json({ data: stores, dataSize, page: pageQuery, totalPage: Math.ceil(dataSize / 20) });
  } else {
    const stores = await prisma.store.findMany({ orderBy: { id: "asc" } });
    return NextResponse.json({ data: stores });
  }
}
