import { StoreType } from "@/app/page";
import { UseMutateFunction } from "@tanstack/react-query";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAddress from "./useAddressStore";
import useLocationStore from "./useLocationStore";

const useStoreForm = (submitFn: UseMutateFunction<void | StoreType, Error, StoreType, unknown>) => {
  const { address } = useAddress();
  const { latitude, longitude } = useLocationStore();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const submitForm: SubmitHandler<Inputs> = (data) => {
    const includeLocationData = {
      ...data,
      lat: latitude.toString(),
      lng: longitude.toString(),
    };
    submitFn(includeLocationData);
  };

  useEffect(() => {
    if (address) {
      setValue("address", address);
    }
  }, [address, setValue]);

  return { register, handleSubmit, submitForm, errors, setValue };
};

export default useStoreForm;
export interface Inputs {
  name: string;
  category: string;
  phone: string;
  address: string;
  foodCertifyName: string;
  storeType: string;
}
