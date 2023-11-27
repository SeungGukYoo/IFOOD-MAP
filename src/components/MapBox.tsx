"use client";
import useMap, { StoreType } from "@/hooks/useMap";
import Script from "next/script";
import React, { useEffect } from "react";
import StoreBox from "./StoreBox";

const MapBox = ({ store }: { store: StoreType[] }) => {
  const { currentSotre, setStoreData, loadKakaoMap, setCurrentSotre } = useMap();
  useEffect(() => {
    if (store) {
      setStoreData(store);
    }
  }, [store, setStoreData]);

  return (
    <>
      <div id="map" className="w-full h-[calc(100vh-52px)]"></div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`}
        onReady={loadKakaoMap}
      />
      {currentSotre && <StoreBox store={currentSotre} setCurrentSotre={setCurrentSotre} />}
    </>
  );
};

export default MapBox;
