"use client"
import React from 'react'
import Image from "next/image"
import { Link } from 'react-scroll'
import {HiArrowDown} from 'react-icons/hi'

export const HeroSection = () => {
  return (
    <section id = "home" className = "h-screen flex flex-col justify-center items-center" >
        <section id = "Intro" className = "space-y-9">
            <section id = "Bio" className = "flex flex-col text-center py-10 my-10 space-y-6">
                <div className = "text-xl md:text-2xl font-serif italic"> Hi, my name is </div>
                <div className="flex justify-center">
                    <div className = "h-18 md:h-20 md:animate-typing md:animate-blinking overflow-hidden whitespace-nowrap font-mono text-2xl md:text-7xl border-r-4"> Ellie Zhang   </div>
                </div>

                <p className= "md:text-sm lg:text-xl font-light">
                    I am a senior at Johns Hopkins University where I am double majoring in Computer Science and Biomedical Engineering. I am passionate about using <span className="font-semibold"> software engineering </span> to solve interesting problems within <span className = "italic"> any </span> industry— from healthcare to finance. I am currently a <span className = "font-semibold">SWE Intern @JPMC.</span>  I created this page to explore UI Design and Front-End Development as well as to showcase past and current projects that I'm working on. 
                </p>
            </section>

            <section id = "Buttons" className = "flex space-x-20 justify-center"> 
              
                {/* <Link
                    to = "projects"
                    className = "font-sans text-xl px-6 py-3 bg-base-green box shadow-md rounded-md"
                    activeClass = "active"
                    spy = {true}
                    smooth = {true}
                    offset = {-100}
                    duration = {500}
                >
                    Projects
                </Link>
              
                <Link
                    to = "resume"
                    className = "font-sans text-xl px-6 py-3 bg-base-green box rounded-md shadow-md"
                    activeClass = "active"
                    spy = {true}
                    smooth = {true}
                    offset = {-100}
                    duration = {500}
                >
                    Resume
                </Link>               */}
            </section>

            <div id = "arrow" className = "flex justify-center">

                <Link
                    to = "about"
                    className = ""
                    activeClass = "active"
                    spy = {true}
                    smooth = {true}
                    offset = {-100}
                    duration = {500}
                >
                     <HiArrowDown size={35} className="animate-bounce"/>
                </Link>      
               
            </div>

            </section>
        






    </section>
  )
}
