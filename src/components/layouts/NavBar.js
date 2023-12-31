"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiCertificateFill } from "react-icons/pi";
import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "projects", path: "/projects", icon: <HiRectangleGroup /> },
  {
    name: "certificates",
    path: "/certificates", // Replace with your actual path
    icon: <PiCertificateFill />, // Use the FaCertificate icon
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

function NavBar() {
  const pathname = usePathname();
  return (
    <nav className=" flex flex-col items-center xl:justify-center gap-y-2 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md  xl:h-screen">
      <div className="text-black dark:text-white flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-slate-300 dark:bg-white/10  backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full ">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              }  relative flex items-center group hover:text-accent transition-all duration-300`}
              key={index}
              href={link.path}
            >
              {/*tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className=" bg-black dark:bg-white relative flex text-white dark:text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/*triangle*/}
                  <div className="border-solid border-l-black dark:border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/*icons*/}
              <div className=""> {link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBar;
