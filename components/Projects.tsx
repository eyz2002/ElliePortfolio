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
            name: "Predicting Dementia Severity",
            description: "string",
            image: "/Dementia.jpg"
        },
        {
            name: "Chat Server",
            description: "string",
            image: "/ChatServer.jpg"
        },
        {
            name: "Cache",
            description: "string",
            image: "/Cache.jpg"
        },
        // {
        //     name: "Chess",
        //     description: "string",
        //     image: "/ChessBoard.jpg"
        // }
    ]
    
  return (
    <section id = "Projects">
        <h1 className = "text-center font-bold text-4xl my-4">Projects
            <hr className="w-20 h-1 mx-auto my-4 bg-base-green border=0 rounded"></hr>
        </h1>
        
        <div className = "flex flex-col space-y-28 my-10">
            {projects.map((project, idx) => {
                return <div key={idx}>
                    <div className = "flex flex-col md:flex-row md:space-x-12"> 
                        <div>
                            <Image
                                src = {project.image}
                                alt = ""
                                width={500}
                                height = {200}
                                className = "rounded-xl shadow-xl hover:opacity-70"
                                />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className = "text-4xl font-mono mb-6">{project.name}</h1>
                            <p className = "text-xl leading-7 mb-4 "> {project.description}</p>
                            {/* Can add links to github/demos here*/}
                        </div>
                    </div>

                </div>
            })}

        </div>
    </section>
  )
}
