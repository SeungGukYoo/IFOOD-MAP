import { CATEGORY, FOOD_CERTIFY_ARR, STORE_TYPE } from "@/data/defaultFormData";
import React from "react";

const NewPage = () => {
  return (
    <div className="max-w-[1024px] mx-auto mt-5">
      <form className="px-4">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">맛집 등록</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">나만의 맛집을 새롭게 등록하세요</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  가게명
                </label>
                <div className="mt-2">
                  <input type="text" name="name" id="name" autoComplete="given-name" className="form_box" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  카테고리
                </label>
                <div className="mt-2">
                  <select id="category" name="category" className="form_box">
                    {CATEGORY.map((type) => (
                      <option value={type} key={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  연락처
                </label>
                <div className="mt-2">
                  <input id="phone" name="phone" type="tel" className="form_box" />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                  주소
                </label>
                <div className="mt-2">
                  <input type="text" name="address" id="address" className="form_box" />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="certify" className="block text-sm font-medium leading-6 text-gray-900">
                  업종
                </label>
                <div className="mt-2">
                  <select name="certify" id="certify" className="form_box">
                    {FOOD_CERTIFY_ARR.map((certify) => (
                      <option value={certify} key={certify}>
                        {certify}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="store_type" className="block text-sm font-medium leading-6 text-gray-900">
                  식품인증구분
                </label>
                <div className="mt-2">
                  <select name="store_type" id="store_type" className="form_box">
                    {STORE_TYPE.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPage;
