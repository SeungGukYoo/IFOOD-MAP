import { useEffect, useState } from "react";

const MIN_WIDTH_TABLET = 768;

const useResponsiveToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const webWidthbserver = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= MIN_WIDTH_TABLET) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", webWidthbserver);

    return () => window.removeEventListener("resize", webWidthbserver);
  }, []);

  return { isOpen, setIsOpen };
};

export default useResponsiveToggle;
