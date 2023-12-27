import { StoreType } from "@/app/page";
import useLikeStore from "@/hooks/useLikeStore";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";

const LikeButtonBox = ({ store }: { store: StoreType }) => {
  const { like, updateLike } = useLikeStore(store);

  return (
    <>
      <button onClick={() => updateLike(store.id)} className="text-xl">
        {like ? <FcLike /> : <CiHeart className="text-gray-400" />}
      </button>
    </>
  );
};

export default LikeButtonBox;
