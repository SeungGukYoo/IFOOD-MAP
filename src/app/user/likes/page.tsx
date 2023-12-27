import { getLikesData } from "@/app/lib/getLikesData";
import getQueryClient from "@/app/lib/getQueryClient";
import LikesStoreList from "@/app/stores/_components/LikesStoreList";
import { auth } from "@/util/auth";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import React from "react";

const LikesPage = async () => {
  const authInfo = await auth();
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["stores", "likes", authInfo?.user.access_token?.sub],
    queryFn: () => getLikesData(authInfo?.user.access_token?.sub!),
  });
  const dehydrateState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydrateState}>
      <LikesStoreList id={authInfo?.user.access_token?.sub!} />
    </HydrationBoundary>
  );
};

export default LikesPage;
