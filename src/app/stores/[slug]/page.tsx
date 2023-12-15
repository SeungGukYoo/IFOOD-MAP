import getQueryClient from "@/app/lib/getQueryClient";
import { getStoreData } from "@/app/lib/getStoreData";
import StoreDatailBox from "@/components/StoreDatailBox";
import { HydrationBoundary, dehydrate, useQueryClient } from "@tanstack/react-query";
import React from "react";

const DetailPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getStoreData(params.slug);
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["store", params.slug],
    queryFn: async () => {
      const response = await getStoreData(params.slug);
      return response;
    },
    staleTime: 60 * 1000 * 5,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <StoreDatailBox params={params.slug} />
    </HydrationBoundary>
  );
};

export default DetailPage;
