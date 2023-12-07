"use client";

import useStoresList from "@/hooks/useStoresList";
import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import ErrorBox from "./ErrorBox";
import LoadingCard from "./LoadingCard";
import LoadingPing from "./LoadingPing";
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
    return <ErrorBox />;
  }
  return (
    <div className="max-w-[1024px] mx-auto px-4  relative z-10" ref={topPos}>
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
