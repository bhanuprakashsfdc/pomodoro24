import React from 'react'
import '../../App.css';
import './Footer.css';
import { colors } from '../../constants/constants';
import { WEBSITE_NAME } from '../../constants/constants'; 

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <p>© <span id="year">{year}</span> {WEBSITE_NAME} All rights reserved. Built by Anuhya Digital </p>
        <ul>
            <li> Terms of Services</li>
            <li> Privacy Policy</li>
        </ul>
    </div>
  );
}

export default Footer
