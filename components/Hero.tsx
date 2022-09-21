import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import kdimge from '../assets/images/karan.png'
import Image from 'next/image'
type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I am Karan Doshi.",
            "A Full Stack Developer,",
            "Computer Engineer,",
            "Business Enthusiast."
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className=' h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                width="128px"
                height="128px"
                className=' h-32 w-32 relative rounded-full mx-auto object-cover'
                src={kdimge} alt='' />
            <div className='z-20'>
                <h2 className=' text-xs uppercase tracking-[10px]'>Software Engineer </h2>
                <h1 className=' text-xl lg:text-2xl font-medium px-10'>
                    <span className=' px-5'>{text}</span>
                    <Cursor cursorColor='#A96762' />
                </h1>
                <div className=' pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                    <Link href="#certifications">
                        <button className='heroButton'>Certifications</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero