"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-40">
      <div className=" sm:grid-cols-12 border px-10 inline-block py-3 w-auto sm:w-fit rounded-lg ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-10 place-self-center text-center sm:text-left "
        >
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold text-center">
            <span className="text-transparent bg-clip-text text-white">
              I&apos;m Ligao Zheng.
            </span>
            
          </h1>
          <p className="text-[#ADB7BE] text-xl sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            I’m a full-time student studying information systems at New Jersey Institute of Technology. I am also looking for potential employment opportunities where I can contribute the skills I have learned and develop further technical experiences. 
          </p>
          <div className="text-center">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 text-white bg-transparent border border-orange-400"
            >
              Resume
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full text-white mt-3 bg-transparent"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Contact
              </span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
