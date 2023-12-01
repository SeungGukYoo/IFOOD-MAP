import { config } from "@/util/auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";

// initiallize next-auth(api)
const handler = NextAuth(config);

export { handler as GET, handler as POST };
