import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useLocationStore from "./useLocationStore";

const useNavigationBar = () => {
  const { resetCoordinates } = useLocationStore();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const session = useSession();

  const moveHomepage = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    resetCoordinates();
    router.push("/");
  };
  return { session, isOpen, setIsOpen, moveHomepage };
};

export default useNavigationBar;
