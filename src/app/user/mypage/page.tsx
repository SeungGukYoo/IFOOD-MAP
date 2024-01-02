import { auth } from "@/util/auth";
import React from "react";
import MyPageBox from "../_components/MyPageBox";

const MyPage = async () => {
  const authInfo = await auth();

  const userInfo = {
    name: authInfo?.user.name,
    image: authInfo?.user.image,
    email: authInfo?.user.email,
  };

  return (
    <>
      <MyPageBox userInfo={userInfo} />
    </>
  );
};

export default MyPage;
