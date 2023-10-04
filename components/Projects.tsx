import React from "react";
import AmazonProject from "./AmazonProject";
import { motion } from "framer-motion";
import FamsecApp from "./FamsecApp";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center overflow-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <h3 className="absolute top-10 uppercase tracking-[5px] text-gray-500 text-2xl text-center">
        Projects
      </h3>

      <div className="w-full flex space-x-10 p-10 snap-x">
        <AmazonProject />
        <FamsecApp />
      </div>
    </motion.div>
  );
}

export default Projects;
