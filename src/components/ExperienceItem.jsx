import React from 'react'

const ExperienceItem = ({experience}) => {
    return (
        <div className={`flex gap-4 ${experience.order}`}>
            <div className='pb-8 relative'>
                <div className='flex justify-center items-center bg-red-500 rounded-full w-max p-2' >
                    {experience.icon}
                </div>
                <div className='border-l-2 border-l-red-500 h-16 absolute top-8 left-4' ></div>
            </div>
            <div className='flex flex-col'>
                <span className='bg-red-50 w-max px-3 py-1 text-xs rounded-xl' >{experience.period}</span>
                <h4 className='text-lg md:text-xl font-bold my-2' >{experience.jobTitle} - <span className='font-light uppercase text-sm md:text-base' >{experience.companyName}</span></h4>
                <p>{experience.shortDescription}</p>
            </div>
        </div>
    )
}

export default ExperienceItem