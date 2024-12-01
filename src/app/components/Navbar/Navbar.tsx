'use client'

import Image from "next/image";
import { IoMdTrendingUp } from "react-icons/io";
import { BsLightningFill, BsPeopleFill } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                className="text-3xl ml-3 absolute lg:hidden"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <RxHamburgerMenu />
            </button>

            <div
                className={`w-[246px] ${isOpen ? "flex absolute z-20" : "hidden"
                    } lg:flex flex-col items-center py-10 rounded-3xl bg-white justify-between`}
            >
                <div>
                    <Image
                        src="https://i.ibb.co/VQ64WfH/TESLA.png"
                        alt="logo"
                        width={106}
                        height={100}
                    />
                    <button onClick={() => setIsOpen((prev) => !prev)} className="lg:hidden"><RxCross2 className="absolute top-3 right-3 text-2xl"></RxCross2></button>
                    <div className="mt-10">
                        <ul>
                            <li className="flex items-center gap-5 text-lg text-[#1B59F8] bg-[#1B59F81A] w-[193px] py-[14px] pl-5 rounded-xl">
                                <IoMdTrendingUp />
                                Reports
                            </li>
                            <li className="flex items-center gap-5 text-lg w-[193px] py-[14px] pl-5 rounded-xl">
                                <BsLightningFill />
                                Library
                            </li>
                            <li className="flex items-center gap-5 text-lg w-[193px] py-[14px] pl-5 rounded-xl">
                                <BsPeopleFill />
                                People
                            </li>
                            <li className="flex items-center gap-5 text-lg w-[193px] py-[14px] pl-5 rounded-xl">
                                <MdAssignment />
                                Activities
                            </li>
                        </ul>
                    </div>
                    <div className="w-[193px] mt-10 pl-5">
                        <h1>Support</h1>
                        <ul>
                            <li className="flex items-center gap-5 text-lg py-[14px] rounded-xl">
                                <PiLightbulbFilamentFill />
                                Get Started
                            </li>
                            <li className="flex items-center gap-5 text-lg py-[14px] rounded-xl">
                                <FaGear />
                                Settings
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-[193px] mt-10">
                    <hr />
                    <div>
                        <Image
                            className="mt-8"
                            src="https://i.ibb.co/rHNS0zG/Photo-1.png"
                            alt="avatar"
                            width={34}
                            height={34}
                        />
                        <h1 className="mt-2 font-semibold">Sam Wheeler</h1>
                        <h1 className="mt-2 text-[#00000080] text-sm">
                            samwheeler@example.com
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
