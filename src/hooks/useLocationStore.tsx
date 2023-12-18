import { create } from "zustand";

interface Store {
  latitude: number;
  longitude: number;
}
interface Action {
  changeCoordinates: (lat: number, lon: number) => void;
  getCoordinates: () => number[];
  resetCoordinates: () => void;
}
const initialLocation: Store = {
  latitude: 37.497625203,
  longitude: 127.03088379,
};
const useLocationStore = create<Store & Action>()((set, get) => ({
  ...initialLocation,
  changeCoordinates: (lat, lon) =>
    set({
      latitude: lat,
      longitude: lon,
    }),
  getCoordinates: () => {
    return [get().latitude, get().longitude];
  },
  resetCoordinates: () => set(initialLocation),
}));

export default useLocationStore;
