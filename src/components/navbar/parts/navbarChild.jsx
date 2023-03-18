import React from 'react';
import Link from './link';

const NavbarChild = () => {
    return (
        <>
            <Link link={'Home'} title={"Home"} />
            <Link link={'upload'} title={'Upload'} />
            <Link link={'search'} title={'Search'} />
            <Link link={'#'} title={'About'} />
            <Link link={'#'} title={'Contact us'} />
            <div className="flex gap-[2px] cursor-pointer hover:opacity-80">
                <svg
                    fill="none"
                    className="text-white w-[30px] h-[30px]"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                </svg>
                <svg
                    fill="none"
                    className="text-white w-[20px] h-[20px]"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                </svg>
            </div>
        </>
    )
}

export default NavbarChild