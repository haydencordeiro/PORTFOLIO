import React, { ReactElement } from 'react'

interface Props {

}

function About({ }: Props): ReactElement {
    return (
        <div className=' h-screen flex relative flex-col justify-evenly items-center mx-auto text-center md:text-left md:flex-row px-10 max-w-5xl'>
            <h3 className=' absolute top-36 uppercase tracking-[20px] text-slate-800'>About Me</h3>
            <div className=' space-y-10 md:px-10'>
                <h4 className=' text-2xl font-medium flex items-center justify-center text-cyan-900'>
                    Analytical, Ebullient & Inquisitive
                </h4>

                <ul className=' list-disc space-y-4 italic font-light'>
                    <li>Hi, I am Karan Doshi and currently, I am pursuing my Master's degree in Computer Science from Seattle University.</li>
                    <li>A passionate computer science student with an affinity for development and entrepreneurship.</li>
                    <li> I am a problem solver with smart and detail-oriented skills. I often find happiness in assisting others.</li>
                    <li>Calm, dedicated, and trustworthy to work on new technologies and projects. Constantly exploring new boundaries of technologies and understanding the business world.</li>
                    <li>I pride myself on understanding the little difference between obstacles and opportunities and being able to turn them to my advantage.</li>
                </ul>

            </div>
        </div>
    )
}

export default About
