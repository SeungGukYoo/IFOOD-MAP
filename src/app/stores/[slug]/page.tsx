"use client";

import { getStoreData } from "@/app/lib/getStoreData";
import ErrorBox from "@/components/ErrorBox";
import StoreDatailBox from "@/components/StoreDatailBox";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const DetailPage = ({ params }: { params: { slug: string } }) => {
  const { data, isError, isSuccess } = useQuery({
    queryKey: ["store", params.slug],
    queryFn: async () => {
      const response = await getStoreData(params.slug);
      return response;
    },
    staleTime: 60 * 1000 * 5,
  });

  if (isError) {
    return <ErrorBox />;
  }
  return <>{isSuccess && <StoreDatailBox store={data} />}</>;
};

export default DetailPage;
