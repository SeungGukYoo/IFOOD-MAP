"use client";
import useMoveCurrentLocation from "@/hooks/useMoveCurrentLocation";
import React from "react";
import { MdOutlineMyLocation } from "react-icons/md";

const LocationButton = () => {
  const getUserLocation = useMoveCurrentLocation();

  return (
    <button
      className="p-2 bg-[#fff] fixed right-[10px] bottom-[60px] shadow-lg z-[45] items-center rounded-md"
      onClick={getUserLocation}
    >
      <MdOutlineMyLocation className="h-5 w-5" />
    </button>
  );
};

export default LocationButton;
