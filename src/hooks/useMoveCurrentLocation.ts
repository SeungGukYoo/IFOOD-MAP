import useGlobalLoadingStore from "./useGlobalLoadingStore";
import useLocationStore from "./useLocationStore";
import useMapStore from "./useMapStore";

const useMoveCurrentLocation = () => {
  const map = useMapStore.getState().map;
  const { changeCoordinates } = useLocationStore();
  const { setIsLoading } = useGlobalLoadingStore();
  return () => {
    if (!map) return;
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          if (lat && lng) {
            changeCoordinates(lat, lng);
            const movePosition = new kakao.maps.LatLng(lat, lng);
            map.setCenter(movePosition);
            setIsLoading(false);
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
};
export default useMoveCurrentLocation;
