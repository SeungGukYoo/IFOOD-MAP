"use client";

import { StoreType, StoresType } from "@/app/page";
import markerHandler from "@/util/markerHandler";
import React, { useEffect, useState } from "react";

const useMap = (lat: number | string, lng: number | string) => {
  if (typeof lat === "string" && typeof lng === "string") {
    lat = parseFloat(lat);
    lng = parseFloat(lng);
  }
  const [map, setMap] = useState<null | kakao.maps.Map>(null);
  const [storeData, setStoreData] = useState<null | StoresType>(null);
  const [currentSotre, setCurrentSotre] = useState<StoreType | null>(null);

  const loadKakaoMap = () => {
    kakao.maps.load(() => {
      const { kakao } = window;
      const mapContainer = document.getElementById("map") as HTMLElement;

      const mapOption = {
        center: new kakao.maps.LatLng(lat as number, lng as number),
        level: 3,
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);
      setMap(map);
    });
  };

  useEffect(() => {
    const resizeEvent = () => {
      map?.setCenter(new kakao.maps.LatLng(lat as number, lng as number));
    };
    if (map && storeData?.length === 1) {
      window.addEventListener("resize", () => resizeEvent());
    }
    return window.removeEventListener("resize", resizeEvent);
  }, [map, storeData, lat, lng]);

  useEffect(() => {
    if (map && storeData) {
      storeData.forEach((store) => {
        let { lat, lng } = store;
        let imageSrc = "/images/markers/" + markerHandler(store?.category);
        let imgMarker = new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(40, 40), {
          offset: new kakao.maps.Point(27, 69),
          alt: "마커 이미지",
        });
        let markerPos = new kakao.maps.LatLng(Number(lat), Number(lng));
        let marker = new kakao.maps.Marker({
          position: markerPos,
          image: imgMarker,
        });
        marker.setMap(map);
        let infoContent = `<div class="infoWindow">${store?.name}</div>`;
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
          if (storeData.length !== 1) {
            customOverlay.setMap(map);
            setCurrentSotre(store);
          }
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
