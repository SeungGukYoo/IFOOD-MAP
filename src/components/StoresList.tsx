"use client";

import { StoresType } from "@/app/page";
import React from "react";
import { IoSearch } from "react-icons/io5";
import StoreListBox from "./StoreListBox";
const StoresList = ({ stores }: { stores: StoresType }) => {
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
      <ul className="divide-y-2 divide-gray-100">
        {stores && stores.map((store) => <StoreListBox key={store.id} store={store} />)}
      </ul>
    </div>
  );
};

export default StoresList;
