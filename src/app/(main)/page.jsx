import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import { getCategories, getNewsByCategoryId } from "@/lib/data";

export default async function Home() {
  const categories = await getCategories();

  const defaultCategory = "01";

  const news = await getNewsByCategoryId(defaultCategory);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">

      <div className="col-span-3">
        <LeftSidebar 
          categories={categories || { news_category: [] }} 
          activeId={defaultCategory} 
        />
      </div>

      <div className="col-span-6">
        <h2 className="font-bold text-3xl mb-4">All News</h2>

        {Array.isArray(news) && news.length > 0 ? (
          <div className="flex flex-col gap-4">
            {news.map((item) => (
              <NewsCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">
            <p className="text-5xl mb-3">😕</p>
            <p className="text-gray-500 text-lg">
              No news available right now
            </p>
          </div>
        )}
      </div>

      <div className="col-span-3">
        <RightSidebar />
      </div>

    </div>
  );
}