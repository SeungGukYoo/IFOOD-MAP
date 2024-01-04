"use client";
import React from "react";
import { TbError404 } from "react-icons/tb";
interface ErrorBoxProps {
  children: React.ReactNode;
  text: string;
}
const ErrorBox = ({ children, text }: ErrorBoxProps) => {
  return (
    <div className="w-full h-[calc(100vh-52px)] flex flex-col justify-center items-center text-lg md:text-xl text-center">
      <TbError404 className="w-[45px] h-[45px] md:w-[70px] md:h-[70px]" />
      {text}
      {children}
    </div>
  );
};

export default ErrorBox;
