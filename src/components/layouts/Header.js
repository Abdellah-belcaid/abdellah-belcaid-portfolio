import Link from "next/link";
import Socials from "../Socials";

const Header = () => {
  return (
    <header className="mb-8 md:mb-0">
      <div className="absolute z-30 w-full flex items-center px-4 xl:px-0 xl:h-16 border-b-2 border-b-[#33353F] ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 py-4">
            {/* Logo Text */}
            <Link href="/">
              <span className="text-2xl font-bold text-white">Belcaid</span>
            </Link>
            {/* Socials */}
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
