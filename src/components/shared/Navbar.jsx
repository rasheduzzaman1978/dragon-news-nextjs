"use client"; // 👉 Next.js client component (hooks use করার জন্য দরকার)

import React from "react";
import Image from "next/image"; // 👉 Optimized image component
import Link from "next/link"; // 👉 Client-side navigation
import useravatar from "@/assets/user.png"; // 👉 Default avatar image
import NavLink from "./NavLink"; // 👉 Custom link component (active styling ইত্যাদির জন্য)
import { authClient, useSession } from "@/lib/auth-client"; // 👉 Auth hooks & client

const Navbar = () => {
  // 👉 session data এবং loading state নিচ্ছে
  const { data: session, isPending } = useSession();

  return (
    <nav className="bg-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* 🔹 Left Section (Logo / Brand Name optional) */}
        <div className="text-xl font-semibold">
          {/* এখানে চাইলে Logo বা Site Name বসাতে পারো */}
        </div>

        {/* 🔹 Center Menu */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <NavLink href="/" className="hover:text-purple-600 transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/about-us" className="hover:text-purple-600 transition">
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="/career" className="hover:text-purple-600 transition">
              Career
            </NavLink>
          </li>
        </ul>

        {/* 🔹 Right Side (Auth অংশ) */}
        <div className="flex items-center gap-4">
  
          {isPending ? (
            // 🔄 Loading spinner (session load হওয়া পর্যন্ত)
            <span className="loading loading-spinner loading-sm text-primary"></span>

          ) : session?.user ? (
            // ✅ User logged in থাকলে
            <>
              {/* 👤 Username */}
              <span className="text-sm font-medium text-gray-700">
                {session.user.name}
              </span>

              {/* 🖼 Avatar */}
              <div className="w-9 h-9 rounded-full overflow-hidden border">
                <Image
                  src={session.user.image || useravatar} // 👉 যদি image না থাকে fallback avatar
                  alt="User Avatar"
                  width={40}
                  height={40}
                />
              </div>

              {/* 🚪 Logout Button */}
              <button
                onClick={() => authClient.signOut()} // 👉 logout function call
                className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            // ❌ User login না থাকলে
            <Link href="/login">
              <button className="bg-gray-800 text-white px-4 py-1.5 rounded hover:bg-purple-600 transition">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;