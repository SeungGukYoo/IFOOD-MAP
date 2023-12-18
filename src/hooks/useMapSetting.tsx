import { StoreType } from "@/app/page";
import useKakaoClientStore from "./useKakaoClientStore";

const useMapSetting = (map?: kakao.maps.Map) => {
  const { kakaoMapClient } = useKakaoClientStore();
  const settingMapAndOverlay = (store: StoreType) => {
    if (!map) return;

    const { lat, lng } = store;
    const markerImageObject = kakaoMapClient.makeImageMarker(store.category);
    const markerCoordinateObject = kakaoMapClient.createcoordinateObject(lat!, lng!);
    const marker = kakaoMapClient.settingMarkerAtCoordinates(markerCoordinateObject, markerImageObject);

    const infoContent = `<div class="infoWindow">${store?.name}</div>`;
    const customOverlayObject = kakaoMapClient.settingOverlayAtCoordinates(markerCoordinateObject, infoContent);
    marker.setMap(map);

    return { marker, customOverlayObject };
  };
  return { settingMapAndOverlay };
};

export default useMapSetting;
