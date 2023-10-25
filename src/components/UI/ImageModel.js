import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ImageModal = ({ clickedImg, setClickedImg, handleRotation }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="modal-container bg-white p-8 rounded-lg shadow-lg relative w-full max-w-screen-md">
        <span
          className="dismiss absolute top-4 right-4 cursor-pointer text-blue-600 font-bold "
          onClick={handleClick}
        >
          &times;
        </span>
        <div className="w-full h-full mb-4 relative">
          <Image
            src={clickedImg}
            alt="bigger pic"
            layout="responsive"
            width={1200}
            height={800}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative items-center flex justify-between mt-6">
          <MdChevronLeft
            size={40}
            className="bg-black text-white  left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10"
            onClick={() => handleRotation("left")}
          />
          <MdChevronRight
            size={40}
            className="bg-black text-white  right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10"
            onClick={() => handleRotation("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
