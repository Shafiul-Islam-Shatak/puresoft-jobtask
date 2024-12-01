import StrongestTopicsCard from "./StrongestTopicsCard";

interface StrongestData {
    name: string,
    image: string
    correct_percentage: number
}
interface StrongestTopicsProps {
    data : StrongestData[]
}
const StrongestTopics : React.FC<StrongestTopicsProps>= ({data}) => {
console.log(data);

    return (
        <div className="py-6 pl-6 bg-white drop-shadow rounded-3xl ">
            <h1>Strongest Topics</h1>
            {
                data.map((item,idx)=>
                    <StrongestTopicsCard
                    key={idx}
                    item={item}
                    />
                )
            }
        </div>
    );
};

export default StrongestTopics;