"use client"

import Link from "next/link";
import Logo from "../Logo";
import { LuNotebookPen, LuSearch } from "react-icons/lu";
import MobileNav from "../../MobileNav";
import { useState } from "react";
import { LuX, LuMenu } from "react-icons/lu";


 export const navLinks = [
    {url:"/", label:"Home"},
    {url:"/articles",label:"Articles"},
    {url:"/about",label:"About"},
]


export default function Navbar() {
     const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="h-18 fixed top-0 left-0 z-50 backdrop-blur-md backdrop-saturate-50 w-full">
           <div className="flex items-center justify-between h-full w-[90%] mx-auto">
                <Logo />
                <ul className="flex items-center gap-4 md:gap-8 text-gray-400 font-semibold">
                  <li className="cursor-pointer flex items-center gap-1">
                    <LuSearch size={20}/>
                    <span className="hidden md:block">Search</span>
                  </li>
                    <li className="cursor-pointer flex items-center gap-1">
                    <LuNotebookPen size={20}/>
                    <span className="hidden md:block">Write</span>
                  </li>
                   {navLinks.map((link) => {
                    return (
                        <li key={link.url} className="hidden md:block hover:text-gray-200">
                            <Link href={link.url}>
                               {link.label}
                            </Link>
                        </li>
                       )
                   })}  
                   <li className="bg-primary text-gray-200 px-3 lg:px-5 py-2 rounded-full cursor-pointer">Login</li> 
                   <li className="cursor-pointer md:hidden z-80" 
                   onClick={() => setMenuOpen(!menuOpen)}
                   >
                       {menuOpen ? <LuX/> : <LuMenu/>}
                   </li>
                 </ul> 
           </div>
           <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </nav>
    )
}