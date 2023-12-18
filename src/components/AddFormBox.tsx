"use client";
import { setStoreData } from "@/app/lib/setStoreData";
import { StoreType } from "@/app/page";
import useAddress from "@/hooks/useAddressStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import FormBox from "./FormBox";

const AddFormBox = () => {
  const router = useRouter();
  const { changeAddress } = useAddress();
  const { mutate: handleAddForm } = useMutation({
    mutationFn: async (data: StoreType) => {
      const response = await setStoreData(data);
      return response;
    },
    onSuccess: (data) => {
      console.log(data, "onsucess");
      router.replace(`/stores/${data?.id}`);
      router.refresh();
      changeAddress("");
    },
  });

  return (
    <div>
      <FormBox submit={handleAddForm} isEditing={false} />
    </div>
  );
};

export default AddFormBox;
