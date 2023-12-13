import markerHandler from "@/util/markerHandler";

interface IKakaoMapClient {
  convertStringToNumber(value: string | number): number;
  makeImageSrc(category: string): string;
  makeImageMarker(storeCategory: string): kakao.maps.MarkerImage;
  createcoordinateObject(lat: number, lng: number): kakao.maps.LatLng;
  settingMarkerAtCoordinates(position: kakao.maps.LatLng, image: kakao.maps.MarkerImage): kakao.maps.Marker;
  settingOverlayAtCoordinates(position: kakao.maps.LatLng, content: string): kakao.maps.CustomOverlay;
}

class KakaoMapClient implements IKakaoMapClient {
  settingOverlayAtCoordinates(position: kakao.maps.LatLng, content: string): kakao.maps.CustomOverlay {
    return new kakao.maps.CustomOverlay({
      position,
      content,
      xAnchor: 0.6,
      yAnchor: 0.91,
    });
  }
  settingMarkerAtCoordinates(position: kakao.maps.LatLng, image: kakao.maps.MarkerImage): kakao.maps.Marker {
    return new kakao.maps.Marker({ position, image });
  }

  createcoordinateObject(lat: number | string, lng: number | string): kakao.maps.LatLng {
    lat = this.convertStringToNumber(lat);
    lng = this.convertStringToNumber(lng);

    return new kakao.maps.LatLng(lat, lng);
  }
  convertStringToNumber(value: string | number) {
    if (typeof value === "string") value = parseFloat(value);
    return value;
  }

  makeImageSrc(category?: string): string {
    return "/images/markers/" + markerHandler(category);
  }

  makeImageMarker(storeCategory?: string) {
    const imageSrc = this.makeImageSrc(storeCategory);

    return new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(40, 40), {
      offset: new kakao.maps.Point(27, 69),
      alt: "마커 이미지",
    });
  }
}

export default KakaoMapClient;
