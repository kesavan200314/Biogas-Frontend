import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import fb from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import LinkedIn from '../assets/linkedin.png';
import inst from '../assets/instagram.png';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className="sb-footer-section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>for Business</h4>
            <a >
              <p>Biogas</p>
            </a>
            {/* <a href="/healthplan">
              <p>Health Plan</p>
            </a> */}
            {/* <a href="/individual">
              <p>Individual</p>
            </a> */}
          </div>
          <div className="sb-footer-links-div">
            <h4>Resources</h4>
            <a >
              <p>Agricultural Waste</p>
            </a>
            <a >
              <p> Animal Manure7</p>
            </a>
            <a >
              <p> Municipal Solid Waste </p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Partners</h4>
            <a >
              <p>Minute Magic</p>
            </a>
          </div>
          {/* <div className="sb-footer-links-div">
            <h4>category</h4>
            <a href="/about">
              <p>Home</p>
            </a>
            <a href="/press">
              <p>About</p>
            </a>
            <a href="/career">
              <p>Service</p>
            </a>
            <a href="/contact">
              <p>Blog</p>
            </a>
          </div> */}
           <div className="sb-footer-links-div">
            <h4>Category</h4>
            <Link to="/"><p>Home</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/service"><p>Services</p></Link>
            <Link to="/blog"><p>Blog</p></Link>
          </div>
          <div className="sb-footer-links-div">
          <h4 className="coming-soon">Coming soon on</h4>
            <div className="socialmedia">
              <a href='https://www.facebook.com/r.php?entry_point=login'> <img src={fb} alt="Facebook"  /></a>
              <a href='https://x.com/i/flow/login'><img src={twitter} alt="Twitter" /></a>
              <a href='https://www.linkedin.com/feed/'><img src={LinkedIn} alt="linkedin"/></a>
              <a href='https://www.instagram.com/'><img src={inst} alt="Instagram" /></a>
            </div>
          </div>
        </div>
        <hr />

       
        
      </div>
    </div>
  );
};

export default Footer