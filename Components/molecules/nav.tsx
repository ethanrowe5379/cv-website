'use client';

//import Link from "../atoms/link";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

//Map of links of website
const links = [
    {key: 'home', name: '/Home', href: '/home'},
    {key:'about', name: '/About', href: '/home/about'},
    {key:'projects', name: '/Projects', href: '/home/projects'},
    {key:'contact', name: '/Contact', href: '/home/contact'}
];

export default function Nav(){
    const pathname = usePathname();
    return(
        <nav className="">
            {links.map((link) => {
                return (
                    <Link className="font-medium mr-5" key={link.key} href={link.href} ><p className="text-xl inline-block">{link.name}</p></Link>
                );
            }
            )}
        </nav>
    );
}