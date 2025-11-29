import React from 'react';
import PlayerSelected from '../PlayerSelected/PlayerSelected';
const Selected = ({ selectedPlayer,removePlayer,AddPlayer}) => {
    //console.log(selectedPlayer);
    const AddPlayerHandle=()=>{
        AddPlayer(true);
    }
    return (
        <div className='p-2 w-full md:w-[1200px] mx-auto mt-4 md:p-0'>
            {
                selectedPlayer.map(p=><PlayerSelected removePlayer={removePlayer} p={p}></PlayerSelected>)
            }
            <div>
                <button onClick={AddPlayerHandle} className='Add More p-2 border-2 border-gray-400 bg-[#eaff29] cursor-pointer rounded-2xl'>Add More</button>
            </div>
        </div>
    );
};

export default Selected;