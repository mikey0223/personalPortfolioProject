"use client"

import { useTheme } from "@/components/themeProvider";
import { randomInt } from "crypto";
import {motion} from "framer-motion"
import { stringify } from "querystring";

const Skill = (props: {name: string, x: string, y: string}) => {
  const rand_delay = Math.random()/2;
  
  const {theme} = useTheme()


  return (
    <motion.div className={`flex items-center justify-center rounded-full font-bold border ${theme == 'light' ? 'bg-black text-slate-200 ' : 'bg-slate-200 text-black '}  p-4 shadow
                               absolute cursor-pointer`}
                initial={{x:0, y:0, opacity: 0}}
                animate={{x: props.x, y: props.y, opacity: 1 }}
                transition={{type: "spring", stiffness: "50", delay: rand_delay}}
                whileHover={{scale: 1.1}}
    >
    {props.name}
    </motion.div>

  )
}

export default function Skills() {
  const {theme} = useTheme();
    return (
      <main className=" flex flex-col 2xl:items-center">
        <div className="w-fit h-fit flex flex-col items-center">
          <motion.h2 initial={{y:-100, opacity: 0}} animate= {{y:0, opacity:1}} transition={{duration: 0.5}} className="font-bold text-8xl w-full text-center">Skills</motion.h2>

          <motion.div className={`w-[1500px] h-[900px] relative flex items-center justify-center rounded-full ${theme == 'light' ? ' bg-circularLight ' :  'bg-circularDark '} m-0`}>
                <Skill name="Skills" x="0px" y="0px"/>

                <Skill name="CUDA C++" x="100px"  y="160px"/>

                <Skill name="Linux" x="-175px"  y="-340px"/>

                <Skill name="PyTorch" x="100px"  y="-160px"/>

                <Skill name="C Programming" x="350px"  y="-100px"/>

                <Skill name="Typescript" x="-300px"  y="-10px"/>

                <Skill name="React" x="-275px"  y="320px"/>

                <Skill name="NextJS" x="375px"  y="-430px"/>

                <Skill name="MATLAB" x="-390px"  y="-350px"/>

                <Skill name="C++" x="-530px"  y="180px"/>

                <Skill name="Unity" x="15px"  y="300px"/>

                <Skill name="LateX" x="530px"  y="300px"/>

          </motion.div>

        </div>



      </main>
    );
  }