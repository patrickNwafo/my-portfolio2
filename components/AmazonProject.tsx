import React from "react";
import { motion } from "framer-motion";

type Props = {};

function AmazonProject({}: Props) {
  return (
    <div className="relative flex snap-x snap-mandatory ">
      <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <motion.img
          initial={{
            y: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src="https://i.pinimg.com/564x/13/fe/9b/13fe9b9214e81eeedb0eef2efe575a71.jpg"
          alt="amazon"
          width={100}
          height={100}
        />
        <div className="space-y-5 px-0 md:px-10 max-w-5xl">
          <a
            href="https://amazon-clone-3woo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4 font-semibold text-center">
              {" "}
              <span className="underline decoration-[#E7AB0A]/50">
                {" "}
                Amazon clone
              </span>{" "}
            </h4>
          </a>
          <p className="text-lg text-center md:text-left line-clamp-3 md:line-clamp-none">
            We will be able to use Google Authentication using NextAuth, Add
            items to basket Make payment using stripe And soo much more...
          </p>
        </div>
      </div>
    </div>
  );
}

export default AmazonProject;

{
  /* <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
  className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
  >
  <h3 className=" absolute top-10 uppercase tracking-[10px] text-gray-500 text-2xl">
    Projects
  </h3>
  
  <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
    <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://i.pinimg.com/564x/13/fe/9b/13fe9b9214e81eeedb0eef2efe575a71.jpg"
        alt="amazon"
        width={100}
        height={100}
      />
      <div className="space-y-5 px-0 md:px-10 max-w-5xl">
        <a
          href="https://amazon-clone-3woo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4 font-semibold text-center">
            {" "}
            <span className="underline decoration-[#E7AB0A]/50">
              {" "}
              Amazon clone
            </span>{" "}
            Famsec-app clone
          </h4>
        </a>
        <p className="text-lg text-center md:text-left line-clamp-3 md:line-clamp-none">
          We will be able to use Google Authentication using NextAuth, Add
          items to basket Make payment using stripe And soo much more...
        </p>
      </div>
    </div>
  </div>
  
  <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-6"></div>
  </motion.div> */
}
