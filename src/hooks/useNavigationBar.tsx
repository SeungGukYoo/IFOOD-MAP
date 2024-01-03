import { useRouter } from "next/navigation";
import useLocationStore from "./useLocationStore";

const useNavigationBar = () => {
  const { resetCoordinates } = useLocationStore();
  const router = useRouter();

  const moveHomepage = () => {
    resetCoordinates();
    router.push("/");
  };
  return { moveHomepage };
};

export default useNavigationBar;
