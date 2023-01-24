"use client"

import {FiLogIn} from "react-icons/fi";
import {useEffect, useState} from "react";
import CardLoading from "@/app/components/card/CardLoading";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Cards from "@/app/components/card/Cards"
import {BiMoon, BiSun} from "react-icons/all";

export default function Home() {
    const [cards, setCards] = useState(<CardLoading />)
    const [theme, setTheme] = useState("white")

    // localStorage.theme = 'white'

    useEffect(() => {
        Cards().then(cardsComponent => setCards(cardsComponent))
    }, [])

    console.log(theme)

    return (
        <main className="w-full fixed">
            <div className="{/*blur-[1px] */}cards grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-1">
                { cards }
            </div>
            <div className="w-[100vw] h-[100vh] bg-black absolute top-0 left-0 opacity-50 pointer-events-none">
            </div>
            <div className="w-[100vw] h-[100vh] absolute top-0 left-0 pointer-events-none">
                <BiMoon onClick={() => setTheme("white")} className={`${theme == 'dark' ? "hidden" : "block"} text-white p-2 w-16 h-16 bg-gray-700 transition-all duration-150 rounded-full pointer-events-auto cursor-pointer text-black hover:bg-gray-900 absolute right-0 mr-10 mt-10`} />
                <BiSun onClick={() => setTheme("dark")} className={`${theme == 'white' ? "hidden" : "block"} text-gold p-2 w-16 h-16 bg-white transition-all duration-150 rounded-full pointer-events-auto cursor-pointer text-black hover:bg-gray-50 absolute right-0 mr-10 mt-10`} />
                <div className="relative flex flex-col gap-12 justify-center items-center h-[100vh]">
                    <Image className="pointer-events-auto" src={logo} alt="logo" />
                    <Link className="pointer-events-auto flex flex-row justify-center items-center gap-5 transition-shadow duration-100 text-black bg-blue-300 hover:shadow-xl px-4 py-6 rounded-xl" href="hub">
                        <FiLogIn className="scale-150" />
                        <span>Discover more on my hub page</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}