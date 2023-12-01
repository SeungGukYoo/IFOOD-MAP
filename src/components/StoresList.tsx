"use client";

import useStoresList from "@/hooks/useStoresList";
import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import ErrorBox from "./ErrorBox";
import LoadingCard from "./LoadingCard";
import LoadingPing from "./LoadingPing";
import StoreListBox from "./StoreListBox";

const StoresList = () => {
  const {
    data: stores,
    topPos,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    observeTarget,
    moveTopPage,
  } = useStoresList();

  if (isError) {
    return <ErrorBox />;
  }
  return (
    <div className="max-w-[1024px] mx-auto px-4  relative z-10">
      <div className="w-full flex justify-between gap-3 py-8" ref={topPos}>
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
      {isLoading && <LoadingCard />}
      {isSuccess && (
        <div>
          <ul className="divide-y-2 divide-gray-100">
            {stores?.pages.map((page) => page.data.map((store) => <StoreListBox key={store.id} store={store} />))}
          </ul>
        </div>
      )}
      <div ref={observeTarget} />
      {isFetching && <LoadingPing />}
      <IoMdArrowDropup
        className="fixed bottom-10 right-5 transition duration-75 text-white w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 focuse:bg-gray-400"
        onClick={moveTopPage}
      />
    </div>
  );
};

export default StoresList;
