import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex mt-16 flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://i.pinimg.com/564x/13/fe/9b/13fe9b9214e81eeedb0eef2efe575a71.jpg"
        alt="images"
      />
      <div className="px-0 md:px-10">
        <h4 className=" text-4xl font-light">What is Lorem Ipsum?</h4>
        <p className="font-bold text-2xl mt-1">Lorem Ipsum</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg"
            alt="javascriptImage"
            width={100}
            height={100}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg"
            alt="javascriptImage"
            width={100}
            height={100}
          />

          <Image
            className="h-10 w-10 rounded-full"
            src="https://i.pinimg.com/564x/40/0f/22/400f22ce6f755ac476eb06c4cb45395c.jpg"
            alt="javascriptImage"
            width={100}
            height={100}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary pointsSummary points Summary pointsSummary points Summary
            pointsSummary points Summarypoints
          </li>
          <li>
            Summary pointsSummary points Summary pointsSummary points Summary
            pointsSummary points Summarypoints
          </li>
          <li>
            Summary pointsSummary points Summary pointsSummary points Summary
            pointsSummary points Summarypoints
          </li>
          <li>
            Summary pointsSummary points Summary pointsSummary points Summary
            pointsSummary points Summarypoints
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
