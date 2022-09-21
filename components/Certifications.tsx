import React, { ReactElement } from 'react'
import { motion } from "framer-motion"
import CertificateCard from './CertificateCard'
import ProjectCard from './ProjectCard'
interface Props {

}

function Certifications({ }: Props): ReactElement {
    return (   
        <motion.div 
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1
        }}
        className=' h-screen flex flex-col relative justify-evenly items-center text-center overflow-hidden z-0 '>
            <h3 className=' absolute top-24 uppercase tracking-[20px] text-slate-800'>
                Certifications
            </h3>

            <div className=' w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  '>
                <CertificateCard/>
                
            </div>
        </motion.div>
    )
}

export default Certifications
