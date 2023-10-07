"use client";
import { sendEmail } from "@/services/emailService";
import Link from "next/link";
import { useState } from "react";

import {
  RiGithubFill,
  RiLinkedinBoxFill
} from "react-icons/ri";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/Abdellah-belcaid",
  github: "https://github.com/Abdellah-belcaid",
};

function Contact() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const formResult = await sendEmail(data);

    if (formResult.success) {
      setEmailSubmitted(true);
      alert("Message has been sent successfully");
    } else {
      alert(formResult.error);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative mx-6">
      <div className="bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg  absolute top-[96%] -left-4 transform -translate-x-1/2 -translate-y-1/2 "></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-black dark:text-white my-2 ">Let us Connect</h5>
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
        <form onSubmit={handleSubmit} className="flex flex-col z-10">
          <div className="mb-6 flex flex-col md:flex-row  justify-between md:space-x-2">
            <div className="flex flex-col my-4 md:my-0">
              <label
                htmlFor="name"
                className="text-black dark:text-white block mb-1 text-sm font-medium"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="your full name"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5  "
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-black dark:text-white block mb-1 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="exemple@google.com"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5  "
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-black dark:text-white block mb-1 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5  "
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-black dark:text-white block mb-1 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="let's talk about ..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5  "
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-black dark:text-white font-medium py-2.5 px-5 rounded-lg w-full  "
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              email sent successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
