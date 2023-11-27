import { StoreType } from "@/hooks/useMap";
import imageHandler from "@/util/markerHandler";
import Image from "next/image";
import React from "react";

const StoreListBox = ({ store }: { store: StoreType }) => {
  return (
    <li className="flex justify-between items-center gap-x-6 py-5">
      <div className="flex items-center gap-3 flex-2 ">
        <Image src={`/images/markers/${imageHandler(store.bizcnd_code_nm)}`} alt="store img" width={45} height={45} />
        <div>
          <p className="text-[14px] md:text-lg">{store.upso_nm}</p>
          <p className="hidden text-sm md:text-lg text-zinc-400 md:block">{store.cob_code_nm}</p>
        </div>
      </div>
      <div className="flex  md:items-end flex-col h-full flex-1 flex-wrap">
        <p className="text-sm text-right md:text-lg">{store.rdn_code_nm}</p>
        <p className=" hidden md:block text-zinc-400">
          {store.tel_no || "번호 없음"} | {store.bizcnd_code_nm} | {store.crtfc_gbn_nm}
        </p>
      </div>
    </li>
  );
};

export default StoreListBox;
