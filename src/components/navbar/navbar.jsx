import React, { useState } from "react";
import NavbarChild from "./parts/navbarChild";
import Link from "./parts/link";
import { useLocation } from "react-router-dom";

const Navbar = ({ isAuth }) => {
    const [toggleNavbar, settoggleNavbar] = useState(false);
    const location = useLocation();

    function isArtist() {
        if (
          location.pathname === "/artists/1" ||
          location.pathname === "/artists/2" ||
          location.pathname === "/artists/3" ||
          location.pathname === "/artists/1/" ||
          location.pathname === "/artists/2/" ||
          location.pathname === "/artists/3/"
        ) {
          return true;
        } else {
          return false;
        }
      }

    return (
        <div
            style={{ zIndex: 1000 }}
            className={`${isAuth && isArtist() ? "fixed" : "relative"
                } bg-black py-4 h-max text-white flex justify-between items-center px-3 w-full`}
        >
            <h2 className="text-[32px]">famcloud</h2>
            {toggleNavbar ? (
                <svg
                    onClick={() => settoggleNavbar(false)}
                    fill="white"
                    className="cursor-pointer hover:opacity-80 lg:hidden block w-[40px] h-[40px]"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                </svg>
            ) : (
                <svg
                    onClick={() => settoggleNavbar(true)}
                    fill="none"
                    className="cursor-pointer hover:opacity-80 lg:hidden block text-white w-[40px] h-[40px]"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    ></path>
                </svg>
            )}

            <div className="hidden gap-12 lg:flex">
                {location.pathname === "/artists" ? <>
                    <Link link={'#'} title={"Home"} />
                    <Link link={'#'} title={'News'} />
                    <Link link={'#'} title={'Music'} />
                    <Link link={'#'} title={'Free'} />
                    <Link link={'#'} title={'About'} />
                </> : <NavbarChild />}
            </div>

            <div
                className={`flex flex-col gap-12 absolute w-full items-center justify-center h-max bg-black top-[80px] ${toggleNavbar ? "translate-y-[0%]" : "translate-y-[-150%]"
                    } ease-in duration-300 left-0 py-4`}
            >
                {location.pathname === "/artists" ? <>
                    <Link link={'#'} title={"Home"} />
                    <Link link={'#'} title={'News'} />
                    <Link link={'#'} title={'Music'} />
                    <Link link={'#'} title={'Free'} />
                    <Link link={'#'} title={'About'} />
                </> : <NavbarChild />}
            </div>
        </div>
    );
};

export default Navbar;
