import deleteStoreData from "@/app/_lib/deleteStoreData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import useSearchStore from "./useSearchStore";

const useDeleteStore = (id: string | string[]) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { district, name, changeDistrict, changeName } = useSearchStore();
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await deleteStoreData(id);
      if (response.ok) {
        queryClient.removeQueries({ queryKey: ["store", id] });
        queryClient.removeQueries({ queryKey: ["stores", district, name] });
      }
      return response;
    },
    mutationKey: ["store", id],
    onSuccess: (data) => {
      if (data.ok) {
        changeName("");
        changeDistrict("");
        router.replace("/stores");
        router.refresh();
      }
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return mutation;
};

export default useDeleteStore;
