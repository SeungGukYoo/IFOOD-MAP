"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import LoadingSpiner from "./LoadingSpiner";

interface AuthNavigationLinksBoxProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  linkStyle?: string;
}

const AuthNavigationLinksBox = ({ setIsOpen, linkStyle }: AuthNavigationLinksBoxProps) => {
  const session = useSession();
  return (
    <>
      {session?.status === "authenticated" || session?.status === "unauthenticated" ? (
        <>
          {session?.status === "authenticated" ? (
            <>
              <Link href="/user/mypage" className={linkStyle}>
                나의 정보
              </Link>
              <button
                className={linkStyle}
                onClick={() => {
                  signOut({ callbackUrl: process.env.NEXT_PUBLIC_API_URL });
                  setIsOpen && setIsOpen((prev) => (prev = false));
                }}
              >
                로그아웃
              </button>
            </>
          ) : (
            <Link
              href="/user/login"
              className={linkStyle}
              onClick={() => {
                setIsOpen && setIsOpen((prev) => (prev = false));
              }}
            >
              로그인
            </Link>
          )}
        </>
      ) : (
        <LoadingSpiner />
      )}
    </>
  );
};

export default AuthNavigationLinksBox;
