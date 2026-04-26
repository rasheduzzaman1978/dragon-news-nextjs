"use client";

import Image from "next/image";
import Link from "next/link";
import { FaEye, FaStar, FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ item }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white">

      {/* Header */}
      <div className="flex items-center justify-between bg-gray-100 p-3">
        <div className="flex items-center gap-2">
          <Image
            src={item.author?.img || "/default-avatar.png"}
            alt="author"
            width={40}
            height={40}
            className="rounded-full"
          />

          <div>
            <p className="font-semibold text-sm">
              {item.author?.name || "Unknown"}
            </p>
            <p className="text-xs text-gray-500">
              {item.author?.published_date || "N/A"}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer hover:text-black" />
          <FaShareAlt className="cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">

        {/* 🔥 Title clickable */}
        <Link href={`/news/${item._id}`}>
          <h2 className="font-bold text-lg mb-3 hover:text-blue-500 cursor-pointer">
            {item.title}
          </h2>
        </Link>

        <Image
          src={item.image_url}
          alt={item.title}
          width={600}
          height={300}
          className="rounded-md mb-3 w-full h-[250px] object-cover"
        />

        <p className="line-clamp-3 text-sm text-justify text-gray-600">
          {item.details}
        </p>

        <div className="mt-2">
          {/* 🔥 Read More clickable */}
          <Link href={`/news/${item._id}`}>
            <button className="btn text-orange-500 font-semibold cursor-pointer ml-1">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t text-sm text-gray-600">

        {/* ⭐ Dynamic Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(Math.round(item.rating?.number || 0))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 ml-1">
            {item.rating?.number || 0}
          </span>
        </div>

        {/* 👁 Views */}
        <div className="flex items-center gap-1">
          <FaEye />
          {item.total_view || 0}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;