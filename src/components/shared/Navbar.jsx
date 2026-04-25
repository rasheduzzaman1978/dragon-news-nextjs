import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useravatar from '@/assets/user.png';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left (Logo / Empty) */}
        <div className="text-xl font-semibold">
          {/* Optional Logo */}
        </div>

        {/* Center Menu */}
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

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full overflow-hidden border">
            <Image
              src={useravatar}
              alt="User Avatar"
              width={40}
              height={40}
            />
          </div>

          {/* Login Button */}
          <Link href="/login">
            <button className="bg-gray-800 text-white px-4 py-1.5 rounded hover:bg-purple-600 transition">
              Login
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;