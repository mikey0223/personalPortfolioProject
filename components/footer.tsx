"use client";

import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import {motion} from "framer-motion"
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';



export default function Footer() {


    return (
        <footer className='relative z-[999] w-full text-slate-900'>
            <motion.div className='fixed bottom-2 flex justify-between w-full gap-2 items-end font-medium'
                initial={{opacity: 0, y:100}}
                animate={{opacity:1, y:0}}
                transition={{delay:0.2}}
            >
                <a className='bg-white flex items-center gap-2 rounded-full px-4 py-2 h-fit outline-none 
                focus:scale-110 hover:scale-110 active:scale-105 transition'
                href='/Resume.pdf' download={true}>
                    CV {" "} <HiDownload/>
                </a>

                <div className='flex gap-2 sm:flex-row flex-col'>
                    <a className='bg-white flex items-center gap-2 rounded-full px-4 py-2 w-15 outline-none 
                    focus:scale-110 hover:scale-110 active:scale-105 transition'
                    href='https://linkedin.com/in/michael-gavrincea-2b08861ba'
                    aria-label='Linked Link'>
                        <BsLinkedin/>
                    </a>

                    <a className='bg-white flex items-center gap-2 rounded-full px-4 py-2 text-[1.3rem] w-15 outline-none 
                    focus:scale-110 hover:scale-110 active:scale-105 transition'
                    href='https://github.com/mikey0223?tab=repositories'
                    aria-label='Github Link'>
                        <FaGithubSquare/>
                    </a>
                </div>

            </motion.div>

        </footer>
    )
}