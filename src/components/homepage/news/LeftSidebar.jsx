import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">All Categories</h2>

      <ul className="flex flex-col gap-3 mt-5">
        {categories?.news_category?.map((category) => (
          <li
            key={category.category_id}
            className={`${
              activeId === category.category_id
                ? "bg-blue-500 text-white"
                : "bg-slate-100 font-bold hover:bg-stone-300"
            } rounded-md`}
          >
            <Link
              href={`/category/${category.category_id}`}
              className="block p-2"
            >
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;