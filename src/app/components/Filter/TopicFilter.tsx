'use client'
import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const TopicFilter = () => {
    const [arrowUP, setArrowUp] = useState<boolean>(false)
    const [selectedTopis, setSelectedTopics] = useState<string>('All')

    const selectOpen = () => {
        setArrowUp(!arrowUP)
    }

    const topisOptions = ["Weakest Topics", "Strongest Topics"]

    return (
        <div>
            <div className=" max-w-[365px] bg-white rounded-3xl mt-7 relative">
                <div onClick={selectOpen} className="flex items-center justify-between py-2 px-4 h-12">
                    <h1>Topic : {selectedTopis}</h1>
                    <div  >
                        <GoTriangleDown className={`${arrowUP ? 'hidden' : ''}`} />
                        <GoTriangleUp className={`${arrowUP ? '' : 'hidden'}`} />
                    </div>
                </div>

                <div className="absolute z-50 bg-white w-11/12 left-5 rounded-b-3xl drop-shadow-sm top-9">
                    <ul className={`${arrowUP ? '' : 'hidden'} pb-5`}>
                        {topisOptions.map((option) => (
                            <li
                                key={option}
                                className="hover:bg-[#1B59F81A] hover:font-bold mx-4 rounded-2xl px-4 py-[10px]"
                                onClick={() => setSelectedTopics(option)}
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