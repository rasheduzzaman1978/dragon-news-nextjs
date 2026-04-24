import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const today = format(new Date(), "EEEE, MMMM dd, yyyy");

  return (
    <div className="text-center py-6">
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src={logo}
          alt="The Dragon News Logo"
          width={300}
          height={100}
          priority
        />
      </div>

      {/* Tagline */}
      <p className="text-gray-500 mt-3 italic">
        Journalism Without Fear or Favour
      </p>

      {/* Date */}
      <p className="text-sm text-gray-600 mt-1">{today}</p>
    </div>
  );
};

export default Header;