export async function setLikeData(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/like`, {
    method: "POST",
    body: JSON.stringify({
      storeId: id,
    }),
  });

  if (!response.ok) {
    throw new Error("setLikeData에러 발생");
  }
  return response.json();
}
