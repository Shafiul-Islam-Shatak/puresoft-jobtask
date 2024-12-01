import GroupLeaderboardCard from "./GroupLeaderboardCard";

interface Group {
    name: string;
    image: string;
    points: number;
    accuracy_percentage: number;
    previous_accuracy_percentage: number;
}

interface GroupLeaderboardProps {
    data: Group[];
}
const GroupLeaderboard : React.FC<GroupLeaderboardProps>= ({data}) => {
console.log(data);

    return (
        <div className="py-6 pl-6 bg-white drop-shadow rounded-3xl ">
            <h1>Groups Leaderboard</h1>
            {
                data.map((item,idx)=>
                    <GroupLeaderboardCard
                    key={idx}
                    item={item}
                    idx={idx}
                    />
                )
            }
        </div>
    );
};

export default GroupLeaderboard;