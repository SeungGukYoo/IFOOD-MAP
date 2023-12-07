"use client";

import getStoresPageData from "@/app/lib/getStorePageData";
import debounceHandler from "@/util/debounceHandler";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const useStoresList = () => {
  const observeTarget = useRef<null | HTMLDivElement>(null);
  const topPos = useRef<HTMLDivElement | null>(null);
  const [district, setDistrict] = useState<string>("");
  const [storeName, setStoreName] = useState<string>("");
  const { data, isLoading, isFetching, isSuccess, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["stores", district, storeName],
    queryFn: ({ pageParam }) => getStoresPageData(pageParam, district, storeName),
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

  const onChangeStoreName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    debounceHandler(setStoreName, value);
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
    setDistrict,
    onChangeStoreName,
  };
};

export default useStoresList;
