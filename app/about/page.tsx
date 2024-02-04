"use client";



import {motion} from "framer-motion"
import Image from "next/image";
import NW from "@/NW.png"
import Supra from "@/Supra.jpg"
import Rx7 from "@/rx7.jpg"
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { useTransform } from "framer-motion";
import { useTheme } from "@/components/themeProvider";


export default function About() {
    const ref_text2 = useRef<HTMLHeadingElement>(null);
    const {scrollYProgress} = useScroll({
      target: ref_text2,
      offset: ["0 1", "1 1"]
    })
    const text_opacity2 = useTransform(scrollYProgress, [0, 0.7], ['0', '1'])
    const x_pos2 = useTransform(scrollYProgress, [0, .7], ['-200px', '0px']);

    const image_opacity2 = useTransform(scrollYProgress, [.5, 1], ['0', '1'])
    const y_pos_image2 = useTransform(scrollYProgress, [.5, 1], ['200px', '0px']);


    const opacity1 = useTransform(scrollYProgress, [0.3, 0.7], ['1', '0'])
    const pos1 = useTransform(scrollYProgress, [0.3, .7], ['0','-200px']);

    const {theme} = useTheme();


    return (
      <main className=" absolute top-0"> 
        <div className={`h-[90vh] ${theme == 'light' ?'bg-[#abeeff] ' : 'bg-[#195d6e] ' } `}>
          <div className="h-full flex items-center justify-center">
            <motion.section 
            initial={{scale: 0, opacity: 0}}
            animate= {{scale: 1, opacity:1}}
            style={{x: pos1, opacity: opacity1}}
            transition={{duration: 0.3}}

            className="flex flex-col lg:flex-row h-[100%] pt-[80px] gap-4 lg:gap-5 justify-center lg:justify-evenly rounded-md items-center w-[90%]">
              <h2
                

                className="lg:w-1/2 h-fit font-semibold text-sm sm:text-lg md:text-xl"
              >
                <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl text-center">About Me!</h1> <br/>
                I'm Michael. I am currently a Master's student at Northwestern University. I will be graduating in June, 
                with an MS/BS in Computer Science and a minor in Physics. On campus, I've contributed to the Northwestern Formula Racing team
                my freshmen and sohpmore year. My freshmen year I was on the aerodynamics team and designed an intake for the car and my sohpmore
                year I was on the EV Transition team where I preformed R&D for our transition to our first electric vehicle for the following
                year. Currently, I am a member of Paragon Labs which is an on campus research group for quantum computing. There, I participate
                in research regarding quantum compilation for chiplet architectures. I am also the vice president of Northwestern's Chapter of
                the Tau Beta PI Engineering Honors Society where I assist in hosting events with local organization and students as well as
                general administrative tasks required to keep the group up and running. 

              </h2>

              
              <Image 
              src={NW} 
              alt="Northwestern Logo"
              className="h-[30%] w-auto lg:h-[40vh] shadow-xl rounded-[100%] object-cover"
              />
              


            </motion.section>
          </div>
        </div>


        <div ref={ref_text2} className={`h-[90vh] ${theme == "light" ? 'bg-[#abffe2] ' : 'bg-[#133a2c] '} `}>
          <div className="h-full flex items-center justify-center">
            <section 
            
            className="flex flex-col lg:flex-row h-[100%] gap-4 lg:gap-5 justify-center lg:justify-evenly rounded-md items-center w-[90%]">
              <motion.h2
                
                style={{x: x_pos2, opacity: text_opacity2,}}

                className="lg:w-1/2 h-fit font-semibold text-sm sm:text-lg md:text-xl "
              >
                In my free time, I love learning about cars and aerospace. In fact, I own a 1987 Mazda Rx7. I picked it up in fall of 2022 and couldn't be happier with it.
                Sure it may be nearing 40 years old and is almost double my age, but I find the engineering behind it very fascinating. Particularly the fact that it is one
                of the few cars in the world that uses the Wankel Rotary Engine. This gives the car certain charactersitics that many people enjoy such as a low center of
                gravity, amazing weight distribution, and a high redline. Naturally I also enjoy driving and whenever I go on trips I try to find interesting cars 
                to rent while I explore the area.

              </motion.h2>

              <motion.div 
     
              style={{y: y_pos_image2, opacity: image_opacity2,}}

              className="flex h-[30%] w-auto lg:w-1/2 lg:h-[40vh]">
              <Image 
              src={Rx7} 
              alt="My 1987 Rx7"
              className="w-1/2 h-auto shadow-xl object-cover"
              />

<Image 
              src={Supra} 
              alt="Toyota Supra Mark Five"
              className="w-1/2 h-auto shadow-xl object-cover"
              />

            </motion.div>


            </section>
          </div>
        </div>


      </main>
    );
  }