"use client";
import AchievementSection from "@/components/AchievementSection";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="flex flex-col mt-4 md:mt-0">
      <section className="lg:py-16  ">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h1 className="text-white mb-8 text-xl sm:text-2xl lg:text-5xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 ">
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
            <p className="text-[#ADB7BE] text-base  sm:text-lg lg:text-xl">
              I am a FullStack developer specializing in Spring and
              Angular/react technologies. With a strong foundation in software
              engineering, I create exceptional web experiences that exceed
              expectations. Let us collaborate and bring your ideas to life.
            </p>
            <div className="mt-2">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-200 text-white ">
                Hire me
              </button>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-200 text-white mt-2">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                  Download CV
                </span>
              </button>
            </div>
          </div>
          <div className="col-span-4 place-self-center mt-4 md:ml-10 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px]  lg:w-[400px] lg:h-[400px] relative">
              <Image
                className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                src={"/images/avatar.png"}
                width={350}
                height={350}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <AchievementSection />
    </main>
  );
}
