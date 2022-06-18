import React from 'react'
import { projects } from '../data/projects'
import Project from './Project'

const Projects = () => {
    return (
        <div className='w-full bg-gray-50 py-16 lg:pt-24 px-20 lg:px-40 xl:px-56' >
            <h4 className='text-2xl font-sansita-swashed text-center md:text-3xl lg:text-4xl'>Some Things <span className='text-red-500' >I've Built</span> </h4>
            <div className='flex flex-col gap-8' >
                {
                    projects.map((project, index) => <Project project={project} index={index} />)
                }
            </div>
        </div>
    )
}

export default Projects