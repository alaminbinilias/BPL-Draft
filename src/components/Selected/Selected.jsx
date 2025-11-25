import React from 'react';
import PlayerSelected from '../PlayerSelected/PlayerSelected';
const Selected = ({ selectedPlayer }) => {
    //console.log(selectedPlayer);
    return (
        <div className='p-2 w-full md:w-[1200px] mx-auto mt-4 md:p-0'>
            {
                selectedPlayer.map(p=><PlayerSelected p={p}></PlayerSelected>)
            }
            <div>
                <button className='Add More p-2 border-2 border-gray-400 bg-[#eaff29] cursor-pointer rounded-2xl'>Add More</button>
            </div>
        </div>
    );
};

export default Selected;