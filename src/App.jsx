import { Suspense, useState } from 'react';
import './App.css'
import Navber from './components/Navber/Navber'
import Available from './components/Able/Available';
import Selected from './components/Selected/Selected';

const Playerfetch = async () => {
  const PlayerData = await fetch('/player.json');
  return PlayerData.json();
}

const PlayerPromise = Playerfetch();
//  console.log(PlayerPromise);


function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Navber></Navber>



      <div className=' p-2 w-full md:w-[1200px] mx-auto mt-4'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-bold text-[1.2rem]'>Available Players</p>
          </div>
          <div>
            <button onClick={()=>setToggle(true)} className={`btn border-r-0 px-5 py-2 ${toggle === true ? "bg-[#eaff29]" : ""}`}>Available</button>
            <button onClick={()=>setToggle(false)} className={`btn border-l-0 px-5 py-2 ${toggle === false ? "bg-[#eaff29]" : ""}`}>Selected</button>
          </div>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
          <Available PlayerPromise={PlayerPromise}></Available>
        </Suspense> : <Selected></Selected>
      }
      {/* <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
        <Available PlayerPromise={PlayerPromise}></Available>
      </Suspense>
      <Selected></Selected> */}
    </>
  )
}

export default App
