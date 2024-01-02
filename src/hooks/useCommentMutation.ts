import { CommentDataType } from "@/app/_lib/setCommentData";
import { MutationFunction, MutationKey, useMutation, useQueryClient } from "@tanstack/react-query";

export interface UseCommentMutation {
  commentData: CommentDataType;
  commentId?: number;
}

/**
 *
 * @param mutateFn (data)=>API 호출 함수(App/_lib/*)
 * mutateFn: MutationFunction<TData = unknown, TVariables = unknown> = (variables: TVariables) => Promise<TData>;
 * 기본 타입은 위의 타입으로 설정되어 있어, 받은 값을 바탕으로 타입을 추론하여 자동으로 타입이 적용되어진다.
 * 하지만 제네릭을 받지 않아 타입 추론이 되지 않아 임시방편으로 "as"를 사용하여 타입을 작성하였다.
 * @param mutateKey ["store", String Type value]
 * @returns
 */

const useCommentMutation = (mutateFn: MutationFunction, mutateKey: MutationKey) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: mutateKey,
    mutationFn: mutateFn,
    onSuccess: (data) => {
      if ((data as Response)?.ok) {
        queryClient.invalidateQueries({ queryKey: mutateKey });
        [];
      }
    },
  });
};

export default useCommentMutation;
