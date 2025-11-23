import React from 'react';
import navlogo from "../../assets/logo.png";
import doller from '../../assets/dollar-1.png';

const Navber = () => {
    return (
        <div className="navbar w-full md:w-[1200px] mx-auto">
            <div className="flex-1">
                <img src={navlogo} alt="Logo Not Found" />
            </div>
            <div className="flex">
                <span  className='mr-1 font-medium'>600000000</span>
                <span className='mr-1 font-medium'>coins</span>
                <img src={doller} alt="CoinsImg Not Found" />
            </div>
        </div>
    );
};

export default Navber;