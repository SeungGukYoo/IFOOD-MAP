import { getLikeData } from "@/app/lib/getLikeData";
import { setLikeData } from "@/app/lib/setLikeData";
import { StoreType } from "@/app/page";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import LikeButton from "./LikeButton";

const LikeStoreBox = ({ store }: { store: StoreType }) => {
  const [like, setLike] = useState(!!store.likes.length);
  const handleLike = async () => {
    try {
      const data = await setLikeData(store.id?.toString()!);

      setLike((prev) => (prev = !prev));
    } catch (err) {
      console.error(err);
    }
  };
  const getLike = async () => {
    const data = await getLikeData(store.id!);
  };

  return (
    <>
      <button onClick={handleLike} className="text-xl">
        {like ? <FcLike /> : <CiHeart className="text-gray-400" />}
      </button>
    </>
  );
};

export default LikeStoreBox;
