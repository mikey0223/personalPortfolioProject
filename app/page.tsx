"use client";

import Image from "next/image";
import myImage from "@/portrait.jpg"
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="-translate-y-[50px]"> 
      
      <motion.div 
        className="flex justify-center items-center"
        initial = {{opacity: 0, scale: 0}}
        animate = {{opacity: 1, scale: 1}}
        transition={ {
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image 
          src={myImage} 
          alt="Michael Portrait"
          className="w-[25vw] h-[25vw] rounded-[100%] border-[.35rem] border-white shadow-xl object-cover"
          style={{objectPosition: '67% 50%' }}
        />
      </motion.div>
      
      <motion.h1
        initial={{opacity: 0, y:100}}
        animate= {{opacity:1, y:0}}
      >
        <p className="w-3/4 translate-x-[16.75%]  py-5 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
        <b className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Hello!</b> <br/> I'm <b>Michael</b>, a <b>Master's student</b> at <b>Northwestern University</b> studying <b>computer science</b>! 
        I'm particularly passionate about <b>low-level software, machine learning, embedded systems,</b> and <b>computer security</b>, but have experience in many aspects of computer science!
        
        </p>  
      </motion.h1>
      

    </main>
  );
}
