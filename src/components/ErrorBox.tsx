"use client";
import React from "react";
import { TbError404 } from "react-icons/tb";
const ErrorBox = () => {
  return (
    <div className="w-full h-[calc(100vh-52px)] flex flex-col justify-center items-center text-lg md:text-xl text-center">
      <TbError404 className="w-[45px] h-[45px] md:w-[70px] md:h-[70px]" />
      예기치 못한 에러가 발생하였습니다.
      <br /> 잠시후에 다시 시도해주세요.
    </div>
  );
};

export default ErrorBox;
