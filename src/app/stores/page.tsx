import StoresList from "@/components/StoresList";
import React from "react";
import { getStoreData } from "../lib/getStoreData";

const Stores = async () => {
  const storesData = await getStoreData("ssr");
  return <StoresList stores={storesData.data["DATA"]} />;
};

export default Stores;
