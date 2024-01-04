import { create } from "zustand";

interface Store {
  map: kakao.maps.Map | undefined;
}

interface Action {
  setMap: (map: kakao.maps.Map) => void;
}

const useMapStore = create<Store & Action>()((set) => ({
  map: undefined,
  setMap: (map) => {
    if (map) {
      set({ map });
    }
  },
}));

export default useMapStore;
