import React from 'react';
import Link from "next/link";
import { GiLongAntennaeBug } from "react-icons/gi";
import {yellow} from "next/dist/lib/picocolors";

const NavBar = () => {
    const links = [
        {name: 'Admin', href: '/'},
        {name: 'Issues', href: '/issues'},
    ];
    return (
        <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href="/"><GiLongAntennaeBug className='text-amber-200 size-8'/></Link>
            <ul className="flex space-x-6">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link className='text-zinc-200 hover:text-zinc-400 transition-colors' href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;