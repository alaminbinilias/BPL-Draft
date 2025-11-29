import React from 'react';

const PlayerSelected = ({p,removePlayer}) => {
    //console.log(p);
    const PlyerBtnHnadle=()=>{
        removePlayer(p);
    }

    return (
        <div>
            <div className=' rounded-xl mb-2 p-3 border-2 border-gray-300 flex items-center justify-between'>
                <div className='flex items-center'>
                    <div>
                        <img className='rounded-xl w-[50px] h-[50px]' src={p.player_image} alt="" />
                    </div>
                    <div className='ml-3'>
                        <p className='text-[1.2rem] font-semibold'>{p.player_name}</p>
                        <p className='text-gray-500'>{p.playing_role}</p>
                    </div>
                </div>
                <div onClick={PlyerBtnHnadle}>
                    <img className='cursor-pointer' src="https://i.ibb.co.com/ds16VCpY/Vector.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PlayerSelected;