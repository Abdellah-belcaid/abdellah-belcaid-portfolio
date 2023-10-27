import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const EmailTemplate = ({ name, subject, message }) => {
  return (
    <section className="max-w-2xl mx-auto p-6 bg-blue-100 rounded-lg shadow-lg">
      <header className="text-center">
        <Link
          href="https://abdellah-belcaid-portfolio.vercel.app/"
          className="text-black"
        >
          <Image
            width={30}
            height={30}
            className="mx-auto "
            src="/favicon.ico"
            alt="Belcaid Logo"
          />
          Belcaid
        </Link>
      </header>

      <main className="mt-8 text-gray-700">
        <h2 className="mt-6 text-2xl font-semibold">{`Hi ${name},`}</h2>

        <p className="mt-4 leading-relaxed">{message}</p>

        <p className="mt-8 text-gray-700">
          Thanks, <br />
          Abdellah Belcaid
        </p>
      </main>

      <footer className="mt-8 text-center">
        <h3 className="font-medium text-gray-800">Connect with Me</h3>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/abdellah-belcaid">
            <FaLinkedin size={32} color="#0077B5" />
          </a>
          <a href="https://twitter.com/Belcaid_AIZEN">
            <FaTwitter size={32} color="#1DA1F2" />
          </a>
          <a href="https://github.com/abdellah-belcaid">
            <FaGithub size={32} color="#171515" />
          </a>
          <a href="mailto:abdellah.belcaid2001@gmail.com">
            <FaEnvelope size={32} color="#D44638" />
          </a>
        </div>
        <p className="mt-6 text-gray-500">
          &copy; 2023 Belcaid. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
};

export default EmailTemplate;
