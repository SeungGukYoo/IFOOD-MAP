"use client";
import useNavigationBar from "@/hooks/useNavigationBar";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import LoadingSpiner from "./LoadingSpiner";

const Navbar = () => {
  const { session, isOpen, setIsOpen, moveHomepage } = useNavigationBar();

  return (
    <>
      <div className="flex justify-between items-center fixed w-full h-[52px] shadow-sm bg-white z-50">
        <div className="text-2xl lg:text-3xl cursor-pointer py-0 px-5 font-medium">
          <button onClick={moveHomepage}>iFOOD</button>
        </div>
        <div className="hidden items-center px-5 py-0 gap-3 md:flex ">
          <Link className="navigation__btn" href="/stores">
            맛집 목록
          </Link>
          <Link className="navigation__btn" href="/stores/new">
            맛집 등록
          </Link>
          <Link className="navigation__btn" href="/user/likes">
            찜한 가게
          </Link>
          {session?.status === "authenticated" || session?.status === "unauthenticated" ? (
            <>
              {session?.status === "authenticated" ? (
                <>
                  <Link className="navigation__btn" href="/user/mypage">
                    나의 정보
                  </Link>
                  <button
                    className="navigation__btn"
                    onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <Link className="navigation__btn" href="/user/login">
                  로그인
                </Link>
              )}
            </>
          ) : (
            <LoadingSpiner />
          )}
        </div>
        <div role="presentation" className="text-2xl px-5 md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
      </div>

      {isOpen && (
        <div className="fixed w-full top-[52px] h-full backdrop-blur z-50">
          <div className="flex flex-col items-start px-[18px] py-[24px] gap-4">
            <Link onClick={() => setIsOpen((prev) => (prev = false))} href="/stores">
              맛집 목록
            </Link>
            <Link onClick={() => setIsOpen((prev) => (prev = false))} href="/stores/new">
              맛집 등록
            </Link>
            <Link onClick={() => setIsOpen((prev) => (prev = false))} href="/user/likes">
              찜한 가게
            </Link>
            {session?.status === "authenticated" || session?.status === "unauthenticated" ? (
              <>
                {session?.status === "authenticated" ? (
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: "http://localhost:3000/" });
                      setIsOpen((prev) => (prev = false));
                    }}
                  >
                    로그아웃
                  </button>
                ) : (
                  <Link href="/user/login" onClick={() => setIsOpen((prev) => (prev = false))}>
                    로그인
                  </Link>
                )}
              </>
            ) : (
              <LoadingSpiner />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
