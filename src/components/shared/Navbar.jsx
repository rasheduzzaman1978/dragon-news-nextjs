"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useravatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient, useSession } from "@/lib/auth-client";
import { toast } from "react-toastify"; // 👉 add

const Navbar = () => {
  const { data: session, isPending } = useSession();

  // 👉 একই user বারবার toast না দেখানোর জন্য
  const shownRef = useRef(false);

  // ✅ Login success toast (session আসলে)
  useEffect(() => {
  if (session?.user && !shownRef.current) {
    toast.success(`Welcome ${session.user.name} 🎉`, {
      toastId: "login-success", // 👉 duplicate prevent
    });
    shownRef.current = true;
  }

  if (!session?.user) {
    shownRef.current = false;
  }
}, [session]);

  // ✅ Logout handler with toast
  const handleLogout = async () => {
    try {
      await authClient.signOut();
      toast.success("Logged out successfully 👋");
    } catch (err) {
      console.error(err);
      toast.error("Logout failed ❌");
    }
  };

  return (
    <nav className="bg-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left */}
        <div className="text-xl font-semibold"></div>

        {/* Center */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><NavLink href="/" className="hover:text-purple-600 transition">Home</NavLink></li>
          <li><NavLink href="/about-us" className="hover:text-purple-600 transition">About</NavLink></li>
          <li><NavLink href="/career" className="hover:text-purple-600 transition">Career</NavLink></li>
        </ul>

        {/* Right */}
        <div className="flex items-center gap-4">
          {isPending ? (
            <span className="loading loading-spinner loading-sm text-primary"></span>
          ) : session?.user ? (
            <>
              <span className="text-sm font-medium text-gray-700">
                {session.user.name}
              </span>

              <div className="w-9 h-9 rounded-full overflow-hidden border">
                <Image
                  src={session.user.image || useravatar}
                  alt={session.user.name || "User Avatar"}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              <button
                onClick={handleLogout} // 👉 use handler
                className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
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