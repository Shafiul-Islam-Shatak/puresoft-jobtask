import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import { IoMdDownload } from "react-icons/io";
import TimeframeFilter from '../components/Filter/TimeframeFilter';

const page = () => {
    return (
        <div className='flex'>
            <Navbar></Navbar>
            <div className='flex-1 px-8 mt-4 '>
                <div className='flex justify-between py-2 items-center '>
                    <h1 className='text-2xl font-bold'>Reports</h1>
                    <h1 className='flex items-center'><IoMdDownload/>Download</h1>
                </div>
                <hr className='mt-9'/>

                <TimeframeFilter/>
            </div>
        </div>
    );
};

export default page;