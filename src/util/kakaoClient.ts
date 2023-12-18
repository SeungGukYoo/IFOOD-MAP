interface IKakaoClient {
  url: string;
  locationSearch(data: string): Promise<LocationDocuments>;
  get(data: string): Promise<SearchJson>;
}

class KakaoClient implements IKakaoClient {
  url: string;
  #REST_API_KEY: string;
  constructor() {
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

export interface LocationDocuments {
  address: {
    address_name: string;
    b_code: string;
    h_code: string;
    main_address_no: string;
    mountain_yn: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_h_name: string;
    region_3depth_name: string;
    sub_address_no: string;
    x: string;
    y: string;
  };
  address_name: string;
  address_type: string;
  road_address: {
    address_name: string;
    building_name: string;
    main_building_no: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    road_name: string;
    sub_building_no: string;
    underground_yn: string;
    x: string;
    y: string;
    zone_no: string;
  };
  x: string;
  y: string;
}
export interface SearchJson {
  documents: Array<LocationDocuments>;
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
}
