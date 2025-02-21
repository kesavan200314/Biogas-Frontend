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
            <h4>For Business</h4>
            <a href="/employer">
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
            <a href="/employer">
              <p>Agricultural Waste</p>
            </a>
            <a href="/healthplan">
              <p> Animal Manure7</p>
            </a>
            <a href="/individual">
              <p> Municipal Solid Waste </p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Partners</h4>
            <a href="/employer">
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
            <Link to="/services"><p>Service</p></Link>
            <Link to="/blog"><p>Blog</p></Link>
          </div>
          <div className="sb-footer-links-div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <a href='https://www.facebook.com/r.php?entry_point=login'> <img src={fb} alt="Facebook"  /></a>
              <a href='https://x.com/i/flow/login'><img src={twitter} alt="Twitter" /></a>
              <a href='https://www.linkedin.com/feed/'><img src={LinkedIn} alt="linkedin"/></a>
              <a href='https://www.instagram.com/'><img src={inst} alt="Instagram" /></a>
            </div>
          </div>
        </div>
        <hr />

        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
            <p>@{new Date().getFullYear()} Minute Magic. All rights reserved.</p>
          </div>
          <div className="sb-footer-below-links">
            <a href="/term">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer