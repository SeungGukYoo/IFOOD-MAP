import { create } from "zustand";

interface Store {
  isLoading: boolean;
}
interface Action {
  setIsLoading: (isLoadingValue: boolean) => void;
  getLoadingValue: () => boolean;
}

const useGlobalLoadingStore = create<Store & Action>()((set, get) => ({
  isLoading: false,
  setIsLoading: (isLoadingValue) => set({ isLoading: isLoadingValue }),
  getLoadingValue: () => get().isLoading,
}));

export default useGlobalLoadingStore;
