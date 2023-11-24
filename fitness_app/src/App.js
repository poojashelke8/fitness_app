import './App.css';
import Home from './Components/Home/Home';
import Amenities from './Components/Amenities/Amenities';
import About from './Components/aboutUs/About';
import Community from './Components/CommunityServices/Community';
import Blogs from './Components/Blogs/Blogs';
import Contact_enquiry from './Components/Contact/Contact_enquiry';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Amenities />
      <About />
      <Community />
      <Blogs />
      <Contact_enquiry />
    </div>
  );
}

export default App;
