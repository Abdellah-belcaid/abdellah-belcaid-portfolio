export const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "Developed my personal portfolio website using Next.js and Tailwind CSS to showcase my web development projects and skills.",
    technologies: ["Next.js", "Tailwind CSS"],
    devURL: "https://github.com/Abdellah-belcaid/abdellah-belcaid-portfolio",
    prodURL: "https://abdellah-belcaid-portfolio.vercel.app/",
    imageURL: "/images/projects/portfolio/portfolio_1.png",
    media: Array.from(
      { length: 6 },
      (_, i) => `/images/projects/portfolio/portfolio_${i}.png`
    ),

    duration: "September 2023 - Present",
    role: "Full-Stack Developer",
    tag: ["All", "Front-End"],
  },

  {
    id: 2,
    title: "IMDb Clone - Movie and TV Show Website",
    description:
      "Developed a website using Next.js and Tailwind CSS to display information about movies and TV shows. Integrated the TMDB API for data retrieval.",
    technologies: ["Next.js", "Tailwind CSS", "TMDB API"],
    devURL: "/",
    prodURL: "https://next-imdb-clone-ten.vercel.app",
    imageURL: "/images/projects/imbd_clone/imbd_clone_0.png",
    media: Array.from(
      { length: 5 },
      (_, i) => `/images/projects/imbd_clone/imbd_clone_${i}.png`
    ),
    duration: "August 2023 - Present",
    tag: ["All", "Front-End"],
  },

  {
    id: 3,
    title: "Netflix Clone",
    description:
      "Developed a Netflix clone using React and Tailwind CSS. Integrated Firebase for user authentication and registration. Users can add their favorite movies to the database using Firestore.",
    technologies: ["React", "Tailwind CSS", "Firebase", "FireStore"],
    devURL: "/",
    prodURL: "https://netflix-react-app-e8295.firebaseapp.com/",
    imageURL: "/images/projects/react_netflix.png",
    media: ["/images/projects/react_netflix.png"],
    duration: "August 2023 - Present",
    tag: ["All", "Front-End"],
  },

  {
    id: 4,
    title: "Financial Management for a Research Lab",
    description:
      "Designed and developed a financial management system for a research laboratory. Utilized Spring Boot for the backend and Angular Material for the frontend.",
    technologies: ["Spring Boot", "Angular", "Angular Material", "PostgreSQL"],
    devURL: "/",
    prodURL: "/",
    imageURL: "/images/projects/lab_management.png",
    media: [
      "/images/projects/lab_management.png",
      "/images/projects/lab_management_1.png",
    ],
    duration: "May 2023 - June 2023",
    tag: ["All", "Full-Stack"],
  },
  {
    id: 5,
    title: "Library Management Application",
    description:
      "Built a library management application using Spring Boot for the backend, JWT for authentication, and Angular/Angular Material for the frontend.",
    technologies: [
      "Spring Boot",
      "JWT",
      "Angular",
      "Angular Material",
      "MySQL",
    ],
    devURL: "/",
    prodURL: "/",
    imageURL: "/images/projects/book_store.png",
    media: ["/images/projects/portfolio.png"],
    duration: "March 2023 - Present",
    tag: ["All", "Full-Stack"],
  },

  {
    id: 6,
    title: "XML Validation and Transformation App",
    description:
      "Developed a web application for validating and transforming XML data. Utilized Django and Bootstrap for the project.",
    technologies: ["Python", "Django", "Bootstrap"],
    devURL: "https://github.com/Abdellah-belcaid/xml-operations-app",
    prodURL: "https://xml-operations-app.onrender.com/",
    imageURL: "/images/projects/xml_operations/xml_operations_0.png",
    media: Array.from(
      { length: 8 },
      (_, i) => `/images/projects/xml_operations/xml_operations_${i}.png`
    ),
    duration: "December 2022 - January 2023",
    tag: ["All", "Full-Stack"],
  },
  {
    id: 7,
    title: "Video Acquisition and Machine Learning App",
    description:
      "Created a web application for video acquisition and machine learning using Django, Bootstrap, OpenCV, and Channels.",
    technologies: [
      "Python",
      "Django",
      "Bootstrap",
      "OpenCV",
      "Channels",
      "Redis",
    ],
    devURL: "/",
    prodURL: "/",
    imageURL: "/images/projects/Video_Acquisition.png",
    media: ["/images/projects/Video_Acquisition.png"],
    duration: "December 2022 - January 2023",
    tag: ["All", "Full-Stack"],
  },
  {
    id: 8,
    title: "Commercial Management Web Application",
    description:
      "Developed a commercial management web application using JEE and Bootstrap for the frontend.",
    technologies: ["Java", "JEE", "Bootstrap", "MySql"],
    devURL: "/",
    prodURL: "/",
    imageURL: "/images/projects/Commercial_Management.png",
    media: ["/images/projects/portfolio.png"],
    duration: "February 2022 - June 2022",
    tag: ["All", "Full-Stack"],
  },
];
