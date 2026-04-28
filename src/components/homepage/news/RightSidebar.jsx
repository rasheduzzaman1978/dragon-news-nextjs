"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import swimmingImg from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playgroundImg from "@/assets/playground.png";
import { authClient } from "@/lib/auth-client";

const RightSidebar = () => {
  
  const [providerLoading, setProviderLoading] = useState(null);

  // ✅ Google Login
  const handleGoogleLogin = async () => {
  try {
    setProviderLoading("google");

    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

  } catch (error) {
    console.error("Google Login Error:", error);
  } finally {
    setProviderLoading(null);
  }
};

const handleGithubLogin = async () => {
  try {
    setProviderLoading("github");

    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

  } catch (error) {
    console.error("GitHub Login Error:", error);
  } finally {
    setProviderLoading(null);
  }
};

  return (
    <div className="space-y-6">

      {/* 🔐 Login Section */}
      <div>
        <h2 className="font-bold text-lg mb-3">Login with</h2>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleGoogleLogin}
            disabled={providerLoading !== null}
            className="flex items-center justify-center gap-2 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 disabled:opacity-50"
          >
            <FaGoogle />
            {providerLoading === "google" ? "Loading..." : "Google"}
          </button>

          <button
            onClick={handleGithubLogin}
            disabled={providerLoading !== null}
            className="flex items-center justify-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-md hover:bg-gray-900 disabled:opacity-50"
          >
            <FaGithub />
            {providerLoading === "github" ? "Loading..." : "GitHub"}
          </button>
        </div>
      </div>

      {/* 🌐 Find Us On */}
      <div>
        <h2 className="font-bold text-lg mb-3">Find Us On</h2>

        <div className="border rounded-md overflow-hidden">
          <div className="flex items-center gap-3 p-3 border-b hover:bg-gray-100 cursor-pointer">
            <FaFacebookF className="text-blue-600" />
            <span>Facebook</span>
          </div>

          <div className="flex items-center gap-3 p-3 border-b hover:bg-gray-100 cursor-pointer">
            <FaTwitter className="text-sky-500" />
            <span>Twitter</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
            <FaInstagram className="text-pink-500" />
            <span>Instagram</span>
          </div>
        </div>
      </div>

      {/* 🎯 Q-Zone */}
      <div>
        <h2 className="font-bold text-lg mb-3">Q-Zone</h2>

        <div className="space-y-4 bg-gray-100 p-3 rounded-md">

          {/* Card 1 */}
          <div className="bg-white p-3 rounded shadow text-center">
            <Image
              src={swimmingImg}
              alt="Swimming"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white p-3 rounded shadow text-center">
            <Image
              src={classImg}
              alt="Class"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-white p-3 rounded shadow text-center">
            <Image
              src={playgroundImg}
              alt="Playground"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default RightSidebar;