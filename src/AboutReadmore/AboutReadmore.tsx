// import React, { useState } from "react";
// import "./About.css";
// import { Link } from "react-router-dom";  // Import Link from React Router

// // Image imports
// import image1 from "../assets/Vijay_Kesa_bio_gas_image_1d2c0898-3cb5-41d8-bb1d-b2de796a2dbb.png";
// import image2 from "../assets/Vijay_Kesa_bio_gas_image_44c5db23-83ca-4acb-80d4-784f2ec7353b.png";
// import image3 from "../assets/Vijay_Kesa_bio_gas_image_6a988443-4626-4f38-948b-c8f110922572.png";
// import image4 from "../assets/Vijay_Kesa_bio_gas_waste_product_image_3355e444-25d0-4555-a132-b6a76ba21980.png";

// const images = [image1, image2, image3, image4];

// const About: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="about-container">
//       {/* Image Slider First */}
//       <div className="image-slider">
//         <button className="arrow left" onClick={prevImage}>&#10094;</button>
//         <img src={images[currentIndex]} alt="Slideshow" className="slider-image" />
//         <button className="arrow right" onClick={nextImage}>&#10095;</button>
//       </div>

//       <div className="text-container">
//         <h2>About Us</h2>
//         <p>
//           The European Biogas Association (EBA) is committed to the deployment 
//           of sustainable biogas and biomethane production and use across the continent.
//         </p>
        
//         {/* Link for Read More button */}
//         <Link to="/about-details">
//           <button className="read-more">Read More</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default About;
