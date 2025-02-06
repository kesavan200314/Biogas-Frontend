
import React, { useState } from "react";
import "./About.css";

import image1 from "../assets/Vijay_Kesa_bio_gas_image_1d2c0898-3cb5-41d8-bb1d-b2de796a2dbb.png";
import image2 from "../assets/Vijay_Kesa_bio_gas_image_44c5db23-83ca-4acb-80d4-784f2ec7353b.png";
import image3 from "../assets/Vijay_Kesa_bio_gas_image_6a988443-4626-4f38-948b-c8f110922572.png";
import image4 from "../assets/Vijay_Kesa_bio_gas_waste_product_image_3355e444-25d0-4555-a132-b6a76ba21980.png";
import image5 from "../assets/Vijay_Kesa_bio_gas_waste_product_image_4c819db2-95f0-430c-be98-7072e15d6674.png";
import image6 from "../assets/Vijay_Kesa_bio_gas_waste_product_image_8e678ec8-b30f-45eb-b813-d72933b9087f.png";
import image7 from "../assets/Vijay_Kesa_bio_gas_waste_product_image_e71910c4-5f80-4c2d-b85a-e67a3992935d.png";
import image8 from "../assets/Vijay_Kesa_biogas_installation_related_image_0b11cf57-f023-4362-8c0c-2a7520362913.png";
import image9 from "../assets/Vijay_Kesa_biogas_installation_related_image_9fe79e0c-fae6-4ac9-be3b-127c25b613b1.png";
import image10 from "../assets/carrots-2106825.jpg";

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
const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="image-slider">
        <button className="arrow left" onClick={prevImage}>&#10094;</button>
        <img src={images[currentIndex]} alt="Slideshow" className="slider-image" />
        <button className="arrow right" onClick={nextImage}>&#10095;</button>
      </div>
      <div className="About-Deatails">
          <div className="About">
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis debitis vel laboriosam. Suscipit sed dolorem praesentium porro ducimus natus earum at? Quos, doloremque at aut fugit tenetur ab corrupti rem?</p>
          </div>
      </div>
    </div>
    
  );
};

export default About;

