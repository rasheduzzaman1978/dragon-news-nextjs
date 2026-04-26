import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";

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
  return data.data;
}

export default async function CategoryPage({ params }) {
  const { id } = params;

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">

      {/* Left */}
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      {/* Middle */}
      <div className="col-span-6">
        <h2 className="text-3xl font-bold mb-4">
          Category: {id}
        </h2>

        {Array.isArray(news) && news.length > 0 ? (
          <div className="flex flex-col gap-4">
            {news.map((item) => (
              <NewsCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">
            <p className="text-5xl">😕</p>
            <p className="text-gray-500">No news found</p>
          </div>
        )}
      </div>

      {/* Right */}
      <div className="col-span-3">
        <RightSidebar />
      </div>

    </div>
  );
}