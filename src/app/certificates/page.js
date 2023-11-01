"use client";
import CertificateCard from "@/components/CertificateCard";
import ImageModel from "@/components/UI/ImageModel";
import Pagination from "@/components/UI/Pagination";
import SearchBox from "@/components/UI/SearchBox";
import Tag from "@/components/UI/Tag";
import { certificationList } from "@/data/certificates";
import { filterItems, paginateItems } from "@/utils/utilsFunction";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const tagsList = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Version Control",
  "Security",
  "DevOps",
];

function Certificates() {
  const [tag, setTag] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
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

  const filteredCertifications = filterItems(
    certificationList,
    tag,
    searchTerm,
    "name"
  );
  const currentCertifications = paginateItems(
    filteredCertifications,
    currentPage,
    itemsPerPage
  );

  const totalCertifications = filteredCertifications.length;
  const totalPages = Math.ceil(totalCertifications / itemsPerPage);

  const handleClickImage = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.imageURL);
  };

  const handleRotation = (direction) => {
    const totalLength = filteredCertifications.length;
    let newIndex;

    if (direction === "right") {
      newIndex = currentIndex + 1 >= totalLength ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex - 1 < 0 ? totalLength - 1 : currentIndex - 1;
    }

    const newUrl = filteredCertifications[newIndex].imageURL;
    setClickedImg(newUrl);
    setCurrentIndex(newIndex);
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-4 ">
        My Certificates
      </h2>
      <SearchBox onSearchChange={handleSearchChange} />
      <div className="text-black dark:text-white flex flex-wrap justify-center items-center gap-2 py-6 ">
        {tagsList.map((tagName) => (
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
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-2 lg:mx-4"
      >
        {currentCertifications.map((certificate, index) => (
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            whileHover={{ scale: 1.1 }}
            key={index}
          >
            <CertificateCard
              certificate={certificate}
              handleClickImage={handleClickImage}
              index={index}
            />
          </motion.div>
        ))}
      </ul>
      {clickedImg && (
        <ImageModel
          clickedImg={clickedImg}
          setClickedImg={setClickedImg}
          handleRotation={handleRotation}
        />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}

export default Certificates;
