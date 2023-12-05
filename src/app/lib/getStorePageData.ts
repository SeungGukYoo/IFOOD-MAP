import { StoresType } from "../page";

interface StoreListType {
  data: StoresType;
  dataSize: number;
  page: number;
  totalPage: number;
}
const getStoresPageData: (page: string | number) => Promise<StoreListType> = async (page) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores?page=${page}`);
  if (!response.ok) {
    throw new Error("예기치 못한 에러가 발생하였습니다(getStorePageData)");
  }
  return response.json();
};

export default getStoresPageData;
