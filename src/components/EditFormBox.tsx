"use client";
import { getStoreData } from "@/app/lib/getStoreData";
import { setStoreData } from "@/app/lib/setStoreData";
import { StoreType } from "@/app/page";
import useAddress from "@/hooks/useAddressStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import FormBox from "./FormBox";

const EditFormBox = ({ id }: { id: string }) => {
  const router = useRouter();
  const { changeAddress } = useAddress();
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["store", id],
    queryFn: () => getStoreData(id),
    staleTime: 60 * 1000 * 5,
  });

  const { mutate: handleEditForm } = useMutation({
    mutationKey: ["store", id],
    mutationFn: async (data: StoreType) => {
      const response = await setStoreData({ ...data, id: parseInt(id) });
      return response;
    },
    onSuccess: (data) => {
      changeAddress("");
      router.replace(`/stores/${id}`);
      router.refresh();
    },
  });

  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      {isSuccess && <FormBox initialValue={data} submit={handleEditForm} isEditing={true} />}
    </div>
  );
};

export default EditFormBox;
