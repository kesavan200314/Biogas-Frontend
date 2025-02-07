import  { useEffect, useState } from "react";
import "./Home.css";

import image1 from "../assets/Vijay_Kesa_bio_gas_waste_product_image_3355e444-25d0-4555-a132-b6a76ba21980.png";
import image2 from "../assets/greenhouse-6226263.jpg";
import image3 from "../assets/cow-9357663.jpg";
import image4 from "../assets/Vijay_Kesa_bio_gas_image_1d2c0898-3cb5-41d8-bb1d-b2de796a2dbb.png";
import image5 from "../assets/Vijay_Kesa_bio_gas_image_44c5db23-83ca-4acb-80d4-784f2ec7353b.png";
import image6 from "../assets/Vijay_Kesa_bio_gas_waste_product_image_8e678ec8-b30f-45eb-b813-d72933b9087f.png";
import image7 from "../assets/Vijay_Kesa_bio_gas_waste_product_image_3355e444-25d0-4555-a132-b6a76ba21980.png";
import image8 from "../assets/Vijay_Kesa_bio_gas_waste_product_image_e71910c4-5f80-4c2d-b85a-e67a3992935d.png";
import image9 from "../assets/Vijay_Kesa_biogas_installation_related_image_0b11cf57-f023-4362-8c0c-2a7520362913.png";
import image10 from "../assets/Vijay_Kesa_biogas_installation_related_image_9fe79e0c-fae6-4ac9-be3b-127c25b613b1.png";


const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
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
     
      <img src={images[currentIndex]} alt="Slideshow" className="home-image" />
      <div>
        
      </div>
    
</div>
  );
};

export default Home;