import { Suspense } from 'react';
import './App.css'
import Navber from './components/Navber/Navber'
import Available from './components/Able/Available';

const Playerfetch = async () => {
  const PlayerData = await fetch('/player.json');
  return PlayerData.json();
}

const PlayerPromise = Playerfetch();
//  console.log(PlayerPromise);

function App() {
  return (
    <>
      <Navber></Navber>
      <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
        <Available PlayerPromise={PlayerPromise}></Available>
      </Suspense>
    </>
  )
}

export default App
