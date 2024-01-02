import { StoreType } from "../page";

export async function setStoreData(data: StoreType): Promise<void | StoreType> {
  try {
    if (data.id) {
      const response = await fetch("/api/store", {
        method: "PUT",
        body: JSON.stringify({
          data,
        }),
      });
      return response.json();
    } else {
      const response = await fetch("/api/store", {
        method: "POST",
        body: JSON.stringify({
          data,
        }),
      });
      if (!response.ok) {
        throw new Error("예기치못한 에러가 발생했습니다. ('/api/store',POST)");
      }
      return response.json();
    }
  } catch (err) {
    console.error(err);
  }
}
