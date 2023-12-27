import { create } from "zustand";

interface Store {
  isEdit: number;
}
interface Action {
  setIsEdit: (editCommentId: number) => void;
}

const useEditCommentStore = create<Store & Action>()((set) => ({
  isEdit: -1,
  setIsEdit: (editCommentId: number) => set({ isEdit: editCommentId }),
}));

export default useEditCommentStore;
