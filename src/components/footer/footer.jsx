import React from 'react';
import './footer.css';
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png';
import instagram from '../../images/instagram.png';
import youtube from '../../images/youtube.png';
import copyright from '../../images/copyright.png';

const Footer = () => {
    return (
    <footer className="footer">
      <div>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="" className='logo'/>
            <p className='footer-logo-text'>Subsy Cart</p>
          </div>
          <div className='purchase-what-you-love'>
            <span>Purchase What You Love</span>
          </div>
        </div>
        <div className='footer-sub-content'>
          <div className="footer-links">
            <h3>CONTENT</h3>
            <ul>
              <li><a href="/home" className='links'>Home</a></li>
              <li><a href="/products/smartphones" className='links'>Smart Phones</a></li>
              <li><a href="/products/laptops" className='links'>Laptops</a></li>
              <li><a href="/products/groceries" className='links'>Groceries</a></li>
              <li><a href="/products/home-decoration" className='links'>Home Decorations</a></li>
              <li><a href="/products/fragrances" className='links'>Fragrances</a></li>
            </ul>
          </div>
          <div className='footer-company'>
            <h3>COMPANY</h3>
            <ul>
              <li><a href="/home" className='links'>About US</a></li>
              <li><a href="/home" className='links'>Contact US</a></li>
              <li><a href="/home" className='links'>Terms & Conditions</a></li>
              <li><a href="/home" className='links'>Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>SOCIAL MEDIA</h3>
            <div className="social-icons">
              <a href="/"><img className="instagram" src={instagram} alt=""></img></a>
              <a href="/"><img className="facebook" src={facebook} alt=""></img></a>
              <a href="/"><img className="youtube" src={youtube} alt=""></img></a>
              <a href="/"><img className="linkedin" src={linkedin} alt=""></img></a>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
            Copyright 
            <img src={copyright} alt="" width="20px" height="20px" className='copyright'></img>
            2023. Subsy Cart All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;