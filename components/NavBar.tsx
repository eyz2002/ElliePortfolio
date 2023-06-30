
"use client" // this is a client component
import React from "react"
import { useState } from "react"
import Link from "react-scroll"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import styles from './NavBar.module.scss'


interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array <NavItem> = [
    {
        label: "Home",
        page: "home"
    },
    {
        label: "About",
        page: "about"
    },
    {
        label: "Projects",
        page: "projects"
    },
    {
        label: "Contact",
        page: "contact"
    }
]

const NavBar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme 
    const pathname = usePathname()
    const [navbar, setNavbar] = useState(false) // whether bar is mobile or desktop view and if menu should be open or not
    
    return (
        <header className="w-full h-20 bg-green px-4 sm:px-20 fixed top-0 z-50 shadow dark:bg-stone-900 dark:border-b dark:border-stone-600 flex">
        <div className="flex justify-between items-center w-full">
            <h2 className="text-3xl text-light font-bold font-mono">Ellie Zhang</h2>
        </div>

        <div className="md:items-center md:flex flex items-center justify-between">
            <div className="md:flex md:space-x-6 text-light font-medium">
            {NAV_ITEMS.map((item, idx) => {
                return <a key={idx}>{item.label}</a>;
            })}
            </div>
        </div>
        </header>   
    )
}

export default NavBar