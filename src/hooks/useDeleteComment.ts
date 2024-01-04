import deleteCommentData from "@/app/_lib/deleteCommentData";
import { Comment } from "@/app/page";
import useCommentMutation from "./useCommentMutation";
import usePopupStore from "./usePopupStore";

const useDeleteComment = (comment: Comment) => {
  const { setIsPopup } = usePopupStore();

  const deleteComment = useCommentMutation(
    (id) => deleteCommentData(id as number | string),
    ["store", comment.storeId.toString()]
  );
  const onSuccessCallback = () => {
    setIsPopup(-1);
  };
  const handleDeleteComment = () =>
    deleteComment.mutate(comment.id, {
      onSuccess: onSuccessCallback,
    });

  return { handleDeleteComment };
};

export default useDeleteComment;
