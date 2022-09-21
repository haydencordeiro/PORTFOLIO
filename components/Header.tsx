import React, { ReactElement } from 'react'
import Link from 'next/link'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

type Props = {
    
}

function Header({ }: Props): ReactElement {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 2
                }}
                className="flex flex-row items-center">
                <SocialIcon url="https://linkedin.com/in/karandoshi5" style={{ height: 40, width: 40 }} />
                <SocialIcon url="https://github.com/doshikaran" style={{ height: 40, width: 40 }} />
            </motion.div>

            <Link href="#contactme">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 2
                    }}
                    className=' flex flex-row items-center cursor-pointer'>
                    <SocialIcon network="email" fgColor="black" bgColor="transparent" style={{ height: 40, width: 40 }} />
                    <p className='uppercase hidden md:inline-flex text-sm'>
                        Get in touch
                    </p>
                </motion.div>
            </Link>
        </header>
    )
}

export default Header
