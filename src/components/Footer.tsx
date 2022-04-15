import React from 'react';
import stamp from '../assets/images/stamp.png';
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from 'react-icons/ri';

const Footer: React.FC = () => {
  const year = new Date().getFullYear() - 3;
  return (
    <footer className="footer">
      <div className="top">
        <div className="container">
          <div className="footer-content">
            <img className="stamp" src={stamp} alt="alt" />
            <div className="footer-item">
              <a href="./">About us</a>
              <a href="./">Become a Partner</a>
              <a href="./">FAQ</a>
            </div>
            <div className="footer-item">
              <a href="./">Imprint</a>
              <a href="./">Terms & Conditions</a>
              <a href="./">Privacy Policy</a>
            </div>
            <div className="footer-item">
              <a href="mailto:support@snubes.com">support@snubes.com</a>
              <a href="tel:+4903055645327">+49 (0) 305 5645327</a>
              <div className="socials">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiFacebookFill />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiTwitterFill />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiLinkedinFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>&copy; {year} Snubes GmbH All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
