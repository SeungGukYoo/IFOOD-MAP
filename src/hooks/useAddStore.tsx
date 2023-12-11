import { StoreType } from "@/app/page";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  category: string;
  phone: string;
  address: string;
  foodCertifyName: string;
  storeType: string;
};

const useAddStore = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("/api/store", {
        method: "POST",
        body: JSON.stringify({ data: data }),
      });
      if (response.status !== 201) {
        throw new Error("예기치 못한 에러가 발생하였습니다.");
      }
      const json: StoreType = await response.json();
      router.replace(`/stores/${json.id}`);
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
