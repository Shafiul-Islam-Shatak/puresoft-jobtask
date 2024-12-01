'use-client'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

import Image from "next/image"
import { useState } from "react";

interface UserLeaderboardCardProps {
    item: {
        name: string;
        image: string;
        points: number;
        accuracy_percentage: number;
        previous_accuracy_percentage: number;
    },
    idx:number
}

const UserLeaderboardCard: React.FC<UserLeaderboardCardProps> = ({ item , idx}) => {

    const userImprove = item.accuracy_percentage > item.previous_accuracy_percentage;


    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center mb-8 mt-7 ">
                <div>
                    <Image
                        className="rounded-full"
                        alt={item.name}
                        src={item.image}
                        height={50}
                        width={50}
                    >
                    </Image>
                </div>
                <div className="ml-4">
                    <h1 className="font-semibold">{item.name}</h1>
                    <div className="flex items-center space-x-1 text-[#000000B3] text-xs">
                        <h1>{item.points} Points</h1>
                        <span>-</span>
                        <h1>{item.accuracy_percentage}% <span className="text-[#000000B3]">Correct</span></h1>
                    </div>

                </div>
            </div>
            <div className="mr-5 flex items-center justify-center ">
                <h2>{idx+1}</h2>
                {
                    userImprove ? 
                    <div><IoMdArrowDropup className="text-3xl text-green-500"/></div> :
                    <div><IoMdArrowDropdown className="text-3xl text-red-500"/></div>
                }
            </div>
        </div>
    );
};

export default UserLeaderboardCard;