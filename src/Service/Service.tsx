

import "./Service.css";

// Import images
 import img1 from "../assets/Vijay_Kesa_bio_gas_image_44c5db23-83ca-4acb-80d4-784f2ec7353b.png";
 import img2 from "../assets/Vijay_Kesa_bio_gas_image_1d2c0898-3cb5-41d8-bb1d-b2de796a2dbb.png";

// Biogas Bids Data
const bids = [
  { id: 1, duration: "6 Months", price: 200000, details: "Biogas service for 6 months", image: img1 },
  { id: 2, duration: "1 Year", price: 400000, details: "Biogas service for 1 year", image: img2 }
];

function Service() {
  return (
    <div className="service-container">
      <h2>Biogas Service</h2>
      <h4>My Service Details</h4>

      <div className="gallery-wrapper">
        {bids.map((bid) => (
          <div key={bid.id} className="gallery-item">
            <a target="_blank" href={bid.image} rel="noopener noreferrer">
              <img src={bid.image} alt={bid.duration} />
            </a>
            <div className="desc">
              <h3>{bid.duration} - RS={bid.price}</h3>
              <p>{bid.details}</p>
              <button className="bid-button">Place Bid</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;



