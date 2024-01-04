"use client";

import { setStoreData } from "@/app/_lib/setStoreData";
import { StoreType } from "@/app/page";
import useAddress from "@/hooks/useAddressStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import FormBox from "./FormBox";

const AddFormBox = () => {
  const router = useRouter();
  const { changeAddress } = useAddress();
  const { mutate: handleAddForm } = useMutation({
    mutationFn: async (data: StoreType) => {
      const res = await setStoreData(data);
      if (res) {
        changeAddress("");
      }
      return res;
    },
    onSuccess: (data) => {
      if (data) {
        router.replace(`/stores/${data?.id}`);
      }
    },
  });

  return (
    <div>
      <FormBox submit={handleAddForm} isEditing={false} />
    </div>
  );
};

export default AddFormBox;
