import { getStoreData } from "@/app/lib/getStoreData";
import { StoreType } from "@/app/page";
import imageHandler from "@/util/markerHandler";
import Image from "next/image";
import React from "react";

const DetailPage = async ({ params }: { params: { slug: string } }) => {
  const { data } = await getStoreData(params.slug);

  return (
    <div className="max-w-[1024px] mx-auto py-10">
      <div className="px-4">
        <h1 className="text-base font-semibold leading-3 text-gray-900 md:text-lg md:leading-[1]">상세보기</h1>
        <p className="mt-1 text-sm leading-6 text-gray-500">식당에 대해 자세히 알아보세요.</p>
      </div>

      <div className="border-t border-gray-100 mt-6">
        <dl className="divide-y divide-gray-100">
          <div className="py-6 px-4 grid grid-cols-3 gap-4 md:text-lg">
            <dt className="font-medium leading-6 text-gray-900">가게명</dt>
            <dd className="leading-6 text-gray-700 col-span-2 flex items-center">{data.name}</dd>
          </div>
          <div className="py-6 px-4 grid grid-cols-3 gap-4 md:text-lg">
            <dt className="font-medium leading-6 text-gray-900">번호</dt>
            <dd className="leading-6 text-gray-700 col-span-2 flex items-center">{data.phone ?? "-"}</dd>
          </div>
          <div className="py-6 px-4 grid grid-cols-3 gap-4 md:text-lg">
            <dt className="font-medium leading-6 text-gray-900">주소</dt>
            <dd className="leading-6 text-gray-700 col-span-2 flex items-center">{data.address}</dd>
          </div>
          <div className="py-6 px-4 grid grid-cols-3 gap-4 md:text-lg">
            <dt className="font-medium leading-6 text-gray-900">음식</dt>
            <dd className="leading-6 text-gray-700 col-span-2 flex items-center">{data.category}</dd>
          </div>
          <div className="py-6 px-4 grid grid-cols-3 gap-4 md:text-lg">
            <dt className="font-medium leading-6 text-gray-900">특징</dt>
            <dd className="leading-6 text-gray-700 col-span-2 flex items-center">{data.foodCertifyName}</dd>
          </div>
          <div className="py-6 px-4 grid grid-cols-3 gap-4 md:text-lg">
            <dt className="font-medium leading-6 text-gray-900">업소 종류</dt>
            <dd className="leading-6 text-gray-700 col-span-2 flex items-center">{data.storeType}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default DetailPage;
