"use client"
import React from 'react'
import Image from "next/image"
import { Link } from 'react-scroll'

export const HeroSection = () => {
  return (
    <section id = "home">
        <section id = "Intro" className = "h-screen flex flex-col justify-center items-center">

            <section id = "Bio" className = "flex flex-col text-center py-16 space-y-8">
                <div className = "text-2xl font-serif italic"> Hi, my name is </div>
                <div className = "text-7xl font-serif "> Ellie Zhang </div>
                <p className= "md:text-sm lg:text-xl font-light">
                    I am a senior at Johns Hopkins University where I am double majoring in Computer Science and Biomedical Engineering. I am passionate about using <span className="font-semibold"> software engineering </span> to solve interesting problems within <span className = "italic"> any </span> indsutry- from healthcare to finance. I am currently a <span className = "font-semibold">SWE Intern @JPMC.</span>  I created this page to explore UI Design and Front-End Development as well as to showcase past and current projects that I'm working on. 
                </p>

            </section>

            <section id = "Buttons" className = "flex flex-row space-x-10 "> 
              
                <Link
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
                </Link>              
        </section>



        </section>
        






    </section>
  )
}
