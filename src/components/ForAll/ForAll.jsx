import React from 'react';

const ForAll = ({setToggle,toggle}) => {
    return (
        <div>

            <div className='p-2 w-full md:w-[1200px] mx-auto mt-4 md:p-0'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='font-bold text-[1.2rem]'>Available Players</p>
                    </div>
                    <div>
                        <button onClick={() => setToggle(true)} className={`btn border-r-0 px-5 py-2 ${toggle === true ? "bg-[#eaff29]" : ""}`}>Available</button>
                        <button onClick={() => setToggle(false)} className={`btn border-l-0 px-5 py-2 ${toggle === false ? "bg-[#eaff29]" : ""}`}>Selected</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ForAll;