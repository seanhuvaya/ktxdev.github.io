import React from 'react'

const Contact = () => {

    const inputStyle = 'w-full py-2 px-4 bg-red-100 placeholder:text-gray-700 outline-none rounded-md border border-red-300';

    return (
        <div className='w-full bg-red-50 pt-16 lg:pt-24 px-20 lg:px-40 xl:px-56' >
            <h4 className='text-2xl font-sansita-swashed text-center md:text-3xl lg:text-4xl'>Get in <span className='text-red-500' >Touch</span> </h4>
            <form className='mt-8 lg:mt-20 flex flex-col gap-4 lg:gap-8'>
                <div className='flex flex-col gap-4 lg:gap-8 md:flex-row' >
                    <input className={inputStyle} type="text" placeholder='Name' />
                    <input className={inputStyle} type="email" required placeholder='Email*' />
                </div>
                <textarea className={`${inputStyle} resize-none`} rows={5} required placeholder='Enter Message*' />
                <button className={`w-full lg:w-56 lg:self-end lg:mt-8 py-2 px-4 mt-4 rounded-md bg-red-500 text-white flex justify-center items-center gap-4 uppercase`} type="submit">
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 30 30">
                        <g clip-path="url(#a)">
                            <path fill="#FFF" d="M9.982 27.678a.485.485 0 0 0 .759.4l3.338-2.28-4.097-1.952v3.832ZM29.844 1.966a.486.486 0 0 0-.542-.08L.48 16.027a.858.858 0 0 0 .01 1.543l7.596 3.62L23.274 8.705 9.967 22.085l9.463 4.51a.855.855 0 0 0 1.166-.458L29.966 2.5a.483.483 0 0 0-.122-.534Z" />
                        </g>
                        <defs>
                            <clipPath id="a">
                                <path fill="#fff" d="M0 0h30v30H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </form>
            <h6 className='text-center text-xs pt-16 lg:pt-24 pb-8' >@2022 Copyright</h6>
        </div>
    )
}

export default Contact