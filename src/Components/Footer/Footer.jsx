import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>hotwheels@gmail.com</p>
          <p>Contact: +19 123456789</p>
        </div>
        
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#search">SEARCH CARS</a></li>
            <li><a href="#popular">POPULAR CARS</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          {/*social media icons*/}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaXTwitter size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright text */}
      <div className="footer-bottom">
        <p>&copy; 2024 SAM PVT LTD BGM & PUNE</p>
      </div>
    </footer>
  );
};

export default Footer;
