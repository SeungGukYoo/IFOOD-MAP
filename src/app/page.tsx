import { auth } from "@/util/auth";
import { getStoresData } from "./lib/getStoresData";
import Map from "./stores/_components/Map";

type NullAble<T> = T | null;

export interface User {
  id: number;
  name: string;
  email: string;
  emailVerified: NullAble<number>;
  image: NullAble<string>;
  picture: NullAble<string>;
}

export interface Like {
  id: number;
  storeId: number;
  userId: number;
  createdAt: number;
}
export interface Comment {
  content: string;
  createdAt: string;
  id: number;
  storeId: number;
  user: User;
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
  comments?: Comment[];
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
