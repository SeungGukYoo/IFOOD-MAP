"use client";

import useResponsiveToggle from "@/hooks/useResponsiveToggle";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import AuthNavigationLinksBox from "./AuthNavigationLinksBox";

const MobileNavbar = () => {
  const { isOpen, setIsOpen } = useResponsiveToggle();

  return (
    <>
      <div role="presentation" className="text-2xl px-5 md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <AiOutlineClose /> : <BiMenu />}
      </div>
      {isOpen && (
        <div className="fixed w-full top-[52px] h-full backdrop-blur z-50">
          <div className="flex flex-col items-start px-[18px] py-[24px] gap-4">
            <Link onClick={() => setIsOpen(false)} href="/stores">
              맛집 목록
            </Link>
            <Link onClick={() => setIsOpen(false)} href="/stores/new">
              맛집 등록
            </Link>
            <Link onClick={() => setIsOpen(false)} href="/user/likes">
              찜한 가게
            </Link>
            <AuthNavigationLinksBox setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
