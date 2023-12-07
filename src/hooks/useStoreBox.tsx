import { StoreType } from "@/app/page";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useLocationStore from "./useLocationStore";

const useStoreBox = (store: StoreType) => {
  const [like, setLike] = useState(false);
  const { changeCoordinates } = useLocationStore();
  const router = useRouter();
  const moveDetailPage = () => {
    changeCoordinates(parseFloat(store.lat!), parseFloat(store.lng!));
    router.push(`/stores/${store.id}`);
  };
  return { like, setLike, moveDetailPage };
};

export default useStoreBox;
