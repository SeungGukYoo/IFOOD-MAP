import { create } from "zustand";
interface Store {
  district: string;
  name: string;
}
interface Action {
  changeName: (value: string) => void;
  changeDistrict: (value: string) => void;
}

const useSearchStore = create<Store & Action>()((set) => ({
  district: "",
  name: "",
  changeName: (value: string) => set({ name: value }),
  changeDistrict: (value: string) => set({ district: value }),
}));

export default useSearchStore;
