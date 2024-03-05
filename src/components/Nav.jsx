import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Education", link: "/Education" },
    { name: "Experience", link: "/Experience" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-black">
          <div className="flex text-2xl cursor-pointer items-center gap-2 fill-yellow-700">
            <img
              src="DOMINIQUELEV-white.avif"
              alt="logo"
              className="h-3 md:h-4 my-2"
            />
          </div>

          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-yellow-400"
          >
            {open ? <HiX /> : <HiMenu />}
          </div>

          <ul className=" hidden md:flex">
            {Links.map((link, index) => (
              <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-yellow-400 duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {open ? (
            <ul
              className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 justify-end md:z-auto z-[-1] left-0 w-full transition-all bg-black text-yellow-600 duration-500 ease-in ${
                open ? "top-12" : "-top-[-490]"
              } `}
            >
              {Links.map((link, index) => (
                <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-yellow-400 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Nav;
