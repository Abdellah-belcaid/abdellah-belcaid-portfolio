import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/Abdellah-belcaid",
  github: "https://github.com/Abdellah-belcaid",
};

function Contact() {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative mx-6">
      <div className="bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg  absolute top-[96%] -left-4 transform -translate-x-1/2 -translate-y-1/2 "></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-black dark:text-white my-2 ">
          Let us Connect
        </h5>
        <p className="text-slate-700 dark:text-[#ADB7BE] mb-4 max-w-md ">
          Connecting with me opens doors to collaboration, innovation, and a
          world of creative possibilities. Let us join forces to make remarkable
          ideas come to life and achieve extraordinary goals together. Don not
          miss the chance to be a part of our exciting journey.
        </p>
        <div className="socials flex flex-row gap-3 text-black dark:text-white ">
          <Link href={socialLinks.github}>
            <RiGithubFill className="hover:text-accent " />
          </Link>
          <Link href={socialLinks.linkedin}>
            <RiLinkedinBoxFill className="hover:text-accent " />
          </Link>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <ToastContainer />
      </div>
    </section>
  );
}

export default Contact;
