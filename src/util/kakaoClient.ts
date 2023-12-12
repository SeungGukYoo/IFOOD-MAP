import type { LocationDocuments, SearchJson } from "@/hooks/useAddStore";

interface IKakaoClient {
  url: string;
  locationSearch(data: string): Promise<LocationDocuments>;
  get(data: string): Promise<SearchJson>;
}

class KakaoClient implements IKakaoClient {
  url: string;
  #REST_API_KEY: string;
  constructor() {
    console.log("constructor!!");
    this.#REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_RESTAPI_KEY as string;
    this.url = "https://dapi.kakao.com/v2/local/search/address.JSON";
  }
  get(data: string): Promise<SearchJson> {
    return fetch(`${this.url}?query=${data}`, {
      method: "GET",
      headers: {
        "Authorization": `KakaoAK ${this.#REST_API_KEY}`,
        "content-type": "application/json;charset=UTF-8",
      },
    }).then((response) => response.json());
  }

  async locationSearch(data: string) {
    const response = await this.get(data);
    return response.documents[0];
  }
}
export default KakaoClient;
// export default function kakaoClient(data: string) {}
