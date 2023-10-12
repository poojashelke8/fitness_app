import './App.css';
import Home from './Components/Home/Home';
import Amenities from './Components/Amenities/Amenities';
import About from './Components/aboutUs/About';
import Community from './Components/CommunityServices/Community';

function App() {
  return (
    <div>
      <Home/>
      <Amenities/>
      <About/>
      <Community/>
    </div>
  );
}

export default App;
