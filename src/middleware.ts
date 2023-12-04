import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/user/mypage", "/user/likes", "/stores/new"],
};

export default withAuth(
  function middleware(req) {
    console.log(req, req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return true;
      },
    },
  }
);
