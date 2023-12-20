import { PrismaAdapter } from "@auth/prisma-adapter";

import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';
import prisma from "./prismaClient";


export const config = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? "",
    }),
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET ?? "",
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_KEY ?? "",
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_KEY ?? "",
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 12,
    updateAge: 60 * 60 * 2,
  },
  callbacks: {
    async session({ session, token }) {
      session.user.access_token = token;      
      return session
  } 
  }
} satisfies NextAuthOptions;

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
	return getServerSession(...args,config)
}