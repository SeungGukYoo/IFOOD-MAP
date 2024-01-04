"use client";
import Link from "next/dist/client/link";
import React from "react";
import ErrorBox from "./_components/ErrorBox";

export default function NotFound() {
  return (
    <>
      <ErrorBox text="잘못된 접근입니다.">
        <Link
          href="/"
          className="border border-gray px-4 py-2 mt-4 rounded-md shadow-md font-semibold bg-[#eee] hover:bg-gray-400"
        >
          홈으로 이동
        </Link>
      </ErrorBox>
    </>
  );
}
