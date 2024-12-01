import WeakestTopicsCard from "./WeakestTopicsCard";

interface WeakestTopicsProps {
    data : Array
}
const WeakestTopics : React.FC<WeakestTopicsProps>= ({data}) => {
console.log(data);

    return (
        <div className="py-6 pl-6 bg-white drop-shadow rounded-3xl ">
            <h1>Weakest Topics</h1>
            {
                data.map((item,idx)=>
                    <WeakestTopicsCard
                    key={idx}
                    item={item}
                    />
                )
            }
        </div>
    );
};

export default WeakestTopics;