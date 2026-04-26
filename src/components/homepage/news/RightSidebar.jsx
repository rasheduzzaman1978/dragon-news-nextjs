import React from "react";
import { FaGithub, FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="space-y-6">

      {/* 🔐 Login Section */}
      <div>
        <h2 className="font-bold text-lg mb-3">Login with</h2>

        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-center gap-2 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600">
            <FaGoogle /> Google
          </button>

          <button className="flex items-center justify-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-md hover:bg-gray-900">
            <FaGithub /> GitHub
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
              src="/images/swimming.png"
              alt="swimming"
              width={200}
              height={120}
              className="mx-auto"
            />
            <p className="mt-2 font-medium">Swimming</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-3 rounded shadow text-center">
            <Image
              src="/images/class.png"
              alt="class"
              width={200}
              height={120}
              className="mx-auto"
            />
            <p className="mt-2 font-medium">Class</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-3 rounded shadow text-center">
            <Image
              src="/images/playground.png"
              alt="playground"
              width={200}
              height={120}
              className="mx-auto"
            />
            <p className="mt-2 font-medium">Play Ground</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default RightSidebar;