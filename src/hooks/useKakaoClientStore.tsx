import KakaoClient from "@/util/kakaoClient";
import { create } from "zustand";
interface Store {
  kakaoClient: KakaoClient;
}

const useKakaoClientStore = create<Store>()(() => ({
  kakaoClient: new KakaoClient(),
}));

export default useKakaoClientStore;
