import { StoreType } from "@/app/page";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import usePostcode from "./usePostcode";

type Inputs = {
  name: string;
  category: string;
  phone: string;
  roadAddress: string;
  postAddress: string;
  foodCertifyName: string;
  storeType: string;
};

const useAddStore = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  watch("name");
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const positionResponse = await fetch(
        `https://dapi.kakao.com/v2/local/search/address.JSON?query=${data.roadAddress}`,
        {
          method: "GET",
          headers: {
            "Authorization": `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_RESTAPI_KEY}`,
            "content-type": "application/json;charset=UTF-8",
          },
        }
      );
      const positionJson = await positionResponse.json();

      // const response = await fetch("/api/store", {
      //   method: "POST",
      //   body: JSON.stringify({ data: data }),
      // });
      // if (response.status !== 201) {
      //   throw new Error("예기치 못한 에러가 발생하였습니다.");
      // }
      // const json: StoreType = await response.json();
      // router.replace(`/stores/${json.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useAddStore;
