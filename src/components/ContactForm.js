"use client";
import { sendEmail } from "@/services/emailService";
import { notifyError, notifySuccess } from "@/utils/notifyMessages";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formResult = await sendEmail(formData);

    if (formResult.success) notifySuccess();
    else notifyError();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col z-10">
      <div className="mb-6 grid grid-cols-1 gap-1 md:grid-cols-2 justify-between md:space-x-2">
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
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            required
            value={formData.name}
            onChange={handleChange}
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
            placeholder="example@google.com"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            required
            value={formData.email}
            onChange={handleChange}
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
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          required
          value={formData.subject}
          onChange={handleChange}
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
          rows={10}
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-600 text-black dark:text-white font-medium py-2.5 px-5 rounded-lg w-full"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
