"use client";
import { StoresType } from "@/app/page";
import useMap from "@/hooks/useMap";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import React, { useEffect } from "react";
import StoreBox from "./StoreBox";
export type PosType = string | number | undefined;
interface MapProps {
  store: StoresType;
  lat: PosType;
  lng: PosType;
}
const DEFAULT_LAT = 37.497625203;
const DEFAULT_LNG = 127.03088379;
const Map = ({ store, lat = DEFAULT_LAT, lng = DEFAULT_LNG }: MapProps) => {
  const { currentSotre, setStoreData, loadKakaoMap, setCurrentSotre } = useMap(lat, lng);
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
        onReady={loadKakaoMap}
      />
      {currentSotre && <StoreBox store={currentSotre} setCurrentSotre={setCurrentSotre} />}
    </div>
  );
};

export default Map;
