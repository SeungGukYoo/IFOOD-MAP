import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";

const LinkWrapper = ({ children, href, page }: { children: ReactNode; href: string; page: number }) => {
  if (page === 0) {
    return (
      <button disabled className="text-gray-500">
        {children}
      </button>
    );
  }
  if (page === 54) {
    return (
      <button disabled className="text-gray-500">
        {children}
      </button>
    );
  }
  return <Link href={href}>{children}</Link>;
};

export default LinkWrapper;
