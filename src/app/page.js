"use client";
import AchievementSection from "@/components/AchievementSection";
import ParticlesContainer from "@/components/UI/ParticlesContainer";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export default function Home() {
  return (
    <main className="flex flex-col mt-4 md:mt-0 relative">
      <section className="py-8 px-4 sm:py-16 xl:px-12">
        <ParticlesContainer />
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-black dark:text-white mb-8 text-xl sm:text-2xl lg:text-5xl lg:leading-normal font-extrabold">
              <span className="animate-pulse bg-gradient-to-r from-red-600 via-green-500 to-violet-500 bg-clip-text text-transparent">
                Hello, I am Abdellah Belcaid
                <br />
              </span>
              <TypeAnimation
                sequence={[
                  "Welcome to My Portfolio",
                  1000,
                  "Discover My Journey in Web Development",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-slate-800 dark:text-slate-500 text-base  sm:text-lg lg:text-xl">
              I am a FullStack developer specializing in Spring and
              Angular/react technologies. With a strong foundation in software
              engineering, I create exceptional web experiences that exceed
              expectations. Let us collaborate and bring your ideas to life.
            </p>
            <div className="mt-2 relative">
              <Link href={"/contact"}>
                <button className="px-6 py-3 w-full cursor-pointer sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-200 text-white z-20 ">
                  Hire me
                </button>
              </Link>
              <Link
                href={"https://cvdesignr.com/p/6426fe41c9810?hl=en_GB"}
                download={"Resume"}
              >
                <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-200 text-white mt-2">
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                    Download CV
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
          <div className="col-span-4 place-self-center mt-4 md:ml-10 lg:mt-0">
            <motion.div
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full bg-slate-800 dark:bg-[#181818]  w-[250px] h-[250px]  lg:w-[400px] lg:h-[400px] relative"
            >
              <Image
                className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                src={"/images/avatar 2.png"}
                width={350}
                height={350}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </section>
      <motion.div
        variants={fadeIn("top", 1.6)}
        initial="hidden"
        animate="show"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AchievementSection />
      </motion.div>
    </main>
  );
}
