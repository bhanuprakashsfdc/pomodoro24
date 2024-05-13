import React, { useState } from 'react';
import '../Minifooter/Minifooter.css';
import { colors } from '../../constants/constants';
import { WEBSITE_NAME } from '../../constants/constants'; 
import { TAG_LINE } from '../../constants/constants'; 

import logo from '../../assets/images/logo.png'

function MiniFooter() {
    const [email, setEmail] = useState('');
    const year = new Date().getFullYear();
    const subscribe = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing with ${email}`);
        setEmail(''); // Reset the input field after subscribing
    }

    return (
        <div className="minifooter">
            <div className="footer-content">
                <div className="footer-section about">
                <img src={logo} alt="" className='logo'/>
                    <p>{TAG_LINE}</p>
                    <a href="#">read more</a>
                </div>
                <div className="footer-section links">
                    <div className="section">
                        <h3>Discover</h3>
                        <ul>
                            <li><a href="#">Buy & Sell</a></li>
                            <li><a href="#">Merchant</a></li>
                            <li><a href="#">Giving back</a></li>
                            <li><a href="#">Help & Support</a></li>
                        </ul>
                    </div>
                    <div className="section">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Staff</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="section">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Global</a></li>
                            <li><a href="#">Charts</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                    </div>
                    <div className="section">
                        <h3>Social</h3>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Googleplus</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-section subscribe">
                    <form onSubmit={subscribe}>
                        <input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright ©<span id="year">{year}</span> All rights reserved to {WEBSITE_NAME} | This template is made with ❤ by Bhanu Prakash</p>
            </div>
        </div>
    );
}

export default MiniFooter;
