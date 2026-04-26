import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaStar } from "react-icons/fa";
import { getNewsDetails } from "@/lib/data";

export const generateMetadata = async ({params}) => {
  const {id} = await params;
  console.log(id, 'params');
  const news = await getNewsDetails(id);
  console.log(news, 'news');

  return {
    title: news.title,
    description: news.details
  };
  
};

export default async function NewsDetailsPage({ params }) {
  const { id } = await params; // ✅ FIXED

  const news = await getNewsDetails(id);

  if (!news) {
    return notFound(); // ✅ better UX
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      {/* 🔙 Back */}
      <Link href="/" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>

      {/* 🖼️ Image */}
      <div className="overflow-hidden rounded-2xl shadow-lg mb-6">
        <Image
          src={news.image_url}
          alt={news.title}
          width={1000}
          height={500}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* 📰 Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
        {news.title}
      </h1>

      {/* 👤 Author + Meta */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4 mb-6">

        <div className="flex items-center gap-3">
          <Image
            src={news.author?.img || "/default-avatar.png"}
            alt="author"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">
              {news.author?.name || "Unknown"}
            </p>
            <p className="text-xs text-gray-500">
              {news.author?.published_date || "N/A"}
            </p>
          </div>
        </div>

        {/* ⭐ Rating + 👁 Views */}
        <div className="flex items-center gap-4 text-sm text-gray-600">

          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(Math.round(news.rating?.number || 0))].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-700 ml-1">
              {news.rating?.number || 0}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <FaEye />
            {news.total_view || 0}
          </div>

        </div>
      </div>

      {/* 📄 Details */}
      <p className="text-lg leading-relaxed text-gray-700 text-justify">
        {news.details}
      </p>

      {/* 🔴 Category Button (Functional) */}
      <Link
        href={`/category/${news.category_id}`}
        className="inline-block mt-6 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
      >
        ← All news in this category
      </Link>

    </div>
  );
}