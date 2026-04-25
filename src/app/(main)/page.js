import Image from "next/image";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}
export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category, 'categories'); // Log the categories data to verify it's being fetched correctly

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
      
      <div className="col-span-3">
        <h2 className="font-bold text-lg">All Categories</h2>
        <ul className="flex flex-col gap-3 mt-5">  
        {
          categories.news_category.map(category => {
            return <li key={category.category_id} className="bg-slate-100 font-bold text-left text-md hover:cursor-pointer hover:bg-stone-300 p-2 rounded-md">{category.category_name}</li> 
          }
        )}
        </ul>
      </div>

      <div className="font-bold text-3xl bg-purple-100 col-span-6">
        All News
      </div>
      <div className="font-bold text-3xl bg-yellow-100 col-span-3">
        social Icons
      </div>
      
    </div>
  );
}
