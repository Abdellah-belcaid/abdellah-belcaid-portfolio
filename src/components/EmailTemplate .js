import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const styles = {
  emailContainer: {
    maxWidth: "2xl",
    margin: "0 auto",
    padding: "1rem",
    backgroundColor: "#F0F4F8",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  header: {
    textAlign: "center",
    textDecoration: "none",
    color: "#000",
  },
  logo: {
    display: "block",
    margin: "0 auto",
    width: "64px",
    height: "64px",
  },
  subject: {
    fontSize: "24px",
    fontWeight: 600,
  },
  main: {
    marginTop: "2rem",
    color: "#666",
  },
  name: {
    marginTop: "1rem",
    fontSize: "24px",
    fontWeight: 600,
  },
  message: {
    marginTop: "1rem",
    lineHeight: 1.5,
  },
  footer: {
    marginTop: "2rem",
    textAlign: "center",
  },
  connectText: {
    fontWeight: 600,
    color: "#333",
  },
  socialLinks: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  socialLink: {
    fontSize: "24px",
    marginRight: "1rem",
  },
  copyright: {
    marginTop: "2rem",
    color: "#888",
  },
};

const EmailTemplate = ({ name, subject, message }) => {
  return (
    <section style={styles.emailContainer}>
      <header style={styles.header}>
        <a
          href="https://abdellah-belcaid-portfolio.vercel.app"
          style={styles.header}
        >
          <img
            style={styles.logo}
            src="https://drive.google.com/uc?id=1-97cbAZ-76EfZ6reOBjNuNNSKh1dbgO-"
            alt="Belcaid Logo"
          />
          Belcaid
        </a>
        <h2 style={styles.subject}>{subject}</h2>
      </header>

      <main style={styles.main}>
        <h2 style={styles.name}>{`Hi ${name},`}</h2>
        <p style={styles.message}>{message}</p>
        <p style={styles.message}>
          Thanks,
          <br />
          Abdellah Belcaid
        </p>
      </main>

      <footer style={styles.footer}>
        <h3 style={styles.connectText}>Connect with Me</h3>
        <div style={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/abdellah-belcaid">
            <FaLinkedin style={styles.socialLink} color="#0077B5" size={32} />
          </a>
          <a href="https://twitter.com/Belcaid_AIZEN">
            <FaTwitter style={styles.socialLink} color="#1DA1F2" size={32} />
          </a>
          <a href="https://github.com/abdellah-belcaid">
            <FaGithub style={styles.socialLink} color="#171515" size={32} />
          </a>
          <a href="mailto:abdellah.belcaid2001@gmail.com">
            <FaEnvelope style={styles.socialLink} color="#D44638" size={32} />
          </a>
        </div>
        <p style={styles.copyright}>
          &copy; 2023 Belcaid. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
};

export default EmailTemplate;

// /* eslint-disable @next/next/no-img-element */
// import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// const EmailTemplate = ({ name, subject, message }) => {
//   return (
//     <section className="max-w-2xl mx-auto p-6 bg-blue-100 rounded-lg shadow-lg">
//       <header className="text-center">
//         <a
//           href="https://abdellah-belcaid-portfolio.vercel.app/"
//           className="text-black"
//         >
//           <img className="mx-auto " src="/favicon.ico" alt="Belcaid Logo" />
//           Belcaid
//         </a>
//         <h2>{subject}</h2>
//       </header>

//       <main className="mt-8 text-gray-700">
//         <h2 className="mt-6 text-2xl font-semibold">{`Hi ${name},`}</h2>

//         <p className="mt-4 leading-relaxed">{message}</p>

//         <p className="mt-8 text-gray-700">
//           Thanks, <br />
//           Abdellah Belcaid
//         </p>
//       </main>

//       <footer className="mt-8 text-center">
//         <h3 className="font-medium text-gray-800">Connect with Me</h3>
//         <div className="mt-2 flex justify-center space-x-4">
//           <a href="https://www.linkedin.com/in/abdellah-belcaid">
//             <FaLinkedin size={32} color="#0077B5" />
//           </a>
//           <a href="https://twitter.com/Belcaid_AIZEN">
//             <FaTwitter size={32} color="#1DA1F2" />
//           </a>
//           <a href="https://github.com/abdellah-belcaid">
//             <FaGithub size={32} color="#171515" />
//           </a>
//           <a href="mailto:abdellah.belcaid2001@gmail.com">
//             <FaEnvelope size={32} color="#D44638" />
//           </a>
//         </div>
//         <p className="mt-6 text-gray-500">
//           &copy; 2023 Belcaid. All Rights Reserved.
//         </p>
//       </footer>
//     </section>
//   );
// };

// export default EmailTemplate;
