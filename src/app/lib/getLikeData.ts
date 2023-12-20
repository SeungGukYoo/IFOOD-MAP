export async function getLikeData(storeId: number) {
  try {
    if (!storeId) return new Response("예기치 않은 오류가 발생");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/like?storeId=${storeId}`, { method: "GET" });
    if (!response.ok) {
      throw new Error("getLikeData ERROR");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
}
