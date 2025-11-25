import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';


const Available = ({PlayerPromise,available,setavailable,selectedPlayer,setselectedPlayer }) => {
    //console.log(PlayerPromise);
    const PlayerData = use(PlayerPromise);
    //console.log(PlayerData);
    return (
        <div className=' w-full md:w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
            {
                PlayerData.map(Player => <PlayerCard selectedPlayer={selectedPlayer} setselectedPlayer={setselectedPlayer} Player={Player} available={available} setavailable={setavailable}></PlayerCard>)
            }
        </div>
    );
};

export default Available;