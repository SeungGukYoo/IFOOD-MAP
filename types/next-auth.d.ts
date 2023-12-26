import { DefaultSession, Session } from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    refreshTokenExpires?: number;
    accessTokenExpires?: number;
    refreshToken?: string;
    token: string;
    exp?: number;
    iat?: number;
    jti?: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      access_token?: JWT;
    } & DefaultSession["user"];
  }
}
