import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex mt-16 flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-screen snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-hidden overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://i.pinimg.com/564x/0d/42/c5/0d42c51c82fca7b2a1360ffec4747b2a.jpg"
        alt="images"
      />
      <div className="px-0 md:px-10">
        <h4 className=" text-4xl font-light">Fullstack Developer</h4>
        <p className="font-bold text-xl mt-1">Description</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="https://i.pinimg.com/564x/f7/26/62/f72662c9ccf1c7d437827a374cb8d38e.jpg"
            alt="code"
            width={100}
            height={100}
          />
        </div>
        {/* <p className="uppercase py-5 text-gray-300">Started work... Ended...</p> */}

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Implemented responsive design principles using HTML, CSS, and
            JavaScript.
          </li>
          <li>
            Worked as a frontend developer intern on a team of 5 to build and
            maintain client websites.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
