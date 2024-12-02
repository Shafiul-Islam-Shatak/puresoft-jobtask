import UserLeaderboardCard from "./UserLeaderboardCard";

interface User {
    name: string;
    image: string;
    points: number;
    accuracy_percentage: number;
    previous_accuracy_percentage: number;
}

interface UserLeaderboardProps {
    data: User[];
}
const UserLeaderboard : React.FC<UserLeaderboardProps>= ({data}) => {

    return (
        <div className="py-6 pl-6 bg-white drop-shadow rounded-3xl ">
            <h1>User Leaderboard</h1>
            {
                data.map((item,idx)=>
                    <UserLeaderboardCard
                    key={idx}
                    item={item}
                    idx={idx}
                    />
                )
            }
        </div>
    );
};

export default UserLeaderboard;