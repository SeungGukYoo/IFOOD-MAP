"use client";

import getStoresPageData from "@/app/lib/getStorePageData";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

const useStoresList = () => {
  const observeTarget = useRef<null | HTMLDivElement>(null);
  const topPos = useRef<HTMLDivElement | null>(null);
  const { data, isLoading, isFetching, isSuccess, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["stores"],
    queryFn: ({ pageParam }) => getStoresPageData(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.data.length > 0 ? lastPage.page + 1 : undefined;
    },
  });

  const moveTopPage = () => {
    topPos.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observerOption: IntersectionObserverInit = {
      rootMargin: "-52px 0px 0px 0px",
    };
    const callbackFn = ([entries]: IntersectionObserverEntry[]) => {
      if (entries.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    };
    const observer = new IntersectionObserver(callbackFn, observerOption);

    if (observeTarget.current) {
      observer.observe(observeTarget.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);
  return { isLoading, isFetching, isSuccess, isError, data, observeTarget, topPos, fetchNextPage, moveTopPage };
};

export default useStoresList;
