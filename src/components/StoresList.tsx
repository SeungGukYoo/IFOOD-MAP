"use client";

import { StoresType } from "@/app/page";
import useStoresList from "@/hooks/useStoresList";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import React from "react";
import { IoSearch } from "react-icons/io5";
import { TbError404 } from "react-icons/tb";
import LinkWrapper from "./LinkWrapper";
import LoadingBox from "./LoadingBox";
import PageNavigation from "./PageNavigation";
import StoreListBox from "./StoreListBox";

const StoresList = () => {
  const { isLoading, isError, isSuccess, data: stores } = useStoresList();
  if (isError) {
    return (
      <div className="w-full h-[calc(100vh-52px)] flex flex-col justify-center items-center text-lg md:text-xl text-center">
        <TbError404 className="w-[45px] h-[45px] md:w-[70px] md:h-[70px]" />
        예기치 못한 에러가 발생하였습니다.
        <br /> 잠시후에 다시 시도해주세요.
      </div>
    );
  }
  return (
    <div className="max-w-[1024px] mx-auto px-4  relative z-10">
      <div className="w-full flex justify-between gap-3 py-8">
        <div role="presentation" className="relative w-full h-[45px]  ">
          <input
            type="text"
            className="w-full h-full border bg-zinc-100 rounded outline-none pl-12"
            placeholder="검색"
          />
          <IoSearch className="absolute top-1/2 -translate-y-1/2 left-2 text-[25px] text-zinc-400" />
        </div>
        <select name="" id="" className="border text-sm min-w-[45px] md:w-[250px]">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      {isLoading && <LoadingBox />}
      {isSuccess && (
        <>
          <ul className="divide-y-2 divide-gray-100">
            <>
              {(stores?.data as StoresType).map((store) => (
                <StoreListBox key={store.id} store={store} />
              ))}
            </>
          </ul>
          <div className="py-6 w-full flex justify-around items-center gap-2 bg-white my-10 flex-wrap md:px-12 md:py-12">
            <div className="flex gap-1">
              <LinkWrapper href="/stores?page=1" page={stores?.page! - 1}>
                <MdKeyboardDoubleArrowLeft className="w-[20px] h-[20px] md:w-7 md:h-7" />
              </LinkWrapper>
              <LinkWrapper href={`/stores?page=${stores?.page! - 1}`} page={stores?.page! - 1}>
                <MdKeyboardArrowLeft className="hidden md:block w-[20px] h-[20px] md:w-7 md:h-7" />
              </LinkWrapper>
            </div>
            <div className="flex gap-3 md:gap-7 items-center">
              <PageNavigation totalPage={stores?.totalPage} currentPage={stores?.page} />
            </div>
            <div className="flex gap-1">
              <LinkWrapper href={`/stores?page=${stores?.page! + 1}`} page={stores?.page! + 1}>
                <MdKeyboardArrowRight className="hidden md:block w-[20px] h-[20px] md:w-7 md:h-7" />
              </LinkWrapper>
              <LinkWrapper href="/stores?page=53" page={stores?.page! + 1}>
                <MdKeyboardDoubleArrowRight className="w-[20px] h-[20px] md:w-7 md:h-7" />
              </LinkWrapper>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StoresList;
