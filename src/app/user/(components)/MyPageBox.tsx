"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { LuUser2 } from "react-icons/lu";
interface UserInfo {
  email?: string | null;
  name?: string | null;
  image?: string | null;
}

const MyPageBox = ({ userInfo }: { userInfo: UserInfo }) => {
  return (
    <div>
      <div className="divide-y-2 divide-gray-100">
        <div className="grid grid-cols-4 py-4">
          <p className="flex items-center font-bold">이름</p>
          <p className="col-span-3 text-lg">{userInfo.name}</p>
        </div>

        <div className="grid grid-cols-4 py-4">
          <p className="flex items-center font-bold">프로필</p>
          <div className="flex items-center col-span-3">
            {userInfo.image ? (
              <Image src={userInfo.image} alt="profile image" width={50} height={50} className="rounded-full" />
            ) : (
              <>
                <LuUser2 />
              </>
            )}
          </div>
        </div>
        <div className="grid grid-cols-4 py-4">
          <p className="flex items-center font-bold">이메일</p>
          <p className="col-span-3 text-lg">{userInfo.email}</p>
        </div>
        <div className="grid grid-cols-4 py-4">
          <p className="flex items-center font-bold">설정</p>
          <div className="col-span-3">
            <button
              className="text-lg text-gray-400"
              onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageBox;
