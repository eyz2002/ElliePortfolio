import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {BsGithub, BsArrowUpRightSquare} from "react-icons/bs"

export const Projects = () => {
    interface projItem{
        name: string
        description: string
        image: string
    }
    
    const projects: Array <projItem> = [
        {
            name: "Predicting Dementia Severity (Python)",
            description: " Developed a neural network (CNN) for machine learning to predict the level of dementia severity from MRI images. Incorporated weighted-cross entropy loss to account for the unbalanced dataset. Implemented optimization and regularization strategies such as Adam and dropout. Applied the Keras package from the TensorFlow library to preprocess images.",
            image: "/Dementia.jpg"
        },
        {
            name: "Chat Server (C++)",
            description: "Developed a chat client program that communicates synchronously with a server in real-time. Program allowed for communication over a network by accepting TCP connections from clients. Implemented concurrency and synchronization primitives to coordinate access to shared data on a remote server. Utilized auxiliary and wrapper functions within the CSAPP library for sockets, signals, threads, and semaphores.",
            image: "/ChatServer.jpg"
        },
        {
            name: "Cache (C++)",
            description: "Developed a simulator to test the performance of a memory trace on a customizable cache configuration. Analyzed various configurations through tests to determine their effectiveness.",
            image: "/Cache.jpg"
        },
        {
            name: "Chess (C++)",
            description: "Developed a fully playable chess game with emacs; made a UML diagram to visualize the object-oriented design. Used abstract classes and polymorphism, as well as operator overloading, to define gameplay/piece movement. Program readily allowed for addition of new arbitrary pieces, proving its optimal design. Employed gdb and valgrind to check for errors/memory leaks.",
            image: "/ChessBoard.jpg"
        },
        {
            name: "Covid Spread Simulator (Python)",
            description: "Implemented OOP constructs and matplotlib to visually model COVID-19 spread; subjects represented by circles. Handled dynamics of all subject interactions, including transmission, death, and no-transmission. Update all subject’s positions and state for a user-set amount of simulation steps, generating appropriate graphs.",
            image: "/Covid.png"
        }
    ]
    
  return (
    <section id = "Projects">
        <h1 className = "text-center font-bold text-4xl my-4">Projects
            <hr className="w-20 h-1 mx-auto my-4 bg-base-green border=0 rounded"></hr>
        </h1>
        
        <div className = "flex flex-col space-y-24 md:space-y-28 my-10">
            {projects.map((project, idx) => {
                return <div key={idx}>
                        <div className = "flex flex-col md:flex-row md:space-x-12 space-y-3" > 
                            <div className="relative h-56 w-96 overflow-hidden rounded-lg object-cover ">
                                <Image
                                    src = {project.image}
                                    alt = ""
                                    fill = {true}
                                    className = "rounded-xl shadow-md box hover:opacity-70"
                                    sizes="
                                    (max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
                                    />
                            </div>
                            <div className="md:w-1/2">
                                <h1 className = "text-xl md:text-2xl font-bold font-mono mb-2">{project.name}</h1>
                                <p className = "text-md leading-7 mb-4 "> {project.description}</p>
                                {/* Can add links to github/demos here*/}
                            </div>
                    </div>

                </div>
            })}

        </div>
    </section>
  )
}
