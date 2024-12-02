'use-client'

import Image from "next/image"
import GradientProgressBar from "./GradientProgressBar"

interface WeakestTopicsCardProps {
    item: any
}

const WeakestTopicsCard: React.FC<WeakestTopicsCardProps> = ({ item }) => {


    return (
        <div className="flex flex-col xl:flex-row xl:items-center space-y-3 xl:space-y-0 mb-8 mt-7 ">
            <div>
                <Image
                    alt={item.name}
                    src={item.image}
                    height={32}
                    width={49}
                >
                </Image>
            </div>
            <div className="ml-4">
                <h1 className="font-semibold">{item.name}</h1>
                <div className="flex flex-col xl:flex-row items-center space-x-3">
                    <GradientProgressBar value={item.correct_percentage}/>
                    <h1>{item.correct_percentage}% <span className="text-[#000000B3]">Correct</span></h1></div>
            </div>
        </div>
    );
};

export default WeakestTopicsCard;