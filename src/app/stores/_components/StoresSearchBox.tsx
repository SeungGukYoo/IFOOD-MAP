"use client";

import { DISTRICT } from "@/data/district";
import useSearchStore from "@/hooks/useSearchStore";
import debounceHandler from "@/util/debounceHandler";
import React from "react";
import { IoSearch } from "react-icons/io5";

const StoresSearchBox = () => {
  const { changeName, changeDistrict } = useSearchStore();

  return (
    <div className="w-full flex justify-between gap-3 py-4">
      <div role="presentation" className="relative w-full h-[45px]">
        <input
          name="storeSearchInput"
          onChange={(e) => debounceHandler(changeName, e)}
          type="text"
          className="w-full h-full border bg-zinc-100 rounded outline-none pl-12"
          placeholder="검색"
        />
        <IoSearch className="absolute top-1/2 -translate-y-1/2 left-2 text-[25px] text-zinc-400" />
      </div>
      <select
        name="district"
        id="district"
        className="border text-sm p-3 outline-none md:w-[250px]"
        onChange={(e) => changeDistrict(e.target.value)}
      >
        <option value="">지역 선택</option>
        {DISTRICT.map((area) => (
          <option key={area} value={area}>
            {area}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StoresSearchBox;
