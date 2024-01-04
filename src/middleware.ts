import { withAuth } from "next-auth/middleware";

export const config = {
  matcher: ["/user/mypage", "/user/likes", "/stores/new"],
};

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log(token);
        if (token) {
          return true;
        }
        return false;
      },
    },
  }
);
