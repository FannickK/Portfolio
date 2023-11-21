"use client";

import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
      </ul>
    )
  },
  {
    title: "Skills_data",
    id: "skills2",
    content: (
      <ul className='list-disc pl-2'>
        <li>Python</li>
        <li>SQL</li>
        <li>R</li>
        <li>Excel</li>
        <li>MySQL</li>
        <li>Power BI</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li><strong>Université de Lille :</strong> Master MIASHS(Web Analyste)</li>
        <li><strong>Université de Lille :</strong> Licence MIASHS</li>
      </ul>
    )
  },
  {
    title: "Langues",
    id: "langues",
    content: (
      <ul className='list-disc pl-2'>
        <li><strong>Anglais :</strong> Niveau B2 (Certification TOEIC en préparation)</li>
        <li><strong>Francais :</strong> Langue maternelle</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab , setTab] = useState("skills");
  const [ isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section id="about" className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <Image src="/images/about-image.png" width={500} height={500} />
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>A PROPOS DE MOI</h2>
            <p className='text-base lg:text-lg'>Je suis un jeune étudiant de 21 ans en fin d'études à l'Université de Lille passionné par le développement web et l'analyse de données. En dehors de mes études j'aime bien jouer au basket, ecouter de la musique et faire à manger</p>
            <div className='flex flex-row justify-start mt-8'>
              <TabButton 
                selectTab={() => handleTabChange("skills")} 
                active={tab === "skills"}
              >
                {" "}
                Dev skills{""}
              </TabButton>
              <TabButton 
                selectTab={() => handleTabChange("skills2")} 
                active={tab === "skills2"}
              >
                {" "}
                Data skills{""}
              </TabButton>
              <TabButton 
                selectTab={() => handleTabChange("education")} 
                active={tab === "education"}
              >
                {" "}
                Education{""}
              </TabButton>
              <TabButton 
                selectTab={() => handleTabChange("langues")} 
                active={tab === "langues"}
              >
                {" "}
                Langues{""}
              </TabButton>
            </div>
            <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection;