"use client";

import { StoreType, StoresType } from "@/app/page";
import { useEffect, useState } from "react";
import useLocationStore from "./useLocationStore";
import useMapSetting from "./useMapSetting";
import useMapStore from "./useMapStore";

const useMap = () => {
  const { map, setMap } = useMapStore();
  const [storeData, setStoreData] = useState<StoresType>();
  const [currentSotre, setCurrentSotre] = useState<StoreType | null>(null);
  const { latitude, longitude, changeCoordinates, getCoordinates } = useLocationStore();
  const { settingMapAndOverlay } = useMapSetting(map);

  const loadKakaoMap = (data: StoreType[]) => {
    if (data.length === 1) {
      const { lat, lng } = data[0];
      changeCoordinates(parseFloat(lat!), parseFloat(lng!));
    }
    kakao.maps.load(() => {
      const { kakao } = window;
      const mapContainer = document.getElementById("map") as HTMLElement;

      const mapOption = {
        center: new kakao.maps.LatLng(getCoordinates()[0], getCoordinates()[1]),
        level: 3,
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);
      setMap(map);
    });
  };

  useEffect(() => {
    const resizeEvent = () => {
      map?.setCenter(new kakao.maps.LatLng(latitude, longitude));
    };
    if (map && storeData?.length === 1) {
      window.addEventListener("resize", () => resizeEvent());
    }
    return () => window.removeEventListener("resize", resizeEvent);
  }, [map, storeData, latitude, longitude]);

  useEffect(() => {
    if (map && storeData) {
      storeData.forEach((store) => {
        const { marker, customOverlayObject } = settingMapAndOverlay(store)!;
        kakao.maps.event.addListener(marker, "mouseover", () => {
          customOverlayObject.setMap(map);
        });
        kakao.maps.event.addListener(marker, "mouseout", () => {
          customOverlayObject.setMap(null);
        });
        kakao.maps.event.addListener(marker, "click", () => {
          if (storeData.length !== 1) {
            customOverlayObject.setMap(map);
            setCurrentSotre(store);
          }
        });
      });
    }
  }, [map, settingMapAndOverlay, storeData]);

  return {
    currentSotre,
    setStoreData,
    loadKakaoMap,
    setCurrentSotre,
  };
};

export default useMap;
