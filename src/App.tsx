import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import TopBar from "./Topbar/Topbar";
import Home from "./Home/Home";
import Service from "./Service/Service";
import Register from "./Register/Register";
import Booking from "./Booking/Booking";
import Login from "./Login/Login";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";



// import Dashboard from "./ Admin Dashboard/ Admin Dashboard";


function App() {
  return (

    <>
      <TopBar />
      
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/" element={<Service />} />
          <Route path="/booking" element={<Booking />} /> 
          <Route path="/service" element={<Booking />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Footer />} />
          <Route path="/Login" element={<Login />} />
          
          
          
          

        </Routes>
        
        <Footer/>
        {/* <Dashboard/> */}

        </>
    
    
  );
}

export default App;



