import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center mt-32"
    >
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] h-[200px] w-[200px] absolute mt-52" />
      <div className="rounded-full border border-[#333333] h-[400px] w-[400px] absolute mt-52" />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[550px] w-[550px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[700px] w-[700px] absolute mt-52" />
    </motion.div>
  );
}

export default BackgroundCircle;
