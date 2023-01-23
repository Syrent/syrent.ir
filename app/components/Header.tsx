import logo from "@/public/s-logo.png"
import Image from "next/image";
import Link from "next/link";
import {BiHomeAlt, DiGithubAlt, FiBox} from "react-icons/all";

export default function Header() {
    return (
        <header className="flex flex-row gap-5 items-center p-5 text-white font-bold bg-gradient-to-b from-black to-transparent">
            <Image className="justify-start" src={logo} alt={"header logo"} height={64}/>
            <div className="flex flex-row gap-10 items-center sm:ml-10 ml-auto">
                <Link className="flex flex-row items-center gap-2 hover:text-gray-300 transition-color duration-200" href={"https://github.com/Syrent"} target="_blank">
                    <DiGithubAlt className="scale-150" />
                    <span>Github</span>
                </Link>
                <Link className="flex flex-row items-center gap-2 hover:text-gray-300 transition-color duration-200" href={"https://www.spigotmc.org/resources/authors/syrent.873490/"} target="_blank">
                    <FiBox />
                    <span>Spigot</span>
                </Link>
            </div>
            <Link href={"/"} className="flex flex-row items-center justify-center gap-3 bg-blue-500 rounded-xl px-4 py-4 ml-auto hover:shadow-md hover:shadow-blue-700 transition-shadow duration-150">
                <BiHomeAlt className={"scale-150"} />
                <span>Home</span>
            </Link>
        </header>
    )
}