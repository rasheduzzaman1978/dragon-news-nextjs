
export async function getCategories() {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/news/categories",
      { cache: "no-store" }
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Category fetch error:", error);
    return null;
  }
}

export async function getNewsByCategoryId(id) {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${id}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("News fetch error:", error);
    return [];
  }
}


export async function getNewsDetails(id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.data?.[0];
}
