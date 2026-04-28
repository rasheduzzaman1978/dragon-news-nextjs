"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function RegisterPage() {
   const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterFunc = async (data) => {
  console.log(data, "Register Data");

  const { name, email, password } = data;

  try {
    // 🔐 Register API call
    const res = await authClient.signUp.email({
      name,
      email,
      password,
      image: data.photo,
      callbackURL: "/",
    });

    console.log("FULL RESPONSE:", res);

    // ❌ যদি error থাকে
    if (res?.error) {
      toast.error(res.error.message || "Registration failed ❌");
      return;
    }

    // ✅ success
    toast.success("Registration successful 🎉");

    // 👉 redirect delay দিয়ে দিলে UX better হয়
    setTimeout(() => {
      router.push("/login");
    }, 1500);

  } catch (error) {
    console.error("Register Error:", error);

    // ❌ unexpected error
    toast.error("Something went wrong ❌");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-sm">

        <form onSubmit={handleSubmit(handleRegisterFunc)}>

          {/* ✅ Fieldset START */}
          <fieldset className="border border-gray-200 p-6 rounded">
            
            <legend className="text-xl font-semibold text-gray-700 px-2">
              Register your account
            </legend>

            <div className="divider my-2"></div>

            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-600">Full Name</span>
              </label>

              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your full name"
                className="input input-bordered bg-gray-100 border-none focus:outline-none"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Photo */}
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text text-gray-600">Photo URL</span>
              </label>

              <input
                type="text"
                {...register("photo", { required: "Photo URL is required" })}
                placeholder="Enter your photo URL"
                className="input input-bordered bg-gray-100 border-none focus:outline-none"
              />

              {errors.photo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.photo.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text text-gray-600">Email address</span>
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
            <div className="form-control mt-3 relative">
              <label className="label">
                <span className="label-text text-gray-600">Password</span>
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
              Register
            </button>

          </fieldset>
          {/* ✅ Fieldset END */}

        </form>
      </div>
    </div>
  );
}