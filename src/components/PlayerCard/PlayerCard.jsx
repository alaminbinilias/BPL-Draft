import { useState } from 'react';
import playerIconLogo from '../../assets/report-1.png'
import flag from '../../assets/user-1.png'
import { toast } from 'react-toastify';



const PlayerCard = ({Player, setavailable, available,selectedPlayer,setselectedPlayer }) => {


    const[isSelected ,setisSelected]=useState(false);

    const btnhandle = (Player) => {
        //console.log(Player);
        const price = Player.price;
        //console.log(price)
        if (available < price) {
            toast("Insufficient Balance");
            setisSelected(false);
            return;
        }
        if(selectedPlayer.length===6){
            toast("Already Six Plyer is Now Available");
            setisSelected(false);
            return;
        }
        setavailable(available - price);
        toast("Player Selected");
        setselectedPlayer([...selectedPlayer,Player]);
    }
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img className='px-3 pt-3 rounded-3xl  md:h-[300px] w-full object-cover'
                    src={Player.player_image} />
            </figure>
            <div className="card-body -ml-1.5">
                <div className='flex mb-2 items-center'>
                    <img className='mr-2' src={playerIconLogo} alt="" />
                    <p className='font-semibold text-[1.2rem]'>{Player.player_name}</p>
                </div>

                <div className='border-b-2 border-gray-100 pb-3  flex justify-between items-center'>
                    <div className='flex items-center ml-1.5'>
                        <img className='mr-4 mt-3 w-6.5' src={flag} alt="Flag Image Not Found" />
                        <p className='text-[1.3rem] text-gray-400'>{Player.player_country}</p>
                    </div>
                    <div>
                        <button className='btn px-4 rounded-[11px] '>{Player.playing_role}</button>
                    </div>
                </div>

                <div>

                    <div className='flex justify-between items-center mb-2'>
                        <p className='font-bold text-[1.3rem]'>Rating</p>
                        <span className='font-medium text-[1.3rem]'>{Player.rating}</span>
                    </div>

                    <div className='flex justify-between items-center mb-2'>
                        <p className='font-bold text-[1.3rem]'>Batting Style</p>
                        <span className='font-medium text-[1.3rem]'>{Player.batting_style}</span>
                    </div>

                    <div className='flex justify-between items-center mb-2'>
                        <p className='font-bold text-[1.3rem]'>Bowling Style</p>
                        <span className='font-medium text-[1.3rem]'>{Player.bowling_style}</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-[1.3rem]'>Price: <span>${Player.price}</span></p>
                        <button onClick={() => { setisSelected(true)
                            btnhandle(Player) }} disabled={isSelected} className='btn py-1 px-5 rounded-[11px] '>{isSelected === false ? "Choose Player" : "Selected"}</button>
                    </div>


                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;