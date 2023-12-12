import { create } from "zustand";

interface Store {
  address: string;
}

interface Action {
  changeAddress: (value: string) => void;
}

const useAddress = create<Store & Action>()((set) => ({
  address: "",
  changeAddress: (value: string) => set({ address: value }),
}));

export default useAddress;
