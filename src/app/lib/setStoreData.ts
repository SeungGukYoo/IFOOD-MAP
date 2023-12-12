import { StoreType } from "../page";

export async function setStoreData(data: Omit<StoreType, "id">): Promise<void | StoreType> {
  try {
    const response = await fetch("/api/store", {
      method: "POST",
      body: JSON.stringify({
        data,
      }),
    });
    if (!response.ok) {
      throw new Error("예기치못한 에러가 발생했습니다. ('/api/store')");
    }
    return response.json();
  } catch (err) {
    console.error(err);
  }
}
