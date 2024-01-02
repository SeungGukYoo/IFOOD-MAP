import { create } from "zustand";

interface Store {
  map: kakao.maps.Map | undefined;
}

interface Action {
  getMap: () => kakao.maps.Map | void;
  setMap: (map: kakao.maps.Map) => void;
}

const useMapStore = create<Store & Action>()((set, get) => ({
  map: undefined,
  getMap: () => {
    if (get().map) {
      return get().map;
    }
  },
  setMap: (map) => {
    if (map) {
      set({ map });
    }
  },
}));

export default useMapStore;
