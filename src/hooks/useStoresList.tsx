"use client";

import getStoresPageData from "@/app/lib/getStorePageData";
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";

const useStoresList = () => {
  const observeTarget = useRef<null | HTMLDivElement>(null);
  const topPos = useRef<HTMLDivElement | null>(null);
  const { data, isLoading, isFetching, isSuccess, isError, fetchNextPage, hasNextPage } = useInfiniteQuery(
    `stores`,
    ({ pageParam = 1 }) => getStoresPageData(pageParam),
    {
      staleTime: 1800000,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage) => {
        return lastPage.data.length > 0 ? lastPage.page + 1 : undefined;
      },
    }
  );

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
