import './App.css';
import Home from './Components/Home/Home';
// import Amenities from './Components/Amenities/Amenities';
import About from './Components/aboutUs/About';
// import Community from './Components/CommunityServices/Community';
import Blogs from './Components/Blogs/Blogs';
import Contact_enquiry from './Components/Contact/Contact_enquiry';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';
import Classes from './Components/Home/Classes';
import Team from './Components/Home/Team';
import CommPages from './Components/CommunityServices/CommPages';
import Footer from './Components/Contact/Footer';
// import BlogsMain from './Components/Blogs/BlogsMain';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Classes" element={<Classes />} />
        <Route path="team" element={<Team />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="about" element={<About />} />

        <Route path="community/:testId" element={<CommPages />} />
        {/* <Route path="blogs" element={<Blogs />} /> */}

      </Routes>
      <Footer/>
      {/* <Contact_enquiry /> */}
      {/* <Amenities /> */}
      {/* <About />
      <Community />
      <Blogs />
      <Contact_enquiry /> */}
    </div>
  );
}

export default App;
