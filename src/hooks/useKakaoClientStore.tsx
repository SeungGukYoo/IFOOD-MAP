import KakaoClient from "@/util/kakaoClient";
import KakaoMapClient from "@/util/kakaoMapClient";
import { create } from "zustand";
interface Store {
  kakaoClient: KakaoClient;
  kakaoMapClient: KakaoMapClient;
}

const useKakaoClientStore = create<Store>()(() => ({
  kakaoClient: new KakaoClient(),
  kakaoMapClient: new KakaoMapClient(),
}));

export default useKakaoClientStore;
