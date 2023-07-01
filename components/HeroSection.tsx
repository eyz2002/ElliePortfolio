"use client"
import React from 'react'
import Image from "next/image"
import { Link } from 'react-scroll'

export const HeroSection = () => {
  return (
    <section id = "home">
        <section id = "Intro" className = "space-y-8 flex flex-row justify-between">

            <section id = "Bio" className = "lex flex-col text-center items-center justify-center my-10 py-16 space-y-4">
                <div className = "text-3xl font-serif"> Hi, my name is </div>
                <div className = "text-7xl font-serif "> Ellie Zhang </div>
                <p className= "text-xl font-light">
                    I am a senior at Johns Hopkins University where I am double majoring in Computer Science and Biomedical Engineering. I am passionate about using <span className="font-semibold"> software engineering </span> to solve interesting problems within <span className = "italic"> any </span> indsutry- from healthcare to finance. I am currently a <span className = "font-semibold">SWE Intern @JPMC.</span>  I created this page to explore UI Design and to showcase past and current projects that I'm working on. If anything catches your eye, please feel free to reach out!
                </p>
                <div id = "button" className = "flex justify-end"> 
                    <Link
                    to = "Contact"
                    className = "font-medium text-xl px-6 py-3 bg-light-green box rounded-md"
                    activeClass = "active"
                    spy = {true}
                    smooth = {true}
                    offset = {-100}
                    duration = {500}
                    >
                    Get In Touch
                    </Link>
                
                </div>

            </section>



        </section>
        
        <section className = "Featured Projects">
            <Link
                to = "projects"
                className = "font-sans text-xl px-6 py-3 bg-light-green box rounded-md"
                activeClass = "active"
                spy = {true}
                smooth = {true}
                offset = {-100}
                duration = {500}
            >
                Projects
            </Link>

 

        </section>





    </section>
  )
}
