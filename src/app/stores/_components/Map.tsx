"use client";

import LocationButton from "@/app/_components/LocationButton";
import MapLoadingSpiner from "@/app/_components/MapLoadingSpiner";
import { StoresType } from "@/app/page";
import useGlobalLoadingStore from "@/hooks/useGlobalLoadingStore";
import useMap from "@/hooks/useMap";
import { usePathname } from "next/navigation";
import Script from "next/script";
import React, { useEffect } from "react";
import StoreBox from "./StoreBox";
export type PosType = string | number | undefined;
interface MapProps {
  store: StoresType;
}

const Map = ({ store }: MapProps) => {
  const { currentSotre, setStoreData, loadKakaoMap, setCurrentSotre } = useMap();
  const path = usePathname();
  const { isLoading } = useGlobalLoadingStore();

  useEffect(() => {
    if (store) {
      setStoreData(store);
    }
  }, [store, setStoreData]);

  return (
    <div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`}
        onReady={() => loadKakaoMap(store)}
      />
      <div id="map" className={`w-full ${path === "/" ? "h-[calc(100vh-52px)]" : "h-[600px]"} relative`}></div>
      {isLoading && <MapLoadingSpiner />}

      {path === "/" && <LocationButton />}
      {currentSotre && <StoreBox store={currentSotre} setCurrentSotre={setCurrentSotre} />}
    </div>
  );
};

export default Map;
