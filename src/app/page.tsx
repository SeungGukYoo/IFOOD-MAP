import Map from "@/components/Map";
import { dehydrate } from "@tanstack/react-query";
import getQueryClient from "./lib/getQueryClient";
import { getStoresData } from "./lib/getStoresData";

export interface Like {
  id: number;
  storeId: number;
  userId: number;
  createdAt: number;
}

export interface StoreType {
  id?: number;
  phone?: string;
  address?: string;
  lat?: string;
  lng?: string;
  name?: string;
  category?: string;
  storeType?: string;
  foodCertifyName?: string;
  likes: Like[];
}
export type StoresType = StoreType[];
export type StoreDataType = {
  data: StoresType;
};
export default async function Home() {
  const storeData: StoreDataType = await getStoresData();
  return (
    <>
      <Map store={storeData.data} />
    </>
  );
}
