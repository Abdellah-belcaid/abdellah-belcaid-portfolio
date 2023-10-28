"use client";
import { sendEmail } from "@/services/emailService";
import { notifyError, notifySuccess } from "@/utils/notifyMessages";
import { useState } from "react";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
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

    setSending(true);
    try {
      const formResult = await sendEmail(formData);

      if (formResult.success) {
        notifySuccess();
        // Reset form inputs on success
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        notifyError();
      }
    } catch (error) {
      notifyError();
    } finally {
      setSending(false);
    }
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
        className="bg-purple-400 hover:bg-purple-600 text-black dark:text-white font-medium py-2.5 px-5 rounded-lg w-full "
      >
        {sending ? (
          <>
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg>
            Sending
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
