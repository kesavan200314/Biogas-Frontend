




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About/About";
import TopBar from "./Topbar/Topbar";
import Home from "./Home/Home";
import Service from "./Service/Service";
import Register from "./Register/Register";
import Booking from "./Booking/Booking";
import Login from "./Login/Login";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>

      
      <Service/>
      <Blog/>
      <Footer/>
    </Router>
    
    
  );
}

export default App;



