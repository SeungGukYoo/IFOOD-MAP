import Link from "next/link";
import React from "react";

const PageNavigation = ({
  totalPage = 1,
  currentPage = 1,
}: {
  totalPage: number | undefined;
  currentPage: number | undefined;
}) => {
  const makePage = () => {
    if (currentPage < 6) {
      return [...Array(9)].map((_, idx) => (
        <Link
          href={`/stores?page=${idx + 1}`}
          key={idx}
          className={`pagenation_btn ${idx + 1 === currentPage ? "text-black font-semibold" : "text-gray-400"}`}
        >
          {idx + 1}
        </Link>
      ));
    } else if (currentPage + 3 >= totalPage) {
      return [...Array(9)].map((_, idx) => {
        return (
          <Link
            href={`/stores?page=${totalPage - 8 + idx}`}
            key={totalPage - 8 + idx}
            className={`pagenation_btn ${
              totalPage - 8 + idx === currentPage ? "text-black font-semibold" : "text-gray-400"
            }`}
          >
            {totalPage - 8 + idx}
          </Link>
        );
      });
    } else {
      return [...Array(9)].map((_, idx) => {
        return (
          <Link
            href={`/stores?page=${currentPage - 4 + idx}`}
            key={currentPage - 4 + idx}
            className={`pagenation_btn ${
              currentPage - 4 + idx === currentPage ? "text-black font-semibold" : "text-gray-400"
            }`}
          >
            {currentPage - 4 + idx}
          </Link>
        );
      });
    }
  };
  return makePage();
};

export default PageNavigation;
