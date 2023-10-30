"use client";
import Pagination from "@/components/UI/Pagination";
import SearchBox from "@/components/UI/SearchBox";
import Tag from "@/components/UI/Tag";
import ProjectCard from "@/components/project/ProjectCard";
import { projectsData } from "@/data/projects";
import { filterItems, paginateItems } from "@/utils/utilsFunction";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

function Projects() {
  const [tag, setTag] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const itemsPerPage = 6;

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const filteredProjects = filterItems(projectsData, tag, searchTerm, "title");
  const currentProjects = paginateItems(
    filteredProjects,
    currentPage,
    itemsPerPage
  );

  const totalItems = filteredProjects.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-4">
        My Projects
      </h2>
      <SearchBox onSearchChange={handleSearchChange} />
      <div className="text-black dark:text-white flex flex-wrap justify-center items-center gap-2 py-6">
        {["All", "Front-End", "Back-End", "Full-Stack"].map((tagName) => (
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 mx-4"
      >
        {currentProjects?.map((project, index) => (
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}

export default Projects;
