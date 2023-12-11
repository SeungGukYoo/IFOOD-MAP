import { create } from "zustand";

interface Store {
  roadAddress: string;
  postAddress: string;
}

interface Action {
  changeAddress: (roadValue: string, postValue: string) => void;
}

const useAddress = create<Store & Action>()((set) => ({
  roadAddress: "",
  postAddress: "",
  changeAddress: (roadValue: string, postValue: string) => {
    set({ postAddress: postValue });
    set({ roadAddress: roadValue });
  },
}));

export default useAddress;
