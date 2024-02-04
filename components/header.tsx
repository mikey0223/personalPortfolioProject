"use client";       // needed because framer motion uses react hook use effect

import React, { useState } from 'react'
import {motion} from "framer-motion";
import {links} from "@/lib/data";
import Link from 'next/link';
import { useTheme } from './themeProvider';

export default function Header() {
  const [selectedSection, setSection] = useState("Home");
  const  {theme} = useTheme();

  const handleLinkClick = (id: string) => {
    console.log("Link name" + id)
    setSection(id);
  };
  return (
    <header className='relative '>
    <motion.div 
      initial = {{y: -100, x:"-50%", opacity: 0}}
      animate= {{y:0, x: "-50%", opacity: 0.9}}
      style={{ willChange: 'transform', backdropFilter: 'blur(10px)'}} // Added to suggest layer promotion

      className={`${theme === 'light' ? ' shadow-black/[0.03] ' : 'shadow-white/[0.03] '} bg-white fixed top-0 left-1/2 h-[2.5rem]
       w-full rounded-none border border-white border-opacity-40
      sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
      flex justify-center items-center backdrop:blur z-[999]`}
      >
          
        <nav className='w-full top-[0.15rem] left-1.2 h-12 py-2 sm:top-[1.7rem] sm:h-[inital] sm:py-0 flex items-center justify-center'>
          <ul className={`flex w-full flex-wrap items-center justify-evenly gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap gap-5`}>
            {links.map((link,index) => (  
              <li key={link.name} className={`${selectedSection == link.name ? 'bg-gray-200 ' : 'bg-none '}flex w-fit sm:py-2 sm:px-2 py-1 px-1 items-center justify-center
               hover:text-gray-950 transition rounded-full hover:bg-gray-200`}
               onClick={() => handleLinkClick(link.name)}
               >
                <Link href={link.hash}>{link.name}</Link> 
              </li>
            ))}
          </ul> 
        </nav>

      
      </motion.div>
      
    </header>

  )
}
