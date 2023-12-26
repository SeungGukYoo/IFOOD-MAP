import { create } from "zustand";

interface Store {
  isPopup: number;
}
interface Action {
  setIsPopup: (idx: number) => void;
}

const usePopupStore = create<Store & Action>()((set, get) => ({
  isPopup: -1,
  setIsPopup: (idx: number) =>
    set({
      isPopup: idx,
    }),
}));

export default usePopupStore;
