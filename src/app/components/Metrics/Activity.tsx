import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { IoIosArrowDown } from "react-icons/io";


interface DataItem {
  month: string;
  value: number;
}

interface ActivityProps {
  data: DataItem[]; 
}

const Activity: React.FC<ActivityProps> = ({ data }) => {

  return (
    <div className={`bg-white px-5 rounded-3xl py-4 max-h-[322px] mt-5 drop-shadow `}>
        <div className='flex items-center justify-between'>
            <h1>Activity</h1>
            <div className='flex items-center'><h1>Monthly</h1><IoIosArrowDown className='ml-2'/></div>
        </div>
        <hr className='mt-2'/>
      <ResponsiveContainer width="100%" height={250} className={`mt-5`} >
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis className='uppercase text-xs border-none' dataKey="month" scale="point" padding={{ left: 10, right: 10 }} axisLine={false}  tickLine={false}/>
          <YAxis 
          axisLine={false}  
          tickLine={false} />
          <Tooltip />
          
          <Bar 
           shape={(props: any) => (
            <rect
              {...props}
              rx={10}  
              ry={10}  
            />
          )}
           dataKey="value" fill="#1B59F8CC" background={{ fill: '#F2F7FF'} } />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;

