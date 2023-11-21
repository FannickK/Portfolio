"use client";

import React from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section id="contact" className='my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Rentrons en contact !</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                Vous trouverez ci-dessous mes coordonnées professionnelles, n&apos;hésitez pas à me contacter si vous souhaitez en savoir plus sur moi ou si vous avez des opportunités de stage à me proposer.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href='https://github.com/FannickK'>
                    <Image src={GithubIcon} width={30} height={30} />
                </Link>
                <Link href='https://www.linkedin.com/in/fannick-kinzo/'>
                    <Image src={LinkedinIcon} width={30} height={30} />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default EmailSection; 