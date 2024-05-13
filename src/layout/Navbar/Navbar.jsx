import React, {useEffect, useState} from 'react'
/* import { Link } from 'react-router-dom'; */
import './Navbar.css'
import { colors } from '../../constants/constants';

import logo from '../../assets/images/logo.png';
import menu_icon from '../../assets/icons/menu-icon.png';


const navbar = () => {
  /* Onclick on menu navigate to section */
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[]);
  /* Display humbergericon on click hide menu bar */
  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = ()=>{
    mobileMenu? setMobileMenu(false):setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
      <li>Home</li>
        <li> Services</li>
        <li> About Us</li>
        <li> Gallery</li>
        <li> Testimonials</li>
        <li> <button> Contact Us</button></li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon nav_contact_box' onClick={toogleMenu}/>
    </nav>
  )
}

export default navbar
