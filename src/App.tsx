import { useState } from 'react';
import './App.css';
import Aside from './components/aside/Aside';
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home';
function App() {

  const [position, setPosition] = useState<number>(0);

  const hanbleClick = (pos : number) => {
    console.log("ASDASDSAD")
    setPosition(pos);
  }

  return (
    <div className='wrapper'>
      <SideBar position={position} handleClick={hanbleClick}/>
      <Home />
      <Aside />
    </div>

  );
}

export default App;
