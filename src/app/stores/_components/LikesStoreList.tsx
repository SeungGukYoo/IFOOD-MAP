"use client";

import { getLikesData } from "@/app/_lib/getLikesData";
import { StoreType } from "@/app/page";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoadingCard from "../../_components/LoadingCard";
import StoreListBox from "./StoreListBox";

export interface StoreLike {
  createdAt: string;
  id: number;
  store: StoreType;
  storeId: number;
  userId: number;
}

export interface LikesResponse {
  reseponse: Array<StoreLike>;
}

const LikesStoreList = ({ id }: { id: string }) => {
  const {
    data: { response },
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["stores", "likes", id],
    queryFn: () => getLikesData(id!),
    staleTime: 300000,
  });

  if (isLoading) {
    return <LoadingCard />;
  }
  return (
    <div>
      <ul className="divide-y-2 divide-gray-100">
        {isSuccess && (
          <>
            {response.map((storeData: StoreLike) => (
              <StoreListBox store={storeData.store} key={storeData.id} />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default LikesStoreList;
