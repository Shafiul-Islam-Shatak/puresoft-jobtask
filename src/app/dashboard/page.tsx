import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import { IoMdDownload } from "react-icons/io";
import TimeframeFilter from '../components/Filter/TimeframeFilter';
import PeopleFilter from '../components/Filter/PeopleFilter';
import TopicFilter from '../components/Filter/TopicFilter';

const page = () => {
    return (
        <div className='flex'>
            <Navbar></Navbar>
            <div className='flex-1 px-8 mt-4 '>
                <div className='flex justify-between py-2 items-center '>
                    <h1 className='text-2xl font-bold'>Reports</h1>
                    <h1 className='flex items-center'><IoMdDownload />Download</h1>
                </div>
                <hr className='mt-9' />
                <div className='grid grid-cols-3'>
                    <TimeframeFilter />
                    <PeopleFilter/>
                    <TopicFilter/>
                </div>
            </div>
        </div>
    );
};

export default page;