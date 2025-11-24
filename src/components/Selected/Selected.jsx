import React from 'react';

const Selected = ({selectedPlayer}) => {
    return (
        <div className='p-2 w-full md:w-[1200px] mx-auto mt-4 md:p-0'>
            {
                selectedPlayer.map(player=><p>Hello</p>)
            }
        </div>
    );
};

export default Selected;