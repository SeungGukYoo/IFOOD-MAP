import Map from "@/components/Map";
import { getStoreData } from "./lib/getStoreData";

export interface StoreType {
  id: number;
  phone: string | null;
  address: string | null;
  lat: string | null;
  lng: string | null;
  name: string | null;
  category: string | null;
  storeType: string | null;
  foodCertifyName: string | null;
}
export type StoresType = StoreType[];
export type StoreDataType = {
  data: StoresType;
};
export default async function Home() {
  const storeData: StoreDataType = await getStoreData("isr");
  return (
    <>
      <Map store={storeData.data} />
    </>
  );
}
