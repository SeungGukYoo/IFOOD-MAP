import { auth } from "@/util/auth";
import prisma from "@/util/prismaClient";
import type { Prisma } from "@prisma/client";
import { NextResponse } from "next/dist/server/web/spec-extension/response";
import { NextRequest } from "next/server";
export async function GET(req: NextRequest) {
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
    const storePrismaOption: Prisma.StoreFindManyArgs = {
      orderBy: { id: "asc" },
    };
    const subId = req.nextUrl.searchParams.get("id");
    if (subId) {
      storePrismaOption.include = {
        likes: {
          where: {
            userId: parseInt(subId),
          },
        },
      };
    }
    const stores = await prisma.store.findMany(storePrismaOption);
    return NextResponse.json({ data: stores });
  }
}
