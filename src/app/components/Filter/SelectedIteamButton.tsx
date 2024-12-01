import { RxCross2 } from "react-icons/rx";

const SelectedIteamButton = ({selectedIteam  , handleDeleteSelected}) => {
    return (
        <div className="flex items-center space-x-2 py-2 px-3 w-fit bg-[#F0F0F0] rounded-3xl">
            <h1 className="font-semibold">{selectedIteam}</h1>
            <button onClick={()=>handleDeleteSelected(selectedIteam)}><RxCross2/></button>
        </div>
    );
};

export default SelectedIteamButton;