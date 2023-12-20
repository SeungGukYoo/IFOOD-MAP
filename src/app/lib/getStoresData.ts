export const getStoresData = async (id?: string) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/stores`;
    if (id) {
      url += `?id=${id}`;
    }

    const res = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      throw new Error("데이터를 받아오지 못했습니다.");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
