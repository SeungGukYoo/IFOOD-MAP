import React from "react";
import { IoSearch } from "react-icons/io5";
import LoadingCard from "../../_components/LoadingCard";

const loading = () => {
  return (
    <div className="max-w-[1024px] mx-auto px-4  relative z-10">
      <div className="w-full flex justify-between gap-3 py-4">
        <div role="presentation" className="relative w-full h-[45px]">
          <input
            name="storeSearchInput"
            type="text"
            className="w-full h-full border bg-zinc-100 rounded outline-none pl-12"
            placeholder="검색"
          />
          <IoSearch className="absolute top-1/2 -translate-y-1/2 left-2 text-[25px] text-zinc-400" />
        </div>
        <select name="district" id="district" className="border text-sm p-3 outline-none md:w-[250px]">
          <option value="">로딩중...</option>
        </select>
      </div>
      <LoadingCard />
    </div>
  );
};

export default loading;
