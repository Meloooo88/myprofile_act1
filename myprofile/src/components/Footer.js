import React from 'react';

const footerContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'auto',
  width: '100%',
};

const footerStyle = {
  padding: '1rem',
  textAlign: 'center',
  backgroundColor: '#000000',
  color: '#ffffff',
  width: '100%',
  maxWidth: '100%',
  borderRadius: '8px',
};

const Footer = () => {
  return (
    <div style={footerContainer}>
      <footer style={footerStyle}>
        © {new Date().getFullYear()} Adiel Mhelo Brosoto. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
