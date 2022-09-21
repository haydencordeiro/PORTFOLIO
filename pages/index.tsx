import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import kdimge from '../assets/images/karan.png'
import About from '../components/About'
import Certifications from '../components/Certifications'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { pageInfo, Skill, Social } from '../typings'
import { fetchpageInfo } from '../utils/fetchpageInfo'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: pageInfo;
  social: Social[];
  skill: Skill[];
}

const Home = ({}: Props) => {
  return (
    <div 
    className='bg-blue h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/30 scrollbar-thumb-slate-100'>
      <Head>
        <title>Karan Doshi's Portfolio </title>
      </Head>

      <Header/>
      
      <section id="hero" className=' snap-start'>
      <Hero/>
      </section>

      <section id="about" className=' snap-center'>
      <About/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects/>
      </section>

      <section id="certifications" className='snap-start'>
        <Certifications/>
      </section>

      <section id="contactme" className='snap-start'>
        <ContactMe/>
      </section>

      <Link href="#hero">
        <footer className=' sticky bottom-3 w-full cursor-pointer'>
          <div className=' flex items-center justify-center'>
            <div
          
            className=' bg-black h-10 w-10 rounded-full filter flex justify-center items-center p-3'
            
          
            ><p className=' text-white text-[10px] uppercase '>go up</p></div>
          </div>
        </footer>
      </Link>
    </div>

  )
}

export default Home

