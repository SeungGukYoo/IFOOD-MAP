import getQueryClient from "@/app/lib/getQueryClient";
import { getStoreData } from "@/app/lib/getStoreData";
import StoreDatailBox from "@/components/StoreDatailBox";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import React from "react";

const DetailPage = async ({ params }: { params: { slug: string } }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["store", params.slug],
    queryFn: () => getStoreData(params.slug),
    staleTime: 60 * 1000 * 5,
  });
  const dehydratedState = dehydrate(queryClient);
  console.log(dehydratedState.queries[0].state.data, "this is async compo");

  return (
    <HydrationBoundary state={dehydratedState}>
      <StoreDatailBox params={params.slug} />;
    </HydrationBoundary>
  );
};

export default DetailPage;
