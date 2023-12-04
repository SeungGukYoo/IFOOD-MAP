import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from 'next-auth/providers/naver';



const prisma = new PrismaClient()
export const config = {
  adapter:PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID??"",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET??"",
    }),
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID??"",
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET??"",
    }),
  
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy:'jwt'
  }
} satisfies NextAuthOptions

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
	return getServerSession(...args,config)
}