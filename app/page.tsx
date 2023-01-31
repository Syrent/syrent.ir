"use client"

import {FiLogIn} from "react-icons/fi";
import {useEffect, useState} from "react";
import CardLoading from "@/app/card/CardLoading";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Cards from "@/app/card/Cards"
import {BiMoon, BiSun} from "react-icons/all";

export default function Home() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    const [cards, setCards] = useState(<CardLoading />)
    const [theme, setTheme] = useState(localStorage.theme || "dark")

    useEffect(() => {
        Cards().then(cardsComponent => setCards(cardsComponent))
        // setTheme(localStorage.theme)
    }, [])

    return (
        <main className="w-full fixed dark:bg-gray-900 select-none">
            <div className="{/*blur-[1px] */}cards grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-1">
                { cards }
            </div>
            <div className="w-screen h-screen absolute top-0 left-0 pointer-events-none bg-black bg-opacity-50">
                <BiMoon onClick={() => {
                    setTheme("dark")
                    localStorage.theme = 'dark'
                }} className={`${theme == 'dark' ? "hidden" : "block"} text-white p-2 w-16 h-16 bg-gray-700 transition-all duration-150 rounded-full pointer-events-auto cursor-pointer hover:bg-gray-800 absolute right-0 mr-10 mt-10`} />
                <BiSun onClick={() => {
                    setTheme("white")
                    localStorage.theme = 'white'
                }} className={`${theme == 'white' ? "hidden" : "block"} text-gold p-2 w-16 h-16 bg-white transition-all duration-150 rounded-full pointer-events-auto cursor-pointer text-black hover:bg-gray-100 absolute right-0 mr-10 mt-10`} />
                <div className="relative flex flex-col gap-12 justify-center items-center h-screen">
                    <Image className="pointer-events-auto" src={logo} alt="logo" />
                    <Link className="pointer-events-auto flex flex-row justify-center items-center gap-5 transition-shadow duration-100 text-black dark:text-white bg-blue-300 dark:bg-blue-500 hover:shadow-xl px-4 py-6 rounded-xl" href="hub">
                        <FiLogIn className="scale-150" />
                        <span>Discover more on my hub page</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}