import { useSession } from "next-auth/react";
import React, { useState } from "react";

const useNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  console.log(session);
  return { session, isOpen, setIsOpen };
};

export default useNavigationBar;
