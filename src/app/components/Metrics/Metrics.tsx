import { CiCircleInfo } from "react-icons/ci";

interface MetricsProps {
  data: any;
}
const Metrics : React.FC<MetricsProps> = ({ data }) => {
    console.log(data);

    const answeredQuestions = new Intl.NumberFormat('en-US').format(data?.questions_answered)

    // time formation
    const time = data?.average_session_length_seconds
    const timeSecToMints =(time:number)=>{
        const mint = Math.ceil(time/60)
        const remainSec = time % 60
        return `${mint}m ${remainSec}s`
    }

    return (
        <div className="grid grid-cols-3   rounded-3xl ">
            {/* 1st block */}
            <div className="max-w-[170px]  drop-shadow bg-white rounded-2xl pl-4 pt-4 mt-5">
                <h1 className="text-[#000000B3] text-sm">{'Active Users'}</h1>
                <h1 className="font-semibold text-2xl mt-6">{data?.active_users.current}<span className="text-[#00000080] text-xs">/{data?.active_users.total}</span></h1>
            </div>
            {/* 2nd block */}
            <div className="max-w-[170px] h-[150px] drop-shadow bg-white rounded-2xl pl-4 pt-4 mt-5">
                <h1 className="text-[#000000B3] text-sm">{'Questions Answered'}</h1>
                <h1 className="font-semibold text-2xl mt-6">{answeredQuestions}</h1>
            </div>
            {/* 3rd block */}
            <div className="max-w-[170px] h-[150px] drop-shadow bg-white rounded-2xl pl-4 pt-4 mt-5">
                <h1 className="text-[#000000B3] text-sm">{'Av. Session Length'}</h1>
                <h1 className="font-semibold text-2xl mt-6">{timeSecToMints(time)}</h1>
            </div>
            {/* 4th block */}
            <div className="max-w-[170px] h-[150px] drop-shadow bg-white rounded-2xl pl-4 pt-4 mt-5">
                <h1 className="text-[#000000B3] flex items-center text-sm">{'Starting Knowledge'} <CiCircleInfo className='ml-1'/></h1>
                <h1 className="font-semibold text-2xl mt-6">{data?.starting_knowledge_percentage}%</h1>
            </div>
            {/* 5th block */}
            <div className="max-w-[170px] h-[150px] drop-shadow bg-white rounded-2xl pl-4 pt-4 mt-5">
                <h1 className="text-[#000000B3] text-sm">{'Current Knowledge'}</h1>
                <h1 className="font-semibold text-2xl mt-6">{data?.current_knowledge_percentage}%</h1>
            </div>
            {/* 6th block */}
            <div className="max-w-[170px] h-[150px] drop-shadow bg-white rounded-2xl pl-4 pt-4 mt-5">
                <h1 className="text-[#000000B3] text-sm">{'Knowledge Gain'}</h1>
                <h1 className="font-semibold text-2xl mt-6">+{(data?.current_knowledge_percentage)-(data?.starting_knowledge_percentage)}%</h1>
            </div>
            
        </div>
    );
};

export default Metrics;