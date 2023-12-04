"use client";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";

const LoginPage = () => {
  return (
    <div className="text-center h-[calc(100vh-52px)] flex items-center justify-center flex-col gap-5 ">
      <div className="md:mb-16">
        <h1 className="text-5xl font-bold md:text-7xl">iFOOD</h1>
        <p className="text-sm text-gray-500 mb-3 md:text-xl">음식에 진심인 그대들을 위한 지도</p>
      </div>
      <p className="text-xl">SNS 계정을 통해 쉽게 로그인하세요</p>
      <button className="border rounded-md font-bold min-w-[350px] min-h-[50px] bg-white shadow-md text-lg ">
        <span className="text-blue-500">G</span>
        <span className="text-red-400">o</span>
        <span className="text-yellow-400">o</span>
        <span className="text-blue-500">g</span>
        <span className="text-green-600">l</span>
        <span className="text-blue-500">e</span>
        <span className="ml-2">구글 로그인</span>
      </button>
      <button className="border rounded-md font-bold min-w-[350px] min-h-[50px] bg-yellow-400 shadow-md text-lg flex items-center justify-center gap-2">
        <RiKakaoTalkFill className="text-2xl" />
        카카오 로그인
      </button>
      <button className="border rounded-md font-bold min-w-[350px] min-h-[50px] bg-green-500 shadow-md text-white text-lg flex items-center justify-center gap-2">
        <SiNaver className="text-xl" />
        네이버 로그인
      </button>
    </div>
  );
};

export default LoginPage;
