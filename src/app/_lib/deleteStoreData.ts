type DeleteStoreData = (id: string | string[]) => Promise<Response>;
const deleteStoreData: DeleteStoreData = async (id: string | string[]) => {
  try {
    const response = await fetch(`/api/store?id=${id}`, { method: "DELETE", cache: "no-cache" });
    if (!response.ok) {
      throw new Error("예기치 못한 에러가 발생하였습니다. (/api/store, DELETE)");
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export default deleteStoreData;
