import './App.css';
import Aside from './components/aside/Aside';
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home';
function App() {

  return (
    <div className='wrapper'>
      <SideBar />
      <Home />
      <Aside />
    </div>

  );
}

export default App;
