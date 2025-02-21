

import { useNavigate } from "react-router-dom";
import "./Service.css";

// Import images
import img1 from "../assets/DALL·E 2025-02-13 08.57.25 - A high-definition image of a Sri Lankan 500-liter and 100-liter plastic tank. The tanks are cylindrical, durable, and designed for water or biogas sto.webp";
import img2 from "../assets/DALL·E 2025-02-13 08.57.34 - A high-definition image of a Sri Lankan 1000-liter plastic tank. The tank is cylindrical, durable, and designed for water or biogas storage. It is pla.webp";

// Biogas Bids Data
const bids = [
  { id: 1, duration: "500L Tank Biogas", price: 76000, details: "Biogas service for Life Time", image: img1 },
  { id: 2, duration: "1000L Tank Biogas", price: 100000, details: "Biogas service for Life Time", image: img2 }
];

function Service() {
  const navigate = useNavigate();

  const handleBidClick = (id: number) => {
    navigate(`/bid/${id}`);
  };

  //  Add Function for Booking Button
  const handleBookingClick = () => {
    navigate("/booking"); //  Navigate to Booking Page
  };

  return (
    <div className="service-container">
      <h2>Biogas Service</h2>
      <h4>My Service Details</h4>

      <div className="gallery-wrapper">
  {bids.map((bid) => (
    <div key={bid.id} className="gallery-item">
      <img src={bid.image} alt={bid.duration} />
      <div className="desc">
        <h3>{bid.duration} - {bid.price} </h3>
        <p>{bid.details}</p>
        <button className="bid-button" onClick={() => handleBidClick(bid.id)}>Place Bid</button>
      </div>
    </div>
  ))}
</div>

      {/* Fix: Add onClick event for Booking Button */}
      <button className="custom-button" onClick={handleBookingClick}>
        <span>Booking</span>
      </button>
    </div>
  );
}

export default Service;

  