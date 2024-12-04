'use-client'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";


interface GroupLeaderboardCardItem {
    group_name: string;
    points_per_user: number;
    accuracy_percentage: number;
    previous_accuracy_percentage: number;
  }
  
  interface GroupLeaderboardCardProps {
    item: GroupLeaderboardCardItem; 
    idx: number;
  }
  
const GroupLeaderboardCard: React.FC<GroupLeaderboardCardProps> = ({ item, idx }) => {

    const userImprove = item.accuracy_percentage > item.previous_accuracy_percentage;

console.log(item);

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center mb-8 mt-7 ">
                <div className="ml-4">
                    <h1 className="font-semibold">{item.group_name}</h1>
                    <div className="flex items-center space-x-1 text-[#000000B3] text-xs">
                        <h1>{item.points_per_user} Points / User</h1>
                        <span>-</span>
                        <h1>{item.accuracy_percentage}% <span className="text-[#000000B3]">Correct</span></h1>
                    </div>

                </div>
            </div>
            <div className="mr-5 flex items-center justify-center ">
                <h2>{idx + 1}</h2>
                {
                    userImprove ?
                        <div><IoMdArrowDropup className="text-3xl text-green-500" /></div> :
                        <div><IoMdArrowDropdown className="text-3xl text-red-500" /></div>
                }
            </div>
        </div>
    );
};

export default GroupLeaderboardCard;