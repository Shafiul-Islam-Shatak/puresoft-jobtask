import UserLeaderboardCard from "./UserLeaderboardCard";

interface UserLeaderboardProps {
    data : Array
}
const UserLeaderboard : React.FC<UserLeaderboardProps>= ({data}) => {
console.log(data);

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