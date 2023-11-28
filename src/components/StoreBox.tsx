"use client";
import { StoreType } from "@/hooks/useMap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

import { IoCloseSharp, IoInformationCircle } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

import imageHandler from "@/util/markerHandler";
import Image from "next/image";
import React, { useState } from "react";
interface StoreProps {
  store: StoreType;
  setCurrentSotre: React.Dispatch<React.SetStateAction<StoreType | null>>;
}
const StoreBox = ({ store, setCurrentSotre }: StoreProps) => {
  const [like, setLike] = useState(false);
  return (
    <div className="z-10 fixed transition ease-in-out delay-150 inset-x-0 mx-auto bottom-20 rounded-lg shadow-lg max-w-sm md:max-w-2xl w-full bg-white animate-[popUp_0.1s_ease-in]">
      <div className="p-8 flex flex-col items-start gap-3 relative">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <Image src={"/images/markers/" + imageHandler(store.bizcnd_code_nm)} alt="image" width={50} height={50} />
            <div className="flex flex-col">
              <p className=" font-bold">{store.upso_nm}</p>
              <span className="text-sm text-gray-500">{store.cob_code_nm}</span>
            </div>
          </div>
          <button onClick={() => setCurrentSotre(null)}>
            <IoCloseSharp className="text-xl" />
          </button>
        </div>

        <div className="flex w-full justify-between gap-2">
          <div>
            <div className="info_box">
              <MdLocationPin />
              {store.rdn_code_nm}
            </div>
            <div className="info_box">
              <BsFillTelephoneFill />
              {store.tel_no || "번호 없음"}
            </div>
            <div className="info_box text-gray-500 text-sm">
              <IoInformationCircle />
              {store.crtfc_gbn_nm}
            </div>
            <div className="info_box text-gray-500  text-sm">
              <FaCheck />
              {store.bizcnd_code_nm}
            </div>
          </div>
          <button onClick={() => setLike((prev) => (prev = !prev))} className="text-xl">
            {like ? <FcLike /> : <CiHeart />}
          </button>
        </div>
      </div>
      <div className="transition duration-75 bg-blue-500 text-center text-white text-md font-bold py-3 rounded-t-sm rounded-b-lg focus:bg-blue-700 hover:bg-blue-700">
        상세보기
      </div>
    </div>
  );
};

export default StoreBox;
