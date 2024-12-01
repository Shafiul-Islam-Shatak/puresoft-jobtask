'use client'
import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import SelectedIteamButton from "./SelectedIteamButton";


const PeopleFilter = () => {
    const [arrowUP, setArrowUp] = useState<boolean>(false)
    const [isMultiple, setIsMultiple] = useState<boolean>(false)
    const [selected, setSelected] = useState<Array<string>>([])

    const selectOpen = () => {
        setArrowUp(!arrowUP)
    }

    const gourps = ["All Users", "Managers", "Trainers"]
    const users = ["Adrian Lu", "Evelyn Hamilton"]

    const handleGroupSelection = (gourp: string) => {
        const isExist = selected.find((iteam) => iteam === gourp)
        if (!isExist) {
            setSelected((prev) => [...prev, gourp])
            if (selected.length > 0) {
                setIsMultiple(true)
            }
        }
    }

    const handleDeleteSelected = (item :string) => {
        const remaining = selected.filter((i)=> i !== item)
        setSelected(remaining)
    }


    return (
        <div>
            <div className=" max-w-[365px] bg-white rounded-3xl mt-7">
                <div onClick={selectOpen} className="flex items-center justify-between py-2 px-4 h-12">
                    <h1>People: {isMultiple ? 'Multiple Selected' : 'All'}</h1>
                    <div  >
                        <GoTriangleDown className={`${arrowUP ? 'hidden' : ''}`} />
                        <GoTriangleUp className={`${arrowUP ? '' : 'hidden'}`} />
                    </div>
                </div>
                {/* Group Selection */}
                <div>
                    <ul className={`${arrowUP ? '' : 'hidden'} pb-5  `}>
                        {/* slected item display */}
                        {
                            selected.length > 0 ?
                                <div className="flex flex-wrap items-center gap-3 mb-4 max-w-11/12 mx-auto   ">
                                    {selected.map(((item, idx) => <SelectedIteamButton key={idx} selectedIteam={item}  handleDeleteSelected={handleDeleteSelected}/>))}
                                </div> : ''
                        }
                        {/* search box */}
                        <div className="relative  ">
                            <input
                                className="px-4 py-2 rounded-md w-full pl-[40px] outline-none "
                                placeholder="Search..." />
                            <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem]  text-[#adadad]" />
                        </div>

                        <hr className="mb-4 w-11/12 mx-auto" />

                        {/* group selection input */}
                        <h1 className="uppercase font-semibold text-[#9098A3] text-sm ml-8">GROUPS</h1>
                        {gourps.map((gourp) => (
                            <li
                                key={gourp}
                                className="hover:bg-[#1B59F81A] hover:font-bold mx-4 rounded-2xl px-4 py-[10px]"
                                onClick={() => handleGroupSelection(gourp)}
                            >
                                <label className="label cursor-pointer flex items-center space-x-3">
                                    <input type="radio" />
                                    <span className="label-text">{gourp}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* user Selection input*/}
                <div>
                    <ul className={`${arrowUP ? '' : 'hidden'} pb-5`}>
                        <hr className="mb-4 w-11/12 mx-auto" />
                        <h1 className="uppercase font-semibold text-[#9098A3] text-sm ml-8">users</h1>
                        {users.map((user) => (
                            <li
                                key={user}
                                className="hover:bg-[#1B59F81A] hover:font-bold mx-4 rounded-2xl px-4 py-[10px]"
                                onClick={() => handleGroupSelection(user)}
                            >
                                <label className="label cursor-pointer flex items-center space-x-3">
                                    <input type="radio" />
                                    <span className="label-text">{user}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default PeopleFilter;