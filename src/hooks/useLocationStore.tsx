import { create } from "zustand";

interface Store {
  latitude: number;
  longitude: number;
}
interface Action {
  changeCoordinates: (lat: number, lon: number) => void;
}
const useLocationStore = create<Store & Action>()((set) => ({
  latitude: 37.497625203,
  longitude: 127.03088379,
  changeCoordinates: (lat, lon) =>
    set({
      latitude: lat,
      longitude: lon,
    }),
}));

export default useLocationStore;
