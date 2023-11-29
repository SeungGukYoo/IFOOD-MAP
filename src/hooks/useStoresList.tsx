"use client";

import getStorePageData from "@/app/lib/getStorePageData";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { useQuery } from "react-query";

const useStoresList = () => {
  const params = useSearchParams();
  const query = params.get("page") || "1";
  const { isLoading, isSuccess, isError, data } = useQuery(`stores-${query}`, () => getStorePageData(query), {
    staleTime: 1800000,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isSuccess, isError, data };
};

export default useStoresList;
