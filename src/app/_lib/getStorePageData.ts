import { StoresType } from "../page";

interface StoreListType {
  data: StoresType;
  dataSize: number;
  page: number;
  totalPage: number;
}
type GetStoresData = (page: string | number, district: string, storename: string) => Promise<StoreListType>;
const getStoresPageData: GetStoresData = async (page, district, storeName) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores?page=${page}&district=${district}&store=${storeName}`
  );
  if (!response.ok) {
    throw new Error("예기치 못한 에러가 발생하였습니다(getStorePageData)");
  }
  return response.json();
};

export default getStoresPageData;
