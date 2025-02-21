import React, { useState } from 'react';
import './Booking.css'; 
import { useBooking } from '../Backend/Bookingcontext';
import { useNavigate } from 'react-router-dom';


const Booking: React.FC = () => {
  const [number, setNumber] = useState<string>('');
  const [product, setProduct] = useState<string>('');
  const [product_Name, setProductName] = useState<string>('');
 const navigate = useNavigate();
  const { createBooking } = useBooking()

  // Sample product data
  const products = [
    { id: '1', name: '500L Tank biogas fitting', models: ['with waste product Biogas', 'without waste product Biogas'] },
    { id: '2', name: '1000L Tank biogas fitting', models: ['without waste product Biogas', 'with waste product Biogas'] },
  ];

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProduct = e.target.value;
    setProduct(selectedProduct);
    setProductName(''); 
  };



  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();

      const response = createBooking(number, product, product_Name,);
        setNumber(''),
        setProduct(''),
        setProductName('')

      console.log('Booking successful:', response);
      navigate('/')
      // Optionally, show a success message or handle further logic
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      // Handle error (e.g., show error message to the user)
    }
  };

  const selectedProductData = products.find((p) => p.name === product);

  return (
    <div className="booking-form-container">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="product">Product:</label>
          <select
            id="product"
            value={product}
            onChange={handleProductChange}
            required
          >
            <option value="">Select a product</option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <select
            id="productName"
            value={product_Name}
            onChange={(e) => setProductName(e.target.value)}
            required
            disabled={!product}
          >
            <option value="">Select a model</option>
            {selectedProductData?.models.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Booking;
