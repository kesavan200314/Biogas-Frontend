
import "./Blog.css";

// Import images directly
import biogasPlants from "../assets/Vijay_Kesa_bio_gas_waste_product_image_e71910c4-5f80-4c2d-b85a-e67a3992935d.png";
import biomethane from "../assets/Vijay_Kesa_biogas_installation_related_image_0b11cf57-f023-4362-8c0c-2a7520362913.png";
import energyManagement from "../assets/Vijay_Kesa_bio_gas_waste_product_image_3355e444-25d0-4555-a132-b6a76ba21980.png";
import referenceCustomers from "../assets/Vijay_Kesa_biogas_installation_related_image_9fe79e0c-fae6-4ac9-be3b-127c25b613b1.png";
import service from "../assets/Vijay_Kesa_bio_gas_image_44c5db23-83ca-4acb-80d4-784f2ec7353b.png";
import investorRelations from "../assets/Vijay_Kesa_bio_gas_image_1d2c0898-3cb5-41d8-bb1d-b2de796a2dbb.png";

const blogData = [
  {
    title: "BIOGAS PLANTS",
    description: "Learn more about our system solutions for agriculture and industry.",
    image: biogasPlants,
  },
  {
    title: "BIOMETHANE",
    description: "Learn more about our highly efficient and flexible gas treatment technology: EnviThan©",
    image: biomethane,
  },
  {
    title: "ENERGY MANAGEMENT",
    description: "We offer you solutions for marketing the biogas or biomethane produced.",
    image: energyManagement,
  },
  {
    title: "REFERENCE CUSTOMERS",
    description: "Active in 16 countries, EnviTec has installed more than 577 MWel worldwide.",
    image: referenceCustomers,
  },
  {
    title: "SERVICE",
    description: "Biological and technical service for your biogas plant as an all-round carefree service.",
    image: service,
  },
  {
    title: "INVESTOR RELATIONS",
    description: "Here we provide information about the EnviTec Biogas share and our business development.",
    image: investorRelations,
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">OUR SERVICE SPECTRUM FOR YOU</h2>
      <div className="blog-grid">
        {blogData.map((item, index) => (
          <div key={index} className="blog-card">
            <img src={item.image} alt={item.title} className="blog-image" />
            <div className="blog-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {/* <a href="#" className="learn-more">
                LEARN MORE <span>→</span>
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
