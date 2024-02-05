"use client";       

import React from 'react'
import {motion} from "framer-motion";
import { useTheme } from './themeProvider';
import { BsSun } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs';

export default function ThemeButton() {
    const {theme, toggleTheme} = useTheme()

    return (
       
        <div className='flex items-center relative z-[1000] w-[100vw] flex-row justify-center'>
            <motion.button 
            className={`${theme === 'light' ? 'bg-white ' : 'bg-black '} flex items-center gap-2 rounded-full px-4 py-2 h-fit outline-none 
                focus:scale-110 hover:scale-110 active:scale-105 transition z-[1000] bottom-2 fixed text-[1.5rem]`}
            onClick={toggleTheme}
            initial={{y:150, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.5}}
            aria-label='Theme toggle button'
            >
                    {theme === 'light' ? <BsSun/> : <BsMoon className='text-white'/> }
            </motion.button>
        </div>
      
    )
}