import { deleteLikeData } from "@/app/_lib/deleteLikeData";
import { setLikeData } from "@/app/_lib/setLikeData";
import { StoreType } from "@/app/page";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useLikeStore = (store: StoreType) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [like, setLike] = useState(!!store.likes?.length);
  const likeStore = async (storeId: string) => {
    try {
      const response = await setLikeData(storeId);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const unlikeStore = async (storeId: number, userId: number) => {
    try {
      await deleteLikeData(storeId, userId);
      return;
    } catch (error) {
      console.error(error);
    }
  };
  const updateLike = async (storeId?: number) => {
    if (!storeId) return;
    if (like) {
      const deleteStoreId = store.likes![0].storeId;
      const deleteUserId = store.likes![0].userId;
      await unlikeStore(deleteStoreId, deleteUserId);
    } else {
      const changeTypeStoreId = storeId.toString();
      await likeStore(changeTypeStoreId);
    }
    queryClient.invalidateQueries({ queryKey: ["store", storeId.toString()] });
    setLike((prev) => (prev = !prev));
  };

  return { like, updateLike };
};

export default useLikeStore;
