import React from 'react'
import { projectdata } from '../projectsData'

type Props = {}

function ProjectCard({ }: Props) {
    return (
        <>
        {projectdata.map((item) => (
        <article className=' flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-gray-100 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-150 overflow-hidden'>
            
                <div className=' px-0 md:px-10'>
                    <p className=' font-light uppercase'>{item.name}</p>
                    <div className=' flex space-x-2 my-2'>
                        {item.technology}
                    </div>
                    <p  className=' text-gray-400'>{item.year}</p>
                </div>
        </article>

        ))}
        </>
    )
}

export default ProjectCard