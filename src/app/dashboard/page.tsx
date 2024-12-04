'use client'
import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import { IoMdDownload } from "react-icons/io";
import TimeframeFilter from '../components/Filter/TimeframeFilter';
import PeopleFilter from '../components/Filter/PeopleFilter';
import TopicFilter from '../components/Filter/TopicFilter';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { GridLoader } from 'react-spinners';
import Metrics from '../components/Metrics/Metrics';
import Activity from '../components/Metrics/Activity';
import WeakestTopics from '../components/WeakestTopics/WeakestTopics';
import StrongestTopics from '../components/StrongestTopics/StrongestTopics';
import UserLeaderboard from '../components/UserLeaderboard/UserLeaderboard';
import GroupLeaderboard from '../components/GroupsLeaderboard/GroupLeaderboard';



const DashboardPage = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axios.get('/task-data.json')
            return res.data
        }
    })

    if (isLoading) {
        return <div className='h-screen flex justify-center items-center '> <GridLoader color="#918484" />
        </div>
    }

    const handleDownload = async () => {
        
        try {
            const res = await axios.post('/api/imageDownload',
                {
                    api: data.api_secret
                }, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )

            const base64string = res.data.base64_string
            const filename = res.data.filename

            // convert to blob
            const byteChars = atob(base64string)
            const byteArry = new Uint8Array(byteChars.length)
            
            for(let i=0 ; i<byteChars.length ; i++){
                byteArry[i] = byteChars.charCodeAt(i)
            }

            // create blob object from the bytearry
            const blob = new Blob([byteArry] , { type: 'application/octet-stream' })

            const URL = window.URL.createObjectURL(blob)
            
            // download
            const downloadLink = document.createElement('a');
            downloadLink.href =URL;
            downloadLink.download=filename;
            downloadLink.click()
            
            // to relese
            window.URL.revokeObjectURL(URL)
        }
        catch(err){
            console.log("post error" , err);
            
        }
    }

    return (
        <div className='flex max-w-[1440px] mx-auto'>
            {/* left side bar */}
            <Navbar></Navbar>

            {/* header section */}
            <div className='flex-1 px-8 mt-4 '>
                <div className='flex justify-between py-2 items-center '>
                    <h1 className='text-2xl font-bold'>Reports</h1>
                    <button onClick={handleDownload}><h1 className='flex items-center'><IoMdDownload />Download</h1></button>
                </div>
                <hr className='mt-9' />

                {/* data filter section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <TimeframeFilter />
                    <PeopleFilter />
                    <TopicFilter />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 '>
                    {/* metrics */}
                    <div><Metrics data={data?.metrics} /></div>
                    <div><Activity data={data?.activity.monthly} /></div>
                    <div><WeakestTopics data={data?.topics.weakest} /></div>
                    <div><StrongestTopics data={data?.topics.strongest} /></div>
                    <div><UserLeaderboard data={data?.user_leaderboard} /></div>
                    <div><GroupLeaderboard data={data?.groups_leaderboard} /></div>
                </div>



            </div>
        </div>
    );
};

export default DashboardPage;