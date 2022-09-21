import React, { ReactElement } from 'react'
import {motion} from "framer-motion"
interface Props {
    
}

function BackgroundCircles({}: Props): ReactElement {
    return (
        <motion.div 
        initial={{
            opacity:0,
        }}
        animate={{
            scale:[1,2,1],
            opacity:[0.1,0.1,1.0],
            borderRadius:["20%","80%","20%"]
        }}
        transition={{
            duration:10,
        }}
        className='relative flex justify-center items-center'>
            <div className=' absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
            <div className=' absolute border border-[#333333] rounded-full h-[350px] w-[350px] mt-52 animate-ping'/>
            <div className=' absolute border border-[#000000] rounded-full h-[500px] w-[500px] mt-52 animate-pulse opacity-20'/>
            <div/>
        </motion.div>
    )
}

export default BackgroundCircles
