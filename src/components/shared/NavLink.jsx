'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, className, children }) => {
    const pathname = usePathname();
    console.log(pathname, 'pathname');

    const isActive = pathname === href;
    
    return (
        <div>
            <Link href={href} className={` ${isActive ? 'border-b-2 border-purple-600 text-purple-600' : "hover:text-purple-600"} transition`}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;