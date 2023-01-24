"use client"

import logo from "@/public/s-logo.png"
import Image from "next/image";
import Link from "next/link";
import {BiHomeAlt, CgClose, DiGithubAlt, FiBox, GiHamburgerMenu, GrClose} from "react-icons/all";
import {useState} from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-b from-black to-transparent text-white font-bold p-5">
            <div className="container mx-auto flex items-center justify-between">
                <div className="md:hidden text-white">
                    {
                        isMenuOpen ?
                        <CgClose className="scale-[200%] mx-4 my-2 rounded-md stroke-2" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                        :
                        <GiHamburgerMenu className="scale-[200%] mx-4 my-2 rounded-md" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    }
                </div>
                <Image className="justify-start" src={logo} alt={"header logo"} height={64} />
                <div className="hidden md:block ml-5">
                    <div className="flex flex-row gap-5 items-center">
                        <Link
                            className="flex flex-row items-center gap-2 hover:text-gray-300 transition-color duration-200"
                            href={"https://github.com/Syrent"}
                            target="_blank"
                        >
                            <DiGithubAlt className="scale-150" />
                            <span>Github</span>
                        </Link>
                        <Link
                            className="flex flex-row items-center gap-2 hover:text-gray-300 transition-color duration-200"
                            href={"https://www.spigotmc.org/resources/authors/syrent.873490/"}
                            target="_blank"
                        >
                            <FiBox />
                            <span>Spigot</span>
                        </Link>
                        <Link
                            className="flex flex-row items-center gap-2 hover:text-gray-300 transition-color duration-200"
                            href={"https://modrinth.com/user/Syrent"}
                            target="_blank"
                        >
                            <FiBox />
                            <span>Modrinth</span>
                        </Link>
                    </div>
                </div>
                <Link
                    href={"/"}
                    className="flex flex-row items-center justify-center gap-3 bg-blue-500 rounded-xl px-4 py-4 ml-auto hover:shadow-md hover:shadow-blue-700 transition-shadow duration-150"
                >
                    <BiHomeAlt className={"scale-150"} />
                    <span className="hidden md:block">Home</span>
                </Link>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden flex items-center justify-center my-5`}>
                <div className="flex flex-col gap-7 items-center text-xl">
                    <Link
                        className="flex flex-row items-center gap-2 hover:text-gray-300 transition-color duration-200"
                        href={"https://github.com/Syrent"}
                        target="_blank"
                    >
                        <DiGithubAlt className="scale-150" />
                        <span>Github</span>
                    </Link>
                    <Link
                        className="flex flex-row items-center gap-2 hover:text-gray-300 transition-color duration-200"
                        href={"https://www.spigotmc.org/resources/authors/syrent.873490/"}
                        target="_blank"
                    >
                        <FiBox />
                        <span>Spigot</span>
                    </Link>
                    <Link
                        className="flex flex-row items-center gap-2 hover:text-gray-300 transition-color duration-200"
                        href={"https://modrinth.com/user/Syrent"}
                        target="_blank"
                    >
                        <FiBox />
                        <span>Modrinth</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
