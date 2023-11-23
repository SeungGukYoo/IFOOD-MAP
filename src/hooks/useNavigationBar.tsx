import React, { useState } from "react";

const useNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return { isOpen, setIsOpen };
};

export default useNavigationBar;
