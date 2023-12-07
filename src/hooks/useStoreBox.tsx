import { StoreType } from "@/app/page";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useLocation from "./useLocation";

const useStoreBox = (store: StoreType) => {
  const [like, setLike] = useState(false);
  const { changeCoordinates } = useLocation();
  const router = useRouter();
  const moveDetailPage = () => {
    changeCoordinates(parseFloat(store.lat!), parseFloat(store.lng!));
    router.push(`/stores/${store.id}`);
  };
  return {like,setLike,moveDetailPage};
};

export default useStoreBox;
