import Image from "next/image";

const Bulb = () => {
  return (
    <div className="fixed -left-36 -bottom-12 rotate-12  mix-blend-color-dodge animate-pulse duration-75  z-10 w-[200px] xl:w-[260px]  ">
      <Image
        src={"/images/bulb.png"}
        width={260}
        height={200}
        alt=""
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
