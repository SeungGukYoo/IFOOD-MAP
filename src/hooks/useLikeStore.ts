import { deleteLikeData } from "@/app/lib/deleteLikeData";
import { setLikeData } from "@/app/lib/setLikeData";
import { StoreType } from "@/app/page";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const useLikeStore = (store: StoreType) => {
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
  const unlikeStore = async (likeId: string) => {
    try {
      await deleteLikeData(likeId);
      return;
    } catch (error) {
      console.error(error);
    }
  };
  const updateLike = async (storeId?: number) => {
    if (!storeId) return;
    if (like) {
      const changeTypeLikeId = store.likes[0].id.toString();
      await unlikeStore(changeTypeLikeId);
    } else {
      const changeTypeStoreId = storeId.toString();
      await likeStore(changeTypeStoreId);
    }
    await queryClient.invalidateQueries({ queryKey: ["store", storeId.toString()] });
    setLike((prev) => !prev);
  };

  return { like, updateLike };
};

export default useLikeStore;
