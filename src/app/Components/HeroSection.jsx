import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 text-center place-self-center sm:text-left'>
                    <h1 className='mb-4 text-4xl font-extrabold text-white lg:text-6xl sm:text-5xl'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Hello, I&apos;m{" "}
                            </span>
                             Nipun</h1>
                    <p className='mb-6 text-base text-lg text-white lg:text-xl'>I am an undergraduate student at the Sri Lanka Institute of Information Technology (SLIIT), specializing in software development. With a solid foundation in Java and JavaScript, I have successfully completed several projects that showcase my proficiency in these languages. My technical skills extend to frameworks and libraries such as Express, Node.js, and Next.js, where I have applied my knowledge to build robust and efficient web applications.</p>
                </div>
                <div>
                    <button className='w-full px-6 py-4 mr-4 text-white bg-white rounded-full sm:w-fit hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
                        <span>Contact me</span>
                    </button>
                    <button className='w-full px-1 py-1 mt-3 text-white bg-transparent border rounded-full sm:w-fit hover:bg-slate-800 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
                        <span className='block bg-[#031930] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
                <div className='col-span-5 mt-4 place-self-center lg:mt-0'>
                    <div className='rounded-full bg-[#89AFD4] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]'>
                        <Image
                            src="/images/Hero-section.png"
                            alt='Hero-section-image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={500}
                            height={500} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection