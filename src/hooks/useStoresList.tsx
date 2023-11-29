"use client";

import { getStoreData } from "@/app/lib/getStoreData";
import { useQuery } from "react-query";

const useStoresList = () => {
  const { isLoading, isSuccess, isError, data } = useQuery("stores", () => getStoreData("ssr"), {
    staleTime: 1800000,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isSuccess, isError, data };
};

export default useStoresList;
