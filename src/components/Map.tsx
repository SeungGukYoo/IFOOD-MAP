"use client";
import { StoresType } from "@/app/page";
import useMap from "@/hooks/useMap";
import Script from "next/script";
import React, { useEffect } from "react";
import StoreBox from "./StoreBox";

const Map = ({ store }: { store: StoresType }) => {
  const { currentSotre, setStoreData, loadKakaoMap, setCurrentSotre } = useMap();

  useEffect(() => {
    if (store) {
      setStoreData(store);
    }
  }, [store, setStoreData]);

  return (
    <div>
      <div id="map" className="w-full h-[calc(100vh-52px)]"></div>
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
