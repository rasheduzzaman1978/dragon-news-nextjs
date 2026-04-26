import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import { notFound } from "next/navigation";
import Link from "next/link";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data;
}

async function getNewsByCategoryId(id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data || [];
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params; // ✅ unwrap

  const id = resolvedParams.id;

  if (!id) {
    return <div>Invalid Category</div>;
  }

  const categoriesData = await getCategories();
  const categories = categoriesData?.news_category || [];

  const activeCategory = categories.find(
    (c) => c.category_id == id
  );

  if (!activeCategory) {
    notFound();
  }

  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">

      <div className="col-span-3">
        <LeftSidebar categories={categoriesData} activeId={id} />
      </div>

      <div className="col-span-6">
        <h2 className="font-bold text-3xl mb-4">
          {activeCategory.category_name}
        </h2>

        {Array.isArray(news) && news.length > 0 ? (
          <div className="flex flex-col gap-4">
            {news.map((item) => (
              <NewsCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">
  <p className="text-6xl">📰</p>
  <p className="text-gray-500 mt-2">
    No news available for this category
  </p>
  <Link href="/">
    <button className="mt-4 px-4 py-2 bg-black text-white rounded">
      Go Home
    </button>
  </Link>
</div>
        )}
      </div>

      <div className="col-span-3">
        <RightSidebar />
      </div>

    </div>
  );
}