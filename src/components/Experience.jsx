import React, { forwardRef } from 'react'
import { experiences } from '../data/experience'
import ExperienceItem from './ExperienceItem'
import Skills from './Skills'

const Experience = forwardRef((props, ref) => {

    return (
        <div ref={ref} className='w-full py-16 lg:py-24 px-5 md:px-16 lg:px-40 xl:px-56'>
            <h4 className='text-2xl mb-10 font-sansita-swashed text-center md:text-3xl lg:text-4xl'>Experience &amp; <span className='text-red-500' >Education</span> </h4>
            <div className='flex flex-col gap-8 md:gap-16 md:mt-16 md:grid md:grid-cols-2' >
                {
                    experiences.map((experience) => <ExperienceItem experience={experience} />)
                }
            </div>
            <Skills />
        </div>
    )
})

export default Experience