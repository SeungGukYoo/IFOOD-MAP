import { setStoreData } from "@/app/lib/setStoreData";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAddress from "./useAddressStore";
import useKakaoClientStore from "./useKakaoClientStore";
import useLocationStore from "./useLocationStore";

export interface Inputs {
  name: string;
  category: string;
  phone: string;
  address: string;
  foodCertifyName: string;
  storeType: string;
}
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

const useAddStore = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const { address, changeAddress } = useAddress();
  const { kakaoClient } = useKakaoClientStore();
  const { changeCoordinates } = useLocationStore();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const locationResult = await kakaoClient.locationSearch(data.address);
      const { x, y } = locationResult;
      const includeLocationData = {
        ...data,
        lat: y,
        lng: x,
      };
      const response = await setStoreData(includeLocationData);
      changeCoordinates(parseFloat(y), parseFloat(x));
      changeAddress("");
      router.replace(`/stores/${response?.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (address) {
      setValue("address", address);
    }
  }, [address, setValue]);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useAddStore;
