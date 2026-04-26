"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-sm">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Login your account
        </h2>

        <div className="divider my-4"></div>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600">
              Email address
            </span>
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="input input-bordered bg-gray-100 border-none focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="form-control mt-4 relative">
          <label className="label">
            <span className="label-text text-gray-600">
              Password
            </span>
          </label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="input input-bordered bg-gray-100 border-none focus:outline-none pr-10"
          />

          {/* Eye Icon */}
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Button */}
        <button className="btn w-full mt-6 bg-gray-700 hover:bg-gray-800 text-white border-none">
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't Have An Account ?{" "}
          <Link href="/register" className="text-red-500 cursor-pointer">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}