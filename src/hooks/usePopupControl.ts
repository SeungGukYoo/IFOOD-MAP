import { useEffect } from "react";

const usePopupControl = (currentCommentIdx: number, clickCommentIdx: number, stateFn: (idx: number) => void) => {
  useEffect(() => {
    if (currentCommentIdx === clickCommentIdx) {
      stateFn(-1);
    }
  }, [clickCommentIdx, currentCommentIdx, stateFn]);
};

export default usePopupControl;
