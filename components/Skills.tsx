import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'

type Props = {}

function Skills({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className=' h-screen flex flex-col relative justify-center items-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen'>
            <h3 className=' absolute uppercase top-24 tracking-[20px] text-slate-800'>
                Skills
            </h3>
            <h3 className=' absolute top-36 uppercase tracking-[3px] text-xs'> Hover over a skill for current proficiency</h3>

            <div className='  grid grid-cols-6 gap-5'>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.sanity.io/images/dff2hd9f/production/50968497ea0d75acd3eaaeea5d305c1b8cc9828f-2048x2048.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>Angular <br /> 90 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.sanity.io/images/dff2hd9f/production/249eb02723d7b9e3b32225fd19fe22063636331f-1200x1349.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>C++ <br /> 60 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.sanity.io/images/dff2hd9f/production/44cce8a5ad8b194db8034a6544bb75e147978a57-1200x1693.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>CSS <br /> 90 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://dwglogo.com/wp-content/uploads/2018/03/Dart_logo.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>Dart  <br /> 75 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>Express <br /> 90 % </p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.dribbble.com/users/1622791/screenshots/11174104/flutter_intro.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>Flutter <br /> 80 %</p>
                        </div>
                    </div>
                </div><div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='data:image/png;base64,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'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>Firebase <br /> 90 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='data:image/png;base64,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'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>HTML <br /> 90 % </p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='data:image/png;base64,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'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>Java <br /> 30 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.sanity.io/images/dff2hd9f/production/ba505d2892f18ee08bbfec2bbc84605a175aea03-2800x1750.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>JavaScript <br /> 85 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.sanity.io/images/dff2hd9f/production/c362f308c7f100ef85a3a9b732fa2c2bfad94c03-1200x601.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>MongoDB <br /> 90 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='data:image/jpeg;base64,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'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>Moralis <br /> 85 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>NextJS <br /> 90 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>Node JS <br /> 85 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://banner2.cleanpng.com/20180427/zaq/kisspng-web-development-php-programming-language-computer-5ae381e5d40ec8.1931377315248593658686.jpg'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>PHP <br /> 85 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.sanity.io/images/dff2hd9f/production/ee2cd3b17a217191fa43a871ff35248c125f7ff6-202x202.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>Postman <br />85 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.sanity.io/images/dff2hd9f/production/0d8c96cd8b1f9e9a1c7078fb944fafc950a246e3-3334x3334.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>Python <br /> 85 % </p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.sanity.io/images/dff2hd9f/production/94ea83d6de3e424834d9103b9fbf240a69e09677-1200x630.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>React JS <br /> 90 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.sanity.io/images/dff2hd9f/production/ff82d5f5440daa42ba9bba37d8d417e36ec314e5-848x477.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>React Native <br /> 90 % </p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.sanity.io/images/dff2hd9f/production/a157d3fb55cdf8d6209432a2661cd0d33dc2a7dc-364x364.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>Sanity <br /> 85 % </p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='data:image/jpeg;base64,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 '
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>SQL <br />85 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.sanity.io/images/dff2hd9f/production/f03519a80d85fe99d6e13dbe51a08aa49f077464-1200x1200.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>Tailwind CSS <br /> 90 %</p>
                        </div>
                    </div>
                </div>
                <div className=' group relative flex cursor-pointer'>
                    <motion.img
                        transition={{
                            duration: 1
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        className=' rounded-full border border-black object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
                        src='https://cdn.sanity.io/images/dff2hd9f/production/37e14561991155d5eed2d7bc7c4fb3c10bef7f3d-400x400.png'
                    />
                    <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20'>
                        <div className=' flex items-center justify-center h-full'>
                            <p className=' font-bold text-black opacity-100 text-xs'>TypeScript <br /> 80 %</p>
                        </div>
                    </div>
                </div>

            </div>

        </motion.div>
    )
}

export default Skills