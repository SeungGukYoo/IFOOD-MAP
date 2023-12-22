import Map from "@/components/Map";
import { auth } from "@/util/auth";
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
  authorId?: number;
  likes?: Like[];
}
export type StoresType = StoreType[];
export type StoreDataType = {
  data: StoresType;
};
export default async function Home() {
  const authInfo = await auth();
  const storeData: StoreDataType = await getStoresData(authInfo?.user.access_token?.sub);
  return (
    <>
      <Map store={storeData.data} />
    </>
  );
}
