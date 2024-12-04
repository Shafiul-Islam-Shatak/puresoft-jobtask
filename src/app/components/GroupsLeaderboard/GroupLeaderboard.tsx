// GroupLeaderboard.tsx

import GroupLeaderboardCard from "./GroupLeaderboardCard";

interface Group {
  name: string;
  image: string;
  points: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
  group_name :string,
  points_per_user:number

}

interface GroupLeaderboardProps {
  data: Group[];
}

const GroupLeaderboard: React.FC<GroupLeaderboardProps> = ({ data }) => {
  return (
    <div className="py-6 pl-6 bg-white drop-shadow rounded-3xl ">
      <h1>Groups Leaderboard</h1>
      {data.map((item, idx) => (
        <GroupLeaderboardCard
          key={idx}
          item={{
            group_name: item.group_name,
            points_per_user: item.points_per_user,
            accuracy_percentage: item.accuracy_percentage,
            previous_accuracy_percentage: item.previous_accuracy_percentage,
          }}
          idx={idx}
        />
      ))}
    </div>
  );
};

export default GroupLeaderboard;
