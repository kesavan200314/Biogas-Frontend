import  { useEffect, useState } from "react";
import "./Home.css";

import image1 from "../assets/Vijay_Kesa_bio_gas_image_1d2c0898-3cb5-41d8-bb1d-b2de796a2dbb.png";



const images = [
  image1,
  
];





const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 5) % images.length);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    }, 5000); // Change image every 500 milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
     <div className="imagehome">
      <img src={images[currentIndex]} alt="Slideshow" className="home-image" />
      </div>
      <div className="Home-content">
        <h2>Biogas for a Sustainable Future</h2>
      <h5 >
          Welcome to Green Energy! We specialize in biogas solutions <br/>that turn 
          waste into energy. Our services include biogas <br/>plant installation, 
          maintenance, and sustainable energy solutions.
        </h5>
        {/* <button className="learn-more">Learn More</button> */}
        </div>
     <div className="Home-content">
     <img src={images[currentIndex]} alt="Biogas" className="home-image" />
     </div>
</div>
  );
};

export default Home;
