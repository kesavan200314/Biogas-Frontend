import React, { useState } from 'react';
import './Booking.css'; // Import the CSS file

const Booking: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [product, setProduct] = useState<string>('');
  const [productName, setProductName] = useState<string>('');

  // Sample product data
  const products = [
    { id: '1', name: '6 month biogas', models: ['with waste product Biogas', 'without waste product Biogas'] },
    { id: '2', name: '1 year Biogas', models: ['without waste product Biogas', 'with waste product Biogas'] },
  ];

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProduct = e.target.value;
    setProduct(selectedProduct);
    setProductName(''); // Reset product name when product changes
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ name, number, product, productName });
  };

  const selectedProductData = products.find((p) => p.name === product);

  return (
    <div className="booking-form-container">
      <div className="booking-image">
        {/* <img src="https://via.placeholder.com/150" alt="Booking" /> */}
      </div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
            value={productName}
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