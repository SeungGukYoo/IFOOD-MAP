import { useRouter } from "next/navigation";
import useLocationStore from "./useLocationStore";
import { StoreType } from "@/app/page";

const useStoreBox = (store: StoreType) => {
  const { changeCoordinates } = useLocationStore();
  const router = useRouter();
  const moveDetailPage = () => {
    changeCoordinates(parseFloat(store.lat!), parseFloat(store.lng!));
    router.push(`/stores/${store.id}`);
  };
  return { moveDetailPage };
};

export default useStoreBox;
