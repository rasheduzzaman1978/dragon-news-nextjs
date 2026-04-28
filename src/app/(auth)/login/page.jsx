"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    console.log(data, "Login Data");

    const { data: res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: '/',
  });

    console.log("RES:", res);
    console.log("ERROR:", error);
    if (res) {
      alert("Login successful!");
    } else if (error) {
      alert("Login failed: " + error.message);
    }
    console.log("LOGIN RES:", res);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-sm">

        <form onSubmit={handleSubmit(handleLoginFunc)}>

          {/* ✅ Fieldset START */}
          <fieldset className="border border-gray-200 p-6 rounded">

            <legend className="text-xl font-semibold text-gray-700 px-2">
              Login your account
            </legend>

            <div className="divider my-2"></div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-600">
                  Email address
                </span>
              </label>

              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter your email address"
                className="input input-bordered bg-gray-100 border-none focus:outline-none"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
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
                {...register("password", {
                  required: "Password field is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Enter your password"
                className="input input-bordered bg-gray-100 border-none focus:outline-none pr-10"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}

              {/* Eye Icon */}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn w-full mt-6 bg-gray-700 hover:bg-gray-800 text-white border-none"
            >
              Login
            </button>

          </fieldset>
          {/* ✅ Fieldset END */}

        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't Have An Account?{" "}
          <Link href="/register" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}