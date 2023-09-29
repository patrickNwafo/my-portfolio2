import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import Html from "./Html";
import Css from "./Css";
import Node from "./Node";
import ReactJs from "./ReactJs";
import NextJs from "./NextJs";
import Tailwind from "./Tailwind";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className=" absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>
      <div className="grid grid-cols-4  gap-5">
        <Skill />
        <Css />
        <Html />
        <Node />
        <ReactJs />
        <NextJs />
        <Tailwind />
      </div>
    </motion.div>
  );
}

export default Skills;
