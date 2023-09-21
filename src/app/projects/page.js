"use client";
import ProjectCard from "@/components/ProjectCard";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import Tag from "@/components/UI/Tag";
import { projectsData } from "@/data/projects";
import SearchBox from "@/components/UI/SearchBox";

function Projects() {
  //   const [repositories, setRepositories] = useState([]);

  //   useEffect(() => {
  //     getGithubRepositories()
  //       .then((repositories) => {
  //         setRepositories(repositories);
  //         console.log(repositories);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching repositories:", error);
  //       });
  //   }, []);

  const [tag, setTag] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData?.filter(
    (project) =>
      (project?.tag.includes(tag) || tag === "All") &&
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) // Include search term
  );
  // function to handle search term changes
  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 ">
        My Projects
      </h2>
      <SearchBox onSearchChange={handleSearchChange} />
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        {["All", "Web", "Mobile"].map((tagName) => (
          <Tag
            key={tagName}
            onClick={handleTagChange}
            tag={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mx-4"
      >
        {filteredProjects?.map((project, index) => (
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            key={index}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
