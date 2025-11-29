import { Suspense, useState } from 'react';
import './App.css'
import { ToastContainer} from 'react-toastify';
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
  const removePlayer=(p)=>{
    //console.log(p);
    const fltrData=selectedPlayer.filter(ply=>ply.player_name!==p.player_name);
    //console.log(fltrData);
    setselectedPlayer(fltrData);
    setavailable(available+p.price)
  }
  const AddPlayer=(p)=>{
    setToggle(p);
  }
  return (
    <>
      <Navber available={available}></Navber>

      <ForAll selectedPlayer={selectedPlayer} setToggle={setToggle} toggle={toggle}></ForAll>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
          <Available selectedPlayer={selectedPlayer} setselectedPlayer={setselectedPlayer} available={available} setavailable={setavailable} PlayerPromise={PlayerPromise}></Available>
        </Suspense> : <Selected AddPlayer={AddPlayer} removePlayer={removePlayer} selectedPlayer={selectedPlayer}></Selected>
      }
      <ToastContainer/>
    </>
  )
}

export default App
