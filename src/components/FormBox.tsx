"use client";
import { StoreType } from "@/app/page";
import { CATEGORY, FOOD_CERTIFY_ARR, STORE_TYPE } from "@/data/defaultFormData";
import usePostcode from "@/hooks/usePostcode";
import useStoreForm from "@/hooks/useStoreForm";
import { UseMutateFunction } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

interface FormBoxProps {
  submit: UseMutateFunction<void | StoreType, Error, StoreType, unknown>;
  initialValue?: StoreType;
  isEditing?: boolean;
}

const FormBox = ({ submit, initialValue, isEditing }: FormBoxProps) => {
  const { register, handleSubmit, submitForm, errors, setValue } = useStoreForm(submit);
  const { handleClick } = usePostcode();
  const router = useRouter();
  useEffect(() => {
    if (initialValue) {
      setValue("address", initialValue.address || "");
      setValue("category", initialValue.category || "");
      setValue("foodCertifyName", initialValue.foodCertifyName || "");
      setValue("name", initialValue.name || "");
      setValue("phone", initialValue.phone || "");
      setValue("storeType", initialValue.storeType || "");
    }
  }, [initialValue, setValue]);

  return (
    <div className="max-w-[1024px] mx-auto mt-5">
      <form className="px-4" onSubmit={handleSubmit(submitForm)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">맛집 등록</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">나만의 맛집을 새롭게 등록하세요</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name-1" className="block text-sm font-medium leading-6 text-gray-900">
                  가게명
                </label>
                <div className="mt-2">
                  <input type="text" className="form_box" {...register("name", { required: true })} />
                  {errors.name?.type === "required" && (
                    <div className="pt-2 text-xs text-red-500">필수 입력사항입니다.</div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  카테고리
                </label>
                <div className="mt-2">
                  <select id="category" className="form_box" {...register("category", { required: true })}>
                    <option value="">카테고리를 선택하세요</option>
                    {CATEGORY.map((type) => (
                      <option value={type} key={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.category?.type === "required" && (
                    <div className="pt-2 text-xs text-red-500">필수 입력사항입니다.</div>
                  )}
                </div>
              </div>

              <div className=" sm:col-span-4">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  연락처
                </label>
                <div className="mt-2">
                  <input type="tel" className="form_box" {...register("phone", { required: true })} />
                  {errors.phone?.type === "required" && (
                    <div className="pt-2 text-xs text-red-500">필수 입력사항입니다.</div>
                  )}
                </div>
              </div>

              <div className="md:col-span-3 sm:col-span-full">
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                  주소
                </label>

                <div className="mt-2">
                  <input
                    readOnly
                    type="text"
                    className="form_box mb-3"
                    onClick={handleClick}
                    {...register("address", { required: true })}
                  />
                  <button
                    type="button"
                    onClick={handleClick}
                    className="mt-2 rounded-md bg-indigo-600 px-3 py-2 text-[10px] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    주소 찾기
                  </button>
                  {errors.address?.type === "required" && (
                    <div className="pt-2 text-xs text-red-500">필수 입력사항입니다.</div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="foodCertifyName" className="block text-sm font-medium leading-6 text-gray-900">
                  업종
                </label>
                <div className="mt-2">
                  <select className="form_box" {...register("foodCertifyName", { required: true })}>
                    <option value="">업종을 선택하세요.</option>
                    {FOOD_CERTIFY_ARR.map((certify) => (
                      <option value={certify} key={certify}>
                        {certify}
                      </option>
                    ))}
                  </select>
                  {errors.foodCertifyName?.type === "required" && (
                    <div className="pt-2 text-xs text-red-500">필수 입력사항입니다.</div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="store_type" className="block text-sm font-medium leading-6 text-gray-900">
                  식품인증구분
                </label>
                <div className="mt-2">
                  <select className="form_box" {...register("storeType", { required: true })}>
                    <option value="">업종을 선택하세요</option>
                    {STORE_TYPE.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.storeType?.type === "required" && (
                    <div className="pt-2 text-xs text-red-500">필수 입력사항입니다.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" onClick={() => router.back()} className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isEditing ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBox;
