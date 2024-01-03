"use client";

import { StoreType } from "@/app/page";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

import CommentBox from "@/app/stores/_components/CommentBox";
import CommentInputBox from "@/app/stores/_components/CommentInputBox";

import useDeleteStore from "@/hooks/useDeleteStore";
import usePopupStore from "@/hooks/usePopupStore";
import { useSession } from "next-auth/react";
import LikeButtonBox from "./LikeButtonBox";
import Map from "./Map";

const StoreDetailBox = ({ store: data }: { store: StoreType }) => {
  const { slug: params } = useParams();
  const { mutate } = useDeleteStore(params);
  const session = useSession();
  const { setIsPopup } = usePopupStore();

  return (
    <>
      <div className="px-4">
        <div className="w-full flex gap-3 items-center justify-end">
          <LikeButtonBox store={data} />
          {session.data?.user.access_token?.sub && session.data?.user.access_token?.sub === data.authorId?.toString() && (
            <>
              <Link
                className="text-gray-300 font-medium focus:text-black hover:text-black"
                href={`/stores/${params}/edit`}
              >
                수정
              </Link>
              <button className="text-gray-300 font-medium focus:text-black hover:text-black" onClick={() => mutate()}>
                삭제
              </button>
            </>
          )}
        </div>
      </div>

      <div className="border-t border-gray-100 mt-6">
        <dl className="divide-y divide-gray-100">
          <div className="py-6 px-4 grid grid-cols-3 gap-4 md:text-lg">
            <dt className="font-medium leading-6 text-gray-900">이름</dt>
            <dd className="leading-6 text-gray-700 col-span-2 flex items-center">{data?.name || "-"}</dd>
          </div>
          <div className="py-6 px-4 grid grid-cols-3 gap-4 md:text-lg">
            <dt className="font-medium leading-6 text-gray-900">번호</dt>

            <dd className="leading-6 text-gray-700 col-span-2 flex items-center">{data?.phone || "-"}</dd>
          </div>
          <div className="py-6 px-4 grid grid-cols-3 gap-4 md:text-lg">
            <dt className="font-medium leading-6 text-gray-900">주소</dt>

            <dd className="leading-6 text-gray-700 col-span-2 flex items-center">{data?.address || "-"}</dd>
          </div>
          <div className="py-6 px-4 grid grid-cols-3 gap-4 md:text-lg">
            <dt className="font-medium leading-6 text-gray-900">분류</dt>
            <dd className="leading-6 text-gray-700 col-span-2 flex items-center">{data?.category || "-"}</dd>
          </div>
          <div className="py-6 px-4 grid grid-cols-3 gap-4 md:text-lg">
            <dt className="font-medium leading-6 text-gray-900">특징</dt>

            <dd className="leading-6 text-gray-700 col-span-2 flex items-center">{data?.foodCertifyName || "-"}</dd>
          </div>
          <div className="py-6 px-4 grid grid-cols-3 gap-4 md:text-lg">
            <dt className="font-medium leading-6 text-gray-900">업소 종류</dt>

            <dd className="leading-6 text-gray-700 col-span-2 flex items-center">{data?.storeType || "-"}</dd>
          </div>
          <div className="py-6 px-4">
            <Map store={[data]} />
          </div>
        </dl>
      </div>
      <div className="border-t border-gray-100">
        <div className="mt-4 px-4">
          {session.data?.user.access_token?.sub && <CommentInputBox store={data} />}
          <ul className="divide-y-2 divide-gray-100" onClick={() => setIsPopup(-1)}>
            {data.comments &&
              data.comments.map((comment, idx) => <CommentBox comment={comment} idx={idx} key={comment.id} />)}
          </ul>
        </div>
      </div>
    </>
  );
};

export default StoreDetailBox;
