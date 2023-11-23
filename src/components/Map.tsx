import * as stores from "@/data/seoul_store.json";
import markerHandler from "@/util/markerHandler";
import Script from "next/script";
import React from "react";

const DEFAULT_LAT = 37.497625203;
const DEFAULT_LNG = 127.03088379;

const Map = () => {
  const loadKakaoMap = () => {
    kakao.maps.load(() => {
      const { kakao } = window;

      const mapContainer = document.getElementById("map") as HTMLElement;

      const mapOption = {
        center: new kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
        level: 3,
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      stores?.["DATA"].forEach((store, idx) => {
        if (idx > 100) return;
        let { y_dnts, x_cnts } = store;
        let imageSrc = "/images/markers/" + markerHandler(store?.bizcnd_code_nm);
        let imgMarker = new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(40, 40), {
          offset: new kakao.maps.Point(27, 69),
          alt: "마커 이미지",
          shape: "poly",
        });
        let markerPos = new kakao.maps.LatLng(Number(y_dnts), Number(x_cnts));

        let marker = new kakao.maps.Marker({
          position: markerPos,
          image: imgMarker,
        });
        marker.setMap(map);
      });
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
