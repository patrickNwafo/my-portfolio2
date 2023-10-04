import React from "react";
import { motion } from "framer-motion";

type Props = {};

function FamsecApp({}: Props) {
  return (
    <div className="relative flex snap-x snap-mandatory ">
      <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <h3 className="absolute top-10 uppercase tracking-[5px] text-gray-500 text-2xl">
          Projects
        </h3>
        <motion.img
          initial={{
            y: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src="https://famsec-app.vercel.app/_next/static/media/logo.abc0bf27.svg"
          width={100}
          height={100}
        />
        <div className="space-y-5 px-0 md:px-10 max-w-5xl">
          <a
            href="https://famsec-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4 font-semibold text-center">
              {" "}
              <span className="underline decoration-[#E7AB0A]/50">
                {" "}
                Famsec-app
              </span>{" "}
            </h4>
          </a>
          <p className="text-lg text-center md:text-left line-clamp-3 md:line-clamp-none">
            Responsive frontend app. Contains Beautiful styling with Tailwind
            Css with 3D animation with the use of Framer Motion
          </p>
        </div>
      </div>
    </div>
  );
}

export default FamsecApp;
