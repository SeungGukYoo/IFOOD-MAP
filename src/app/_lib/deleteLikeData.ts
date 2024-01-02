export async function deleteLikeData(id: string) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/like?likeId=${id}`, {
    method: "DELETE",
  });
}
