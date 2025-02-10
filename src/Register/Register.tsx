

import React, { useState } from 'react';
import './Register.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../Backend/auathcontext';

const Register: React.FC = () => {

  const { register } = UseAuth();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const navigate = useNavigate();  
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        register(username, email, password);
        setUsername('');
        setPassword('');
        setEmail('');
        navigate('/');
    };

  function setName(_value: string): void {
    throw new Error('Function not implemented.');
    console.log(setName)
  }

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
