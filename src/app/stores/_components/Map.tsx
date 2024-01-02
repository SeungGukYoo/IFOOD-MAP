"use client";
import { StoresType } from "@/app/page";
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
  let path = usePathname();

  useEffect(() => {
    if (store) {
      setStoreData(store);
    }
  }, [store, setStoreData]);

  return (
    <div>
      <div id="map" className={`w-full ${path === "/" ? "h-[calc(100vh-52px)]" : "h-[600px]"}`}></div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`}
        onReady={() => loadKakaoMap(store)}
      />
      {currentSotre && <StoreBox store={currentSotre} setCurrentSotre={setCurrentSotre} />}
    </div>
  );
};

export default Map;
