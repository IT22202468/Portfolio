"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3icon, XCircleIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Blog",
        path: "#blog"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between px-4 py-2 mx-auto">
                <Link href={"/"} className="text-2xl font-semibold text-white md:text-5xl">
                    LOGO
                </Link>
                <div className="block mobile-menu md:hidden">
                    {
                        navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border text-slate-200 border-slate-200 hover:text-white hover:border-white"><Bars3icon className="w-5 h-5"/></button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border text-slate-200 border-slate-200 hover:text-white hover:border-white"><XCircleIcon className="w-5 h-5"/></button>
                        )
                    }
                </div>
                <div className="hidden md:block menu md:w-auto" id="navbar">
                    <ul className="flex p-4 mt-0 md:flex-row md:p-0 md:space-x-8">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/>: null}
        </nav>
    );
};

export default Navbar;
