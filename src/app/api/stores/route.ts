import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

export async function GET() {
  const prisma = new PrismaClient();
  const stores = await prisma.store.findMany({ orderBy: { id: "asc" } });
  return NextResponse.json({ data: stores });
}
