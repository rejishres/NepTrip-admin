import React from 'react';
import FooterStyles from './FooterStyles';

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer-content">
        <div className="footer-logo">
          <h1>NepTrip</h1>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 NepTrip</p>
          <p>Contact us: info@neptrip.com</p>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
