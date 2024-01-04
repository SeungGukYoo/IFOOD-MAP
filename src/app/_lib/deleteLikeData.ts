export async function deleteLikeData(storeId: number, userId: number) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/like?storeId=${storeId}&userId=${userId}`, {
    method: "DELETE",
  });
}
