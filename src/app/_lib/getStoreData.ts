import { StoreType } from "../page";

export const getStoreData: (id: string) => Promise<StoreType> = async (id?: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/store?id=${id}`, {
      method: "GET",
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error("예기치 못한 에러가 발생하였습니다.(발생: /api/store)");
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
