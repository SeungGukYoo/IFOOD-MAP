import deleteStoreData from "@/app/lib/deleteStoreData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useDeleteStore = (id: string | string[]) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteStoreData(id),
    mutationKey: ["store", id],
    onSuccess: (data) => {
      if (data.ok) {
        queryClient.removeQueries({ queryKey: ["store", id] });
        router.replace("/stores");
      }
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return mutation;
};

export default useDeleteStore;
