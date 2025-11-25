import { Suspense, useState } from 'react';
import './App.css'
import Navber from './components/Navber/Navber'
import Available from './components/Able/Available';
import ForAll from './components/ForAll/ForAll';
import Selected from './components/Selected/Selected';
const Playerfetch = async () => {
  const PlayerData = await fetch('/player.json');
  return PlayerData.json();
}

const PlayerPromise = Playerfetch();
//  console.log(PlayerPromise);


function App() {
  const [toggle, setToggle] = useState(true);
  const [available, setavailable] = useState(6000000);
  const [selectedPlayer, setselectedPlayer] = useState([]);
  //console.log(selectedPlayer);
  return (
    <>
      <Navber available={available}></Navber>

      <ForAll selectedPlayer={selectedPlayer} setToggle={setToggle} toggle={toggle}></ForAll>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
          <Available selectedPlayer={selectedPlayer} setselectedPlayer={setselectedPlayer} available={available} setavailable={setavailable} PlayerPromise={PlayerPromise}></Available>
        </Suspense> : <Selected selectedPlayer={selectedPlayer}></Selected>
      }
    </>
  )
}

export default App
