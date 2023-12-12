import { getStoreData } from "@/app/lib/getStoreData";
import FormBox from "@/components/FormBox";
import React from "react";

const EditPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getStoreData(params.slug);
  return (
    <>
      <FormBox storeData={data} />
    </>
  );
};

export default EditPage;
