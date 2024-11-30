'use client'
import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const TopicFilter = () => {
    const [arrowUP, setArrowUp] = useState<boolean>(false)
    const [selectedTimeframe, setSelectedTimeframe] = useState<string>('All Time')

    const selectOpen = () => {
        setArrowUp(!arrowUP)
    }

    const timeframeOptions = ["Last 7 Days", "This Month", "This Year", "Custom"]

    return (
        <div>
            <div className=" max-w-[365px] bg-white rounded-3xl mt-7">
                <div onClick={selectOpen} className="flex items-center justify-between py-2 px-4 h-12">
                    <h1>Timeframe : {selectedTimeframe}</h1>
                    <div  >
                        <GoTriangleDown className={`${arrowUP ? 'hidden' : ''}`} />
                        <GoTriangleUp className={`${arrowUP ? '' : 'hidden'}`} />
                    </div>
                </div>

                <div>
                    <ul className={`${arrowUP ? '' : 'hidden'} pb-5`}>
                        {timeframeOptions.map((option) => (
                            <li
                                key={option}
                                className="hover:bg-[#1B59F81A] hover:font-bold mx-4 rounded-2xl px-4 py-[10px]"
                                onClick={() => setSelectedTimeframe(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default TopicFilter;