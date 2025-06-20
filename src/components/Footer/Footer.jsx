import React from 'react';
import Line1_1 from '../Line1_1/Line1_1.jsx';
import './Footer.css';

const Footer = () => {
  return (
    <div className="component-2">
      <div className="frame-20">
        <div className="frame-21">
          <div className="text-wrapper-25">Privacy Policy</div>
        </div>

        <div className="frame-21">
          <div className="text-wrapper-25">Terms of Use</div>
          <Line1_1 className="line-1" />
        </div>

        <div className="frame-21">
          <div className="text-wrapper-25">Contact Us</div>
          <Line1_1 className="line-1" />
        </div>

        <div className="frame-21">
          <div className="text-wrapper-25">DTCC.com</div>
          <Line1_1 className="line-1" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
