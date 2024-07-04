import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center'>
                    <h1 className='mb-4 text-4xl font-extrabold text-white lg:text-6xl'>Hello, I&apos;m Nipun</h1>
                    <p className='mb-6 text-lg text-white lg:text-xl'>I am an undergraduate student at the Sri Lanka Institute of Information Technology (SLIIT), specializing in software development. With a solid foundation in Java and JavaScript, I have successfully completed several projects that showcase my proficiency in these languages. My technical skills extend to frameworks and libraries such as Express, Node.js, and Next.js, where I have applied my knowledge to build robust and efficient web applications.</p>
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