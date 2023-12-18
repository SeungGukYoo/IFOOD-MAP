import Map from "@/components/Map";
import { getStoresData } from "./lib/getStoresData";

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
