
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

async function getNewsDetails(id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  // 🔥 IMPORTANT: API array দেয়, তাই [0]
  return data.data?.[0];
}

export default async function NewsDetailsPage({ params }) {
  const { id } = params;

  const news = await getNewsDetails(id);

  // ❌ যদি data না থাকে → 404
  if (!news) {
    notFound();
  }

  return (
    <div className="container mx-auto my-10 max-w-4xl">

      {/* 🔙 Back Button */}
      <Link href="/" className="text-blue-500 mb-4 inline-block">
        ← Back to Home
      </Link>

      {/* 🖼️ Image */}
      <Image
        src={news.image_url}
        alt={news.title}
        width={800}
        height={400}
        className="w-full rounded mb-5"
      />

      {/* 📰 Title */}
      <h1 className="text-3xl font-bold mb-3">
        {news.title}
      </h1>

      {/* 👤 Author Info */}
      <div className="text-gray-500 mb-4">
        {news.author?.name || "Unknown"} •{" "}
        {news.author?.published_date || "N/A"}
      </div>

      {/* 📄 Details */}
      <p className="text-lg leading-relaxed text-gray-700">
        {news.details}
      </p>

    </div>
  );
}