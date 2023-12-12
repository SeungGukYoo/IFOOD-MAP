import { setStoreData } from "@/app/lib/setStoreData";
import { StoreType } from "@/app/page";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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
  const path = usePathname();
  const [id, setId] = useState(-1);
  const { address, changeAddress } = useAddress();
  const { latitude, longitude } = useLocationStore();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const includeLocationData = {
        ...data,
        lat: latitude.toString(),
        lng: longitude.toString(),
      };
      const response = await setStoreData(includeLocationData);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const onUpdate: SubmitHandler<Inputs> = async (data) => {
    try {
      const updateFormData = {
        ...data,
        id,
        lat: latitude.toString(),
        lng: longitude.toString(),
      };
      const response = await setStoreData(updateFormData);
      return response;
    } catch (err) {
      console.error(err);
    }
  };
  const submitForm: SubmitHandler<Inputs> = async (data) => {
    try {
      let response: StoreType;
      if (path === "/stores/new") {
        response = (await onSubmit(data)) as StoreType;
      } else {
        response = (await onUpdate(data)) as StoreType;
      }
      changeAddress("");
      router.replace(`/stores/${response?.id}`);
    } catch (err) {
      console.error(err);
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
    submitForm,
    setValue,
    setId,
  };
};

export default useAddStore;
