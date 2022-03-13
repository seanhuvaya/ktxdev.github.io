import React from 'react'
import hero_image from '../Assets/hero.png';

const About = () => {
    return (
        <div className='w-full flex flex-col-reverse items-center py-16 px-5 text-center md:flex-row md:justify-between md:text-left md:py-40 md:px-40'>
            <div className="font-montserrat mt-16">
                <h4 className="font-roboto font-bold text-red-500 text-lg" >Hi, my name is</h4>
                <h2 className="text-3xl font-bold">Sean Huvaya</h2>
                <p className="mt-6 mb-12 leading-8 tracking-widest max-w-md md:max-w-xl">
                I'm a <strong>Software developer</strong> with 2+ years of progressive experience in software development. Involved in the design, development, testing, and maintenance of enterprise-level web applications and spring-based microservices using Java/Java EE technologies.
                </p>
                <a href="/" className="bg-red-500 text-white py-2 px-10 rounded-full">
                    Get In Touch
                </a>
            </div>
            <img className='h-48 md:h-80 lg:h-96' src={hero_image} alt="Hero Image" />
        </div>
    )
}

export default About