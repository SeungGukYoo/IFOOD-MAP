"use client";

import ErrorBox from "@/app/_components/ErrorBox";
import { getStoreData } from "@/app/_lib/getStoreData";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import StoreDetailBox from "../../_components/StoreDetailBox";

const DetailPage = ({ params }: { params: { slug: string } }) => {
  const { data, isError, isSuccess } = useQuery({
    queryKey: ["store", params.slug],
    queryFn: () => getStoreData(params.slug),
    staleTime: 60 * 1000 * 5,
  });

  if (isError) {
    return (
      <ErrorBox text="데이터를 받아올 수 없습니다.">
        <Link
          href="/stores"
          className="border border-gray px-4 py-2 mt-4 rounded-md shadow-md font-semibold bg-[#eee] hover:bg-gray-400"
        >
          뒤로가기
        </Link>
      </ErrorBox>
    );
  }

  return <>{isSuccess && <StoreDetailBox store={data} />}</>;
};

export default DetailPage;
