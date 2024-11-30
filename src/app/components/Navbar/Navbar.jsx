'use client'

import Image from "next/image";
import { IoMdTrendingUp } from "react-icons/io";
import { BsLightningFill, BsPeopleFill } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";




const Navbar = () => {

    return (
        <div className="w-[246px] h-screen  flex flex-col items-center py-10 rounded-3xl bg-white justify-between">

            <div>
                <Image
                    src={'https://i.ibb.co/VQ64WfH/TESLA.png'}
                    alt="logo"
                    width={106}
                    height={100}
                ></Image>
                <div className="mt-10">
                    <ul>
                        <li className="flex items-center gap-5 text-lg text-[#1B59F8] bg-[#1B59F81A] w-[193px] py-[14px] pl-5 rounded-xl"><IoMdTrendingUp />Reports</li>
                        <li className="flex items-center gap-5 text-lg  w-[193px] py-[14px] pl-5 rounded-xl"><BsLightningFill />Library</li>
                        <li className="flex items-center gap-5 text-lg  w-[193px] py-[14px] pl-5 rounded-xl"><BsPeopleFill />People</li>
                        <li className="flex items-center gap-5 text-lg  w-[193px] py-[14px] pl-5 rounded-xl"><MdAssignment />Activities</li>

                    </ul>
                </div>
                <div className=" w-[193px] mt-10 pl-5">
                    <h1>Support</h1>
                    <ul>
                        <li className="flex items-center gap-5 text-lg   py-[14px]  rounded-xl "><PiLightbulbFilamentFill />Get Started</li>
                        <li className="flex items-center gap-5 text-lg   py-[14px]  rounded-xl"><FaGear />Settings</li>
                    </ul>
                </div>
            </div>


            <div className=" w-[193px] mt-10 ">
                <hr />
                <div>
                    <Image
                        className="mt-8"
                        src={'https://i.ibb.co/rHNS0zG/Photo-1.png'}
                        alt="avater"
                        width={34}
                        height={34}>
                    </Image>
                    <h1 className='mt-2 font-semibold '>Sam Wheeler</h1>
                    <h1 className='mt-2 text-[#00000080] text-sm'>samwheeler@example.com</h1>
                </div>
            </div>

        </div>
    );
};

export default Navbar;