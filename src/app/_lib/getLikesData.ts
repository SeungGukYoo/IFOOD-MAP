export async function getLikesData(userId: string) {
  try {
    if (!userId) {
      throw new Error("로그인한 사용자만 접근이 가능합니다.");
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/like?userId=${userId}`, { method: "GET" });
    if (!response.ok) {
      throw new Error("getLikeData ERROR");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
}
