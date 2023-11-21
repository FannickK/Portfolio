"use client";

import React from 'react'
import { TypeAnimation } from 'react-type-animation';

    
const HeroSection = () => {
  return (
    <section className='lg:py-16 '>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Bonjour, je suis{" "}
                    </span> 
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Fannick',
                            1000,
                            'Web Developer',
                            1000,
                            'Data Analyst',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Étudiant en Master 2 Web Analyste, passionné à la fois par le monde du développement web et de l'analyse de données. Je suis actuellement à la recherche d'un stage de fin d&apos;étude dans l'un de ces deux domaines à partir de Janvier 2024
                </p>
                <div>
                    <a className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black' href="#contact">Hire Me</a>
                    <a className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3' href='/CV.pdf' download>Download CV{" "}</a>
                </div>
            </div>
         </div>
    </section>
  );
}

export default HeroSection