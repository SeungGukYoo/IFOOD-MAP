import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


// get current login info (only back end)

export const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID??"",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET??"",
    }),
  ],
} satisfies NextAuthOptions

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
	return getServerSession(...args,config)
}