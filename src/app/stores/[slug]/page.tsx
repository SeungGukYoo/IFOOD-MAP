"use client";

import { getStoreData } from "@/app/lib/getStoreData";
import ErrorBox from "@/components/ErrorBox";
import StoreDetailBox from "@/components/StoreDetailBox";
import { useQuery } from "@tanstack/react-query";
import React from "react";

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
