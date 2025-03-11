import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
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
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get("token")); // Track authentication state

  useEffect(() => {
    const checkAuth = () => setIsAuthenticated(!!Cookies.get("token"));
    window.addEventListener("authChange", checkAuth); // Listen for auth changes
    return () => window.removeEventListener("authChange", checkAuth);
  }, []);

  return (
    <>
      <TopBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/blog" element={<Blog />} />

        {!isAuthenticated && <Route path="/register" element={<Register />} />}
        {!isAuthenticated && <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />}

        {isAuthenticated && <Route path="/login" element={<Navigate to="/" />} />}
        {isAuthenticated && <Route path="/register" element={<Navigate to="/" />} />}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
