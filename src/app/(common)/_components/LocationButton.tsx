"use client";
import useLocationStore from "@/hooks/useLocationStore";
import useMapStore from "@/hooks/useMapStore";
import React from "react";
import { MdOutlineMyLocation } from "react-icons/md";

const LocationButton = () => {
  const { changeCoordinates } = useLocationStore();
  const { getMap } = useMapStore();
  const getUserLocation = () => {
    const map = getMap();
    if (!map) return;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          console.log(lat, lng, "hoho");
          if (lat && lng) {
            changeCoordinates(lat, lng);
            const movePosition = new kakao.maps.LatLng(lat, lng);

            map.setCenter(movePosition);
          }
        },

        (error) => {
          console.error(error);
        },
        { maximumAge: 5000 }
      );
    } else {
      throw new Error("GPS 미지원");
    }
  };

  return (
    <button
      className="p-2 bg-[#fff] fixed right-[10px] bottom-[60px] shadow-lg z-50 items-center rounded-md"
      onClick={getUserLocation}
    >
      <MdOutlineMyLocation className="h-5 w-5" />
    </button>
  );
};

export default LocationButton;
