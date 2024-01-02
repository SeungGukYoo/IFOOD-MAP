"use client";

import ErrorBox from "@/app/(common)/_components/ErrorBox";
import { getStoreData } from "@/app/_lib/getStoreData";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import StoreDetailBox from "../_components/StoreDetailBox";

const DetailPage = ({ params }: { params: { slug: string } }) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["store", params.slug],
    queryFn: () => getStoreData(params.slug),
    staleTime: 60 * 1000 * 5,
  });

  if (isError) {
    return <ErrorBox />;
  }
  return (
    <>
      {isLoading && <h1>loading!!</h1>}
      {isSuccess && <StoreDetailBox store={data} />}
    </>
  );
};

export default DetailPage;
