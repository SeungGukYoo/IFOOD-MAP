"use client";
import useNavigationBar from "@/hooks/useNavigationBar";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const { isOpen, setIsOpen } = useNavigationBar();
  return (
    <>
      <div className="flex justify-between items-center fixed w-full h-[52px] shadow-sm bg-white z-50">
        <div className="text-2xl lg:text-3xl cursor-pointer py-0 px-5 font-medium">
          <Link href="/">iFOOD</Link>
        </div>
        <div className="hidden items-center px-5 py-0 gap-3 md:flex">
          <Link className="navigation__btn" href="/stores">
            맛집 목록
          </Link>
          <Link className="navigation__btn" href="/stores/new">
            맛집 등록
          </Link>
          <Link className="navigation__btn" href="/user/likes">
            찜한 가게
          </Link>
          <Link className="navigation__btn" href="/user/login">
            로그인
          </Link>
        </div>
        <div role="presentation" className="text-2xl px-5 md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
      </div>

      {isOpen && (
        <div className="fixed w-full top-[52px] h-full backdrop-blur">
          <div className="flex flex-col items-start px-[18px] py-[24px] gap-4">
            <Link href="/stores">맛집 목록</Link>
            <Link href="/stores/new">맛집 등록</Link>
            <Link href="/user/likes">찜한 가게</Link>
            <Link href="/user/login">로그인</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
