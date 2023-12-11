"use client";
import FormBox from "@/components/FormBox";
import Script from "next/script";

import React from "react";

const NewPage = () => {
  const complete = () => {
    console.log("complete1");
  };

  return (
    <>
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        onReady={complete}
      />

      <FormBox />
    </>
  );
};

export default NewPage;
