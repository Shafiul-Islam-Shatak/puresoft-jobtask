'use client'
import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";


const PeopleFilter = () => {
    const [arrowUP, setArrowUp] = useState<boolean>(false)
    const [selectedTimeframe, setSelectedTimeframe] = useState<string>('All Time')
    
    const selectOpen = () => {
        setArrowUp(!arrowUP)
    }
    
    const gourps = ["All Users", "Managers", "Trainers"]
    // const users = ["Adrian Lu", "Evelyn Hamilton"]


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
                        {gourps.map((gourp) => (
                            <li
                                key={gourp}
                                className="hover:bg-[#1B59F81A] hover:font-bold mx-4 rounded-2xl px-4 py-[10px]"
                                onClick={() => setSelectedTimeframe(gourp)}
                            >
                                {gourp}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default PeopleFilter;