import Script from "next/script";
import React from "react";

const Map = () => {
  const loadKakaoMap = () => {
    kakao.maps.load(() => {
      const { kakao } = window;
      const mapContainer = document.getElementById("map") as HTMLElement;
      const mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      return new kakao.maps.Map(mapContainer, mapOption);
    });
  };
  return (
    <>
      <div id="map" className="w-full h-screen"></div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`}
        onReady={loadKakaoMap}
      />
    </>
  );
};

export default Map;
