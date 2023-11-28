"use client";

import type * as stores from "@/data/seoul_store.json";
import markerHandler from "@/util/markerHandler";
import React, { useEffect, useState } from "react";

export type StoreType = typeof stores.DATA[number];

const DEFAULT_LAT = 37.497625203;
const DEFAULT_LNG = 127.03088379;

const useMap = () => {
  const [map, setMap] = useState<null | kakao.maps.Map>(null);
  const [storeData, setStoreData] = useState<null | typeof stores.DATA>(null);
  const [currentSotre, setCurrentSotre] = useState<typeof stores.DATA[number] | null>(null);

  const loadKakaoMap = () => {
    kakao.maps.load(() => {
      const { kakao } = window;
      const mapContainer = document.getElementById("map") as HTMLElement;

      const mapOption = {
        center: new kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
        level: 3,
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);
      setMap(map);
    });
  };

  useEffect(() => {
    if (map && storeData) {
      storeData.forEach((store, idx) => {
        let { y_dnts, x_cnts } = store;
        let imageSrc = "/images/markers/" + markerHandler(store?.bizcnd_code_nm);
        let imgMarker = new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(40, 40), {
          offset: new kakao.maps.Point(27, 69),
          alt: "마커 이미지",
        });
        let markerPos = new kakao.maps.LatLng(Number(y_dnts), Number(x_cnts));
        let marker = new kakao.maps.Marker({
          position: markerPos,
          image: imgMarker,
        });
        marker.setMap(map);
        let infoContent = `<div class="infoWindow">${store?.upso_nm}</div>`;
        let customOverlay = new kakao.maps.CustomOverlay({
          position: markerPos,
          content: infoContent,
          xAnchor: 0.6,
          yAnchor: 0.91,
        });
        kakao.maps.event.addListener(marker, "mouseover", () => {
          customOverlay.setMap(map);
        });
        kakao.maps.event.addListener(marker, "mouseout", () => {
          customOverlay.setMap(null);
        });
        kakao.maps.event.addListener(marker, "click", () => {
          customOverlay.setMap(map);
          setCurrentSotre(store);
        });
      });
    }
  }, [map, storeData]);
  return {
    currentSotre,
    setStoreData,
    loadKakaoMap,
    setCurrentSotre,
  };
};

export default useMap;
