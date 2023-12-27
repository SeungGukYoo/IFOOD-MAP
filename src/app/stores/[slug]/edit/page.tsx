import getQueryClient from "@/app/lib/getQueryClient";
import { getStoreData } from "@/app/lib/getStoreData";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import React from "react";
import EditFormBox from "../../_components/EditFormBox";

const EditPage = async ({ params }: { params: { slug: string } }) => {
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
    <>
      <HydrationBoundary state={dehydratedState}>
        <EditFormBox id={params.slug} />
      </HydrationBoundary>
    </>
  );
};

export default EditPage;
