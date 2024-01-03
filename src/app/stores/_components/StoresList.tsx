"use client";

import useStoresList from "@/hooks/useStoresList";
import Link from "next/link";
import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import ErrorBox from "../../_components/ErrorBox";
import LoadingCard from "../../_components/LoadingCard";
import LoadingPing from "../../_components/LoadingPing";
import StoreListBox from "./StoreListBox";
import StoresSearchBox from "./StoresSearchBox";

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
    return (
      <ErrorBox text="해당 데이터가 존재하지 않습니다.">
        <Link href="/stores">뒤로가기</Link>
      </ErrorBox>
    );
  }
  return (
    <div className="relative z-10" ref={topPos}>
      <StoresSearchBox />

      {isLoading && <LoadingCard />}
      {isSuccess && (
        <div>
          <ul role="list" className="divide-y-2 divide-gray-100">
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
