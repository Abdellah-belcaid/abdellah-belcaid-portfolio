"use client";
import Link from "next/link";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

const socialLinks = {
  facebook: "https://www.facebook.com/Abdellah-belcaid",
  instagram: "https://www.instagram.com/Abdellah-belcaid",
  linkedin: "https://www.linkedin.com/in/Abdellah-belcaid",
  github: "https://github.com/Abdellah-belcaid",
  leetcode: "https://leetcode.com/AIZEN001",
};

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl md:text-2xl dark:text-white/70 text-black">
      <Link
        href={socialLinks.facebook}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookFill />
      </Link>
      <Link
        href={socialLinks.instagram}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramFill />
      </Link>
      <Link
        href={socialLinks.linkedin}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={socialLinks.github}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={socialLinks.leetcode}
        className="hover:text-accent transition-all duration-300"
      >
        <SiLeetcode />
      </Link>
    </div>
  );
};

export default Socials;
