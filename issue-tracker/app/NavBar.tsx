'use client';
import Link from "next/link";
import { GiLongAntennaeBug } from "react-icons/gi";
import {usePathname} from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
    const currentPage = usePathname();

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
                        <Link className={classNames(
                            {'text-zinc-0': currentPage === link.href,
                                  'text-zinc-300': currentPage !== link.href },
                            'hover:text-zinc-400 transition-colors'
                        )} href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;