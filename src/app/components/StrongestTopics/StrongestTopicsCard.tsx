'use-client'

import Image from "next/image"
import StongestProgressBar from "./StongestProgressBar";

interface StrongestTopicsCardProps {
    item: any
}

const StrongestTopicsCard: React.FC<StrongestTopicsCardProps> = ({ item }) => {


    return (
        <div className="flex items-center mb-8 mt-7 ">
            <div>
                <Image
                    alt={item.name}
                    src={item.image}
                    height={50}
                    width={50}
                >
                </Image>
            </div>
            <div className="ml-4">
                <h1 className="font-semibold">{item.name}</h1>
                <div className="flex items-center space-x-3">
                    <StongestProgressBar value={item.correct_percentage}/>
                    <h1>{item.correct_percentage}% <span className="text-[#000000B3]">Correct</span></h1></div>
            </div>
        </div>
    );
};

export default StrongestTopicsCard;