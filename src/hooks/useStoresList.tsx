"use client";
import getStoresPageData from "@/app/_lib/getStorePageData";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import useSearchStore from "./useSearchStore";

const useStoresList = () => {
  const topPos = useRef<HTMLDivElement | null>(null);
  const observeTarget = useRef<null | HTMLDivElement>(null);
  const { name, district } = useSearchStore();
  const { data, isLoading, isFetching, isSuccess, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["stores", district, name],
    queryFn: ({ pageParam }) => getStoresPageData(pageParam, district, name),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.data.length > 0 ? lastPage.page + 1 : undefined;
    },
    staleTime: 60 * 60 * 3,
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
  return {
    isLoading,
    isFetching,
    isSuccess,
    isError,
    data,
    observeTarget,
    topPos,
    fetchNextPage,
    moveTopPage,
  };
};

export default useStoresList;
