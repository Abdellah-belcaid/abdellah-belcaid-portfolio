import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge animate-pulse z-10 w-[200px] xl:w-[300px] opacity-40 dark:opacity-50">
      <Image src="/images/top-left-img-1.png" width={300} height={300} alt="" />
    </div>
  );
};

export default TopLeftImg;
