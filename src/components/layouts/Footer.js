import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Import social media icons

function Footer() {
  return (
    <footer className="footer mt-auto border-t z-10 border-t-[#33353F]  dark:text-white text-black ">
      <div className="container p-6 flex justify-between items-center">
        <p className="text-slate-900 dark:text-slate-400 ">
          &copy; Abdellah Belcaid
        </p>
        <p className="text-slate-900 dark:text-slate-400">
          2023@ All rights reserved
        </p>
        <div className="flex space-x-4 text-lg text-black dark:text-white">
          {/* Social Media Icons */}
          <a
            href="https://twitter.com/abdellah-belcaid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className=" hover:text-blue-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdellah-belcaid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400" />
          </a>
          <a
            href="https://github.com/Abdellah-belcaid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-blue-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
