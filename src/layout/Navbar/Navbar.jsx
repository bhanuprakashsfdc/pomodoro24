import React, {useEffect, useState} from 'react'
/* import { Link } from 'react-router-dom'; */
import './Navbar.css'
import { colors } from '../../constants/constants';
/* Pages */
import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Pomodoro from '../../pages/Pomodoro';
import Clock from '../../pages/Clock';
import Calender from '../../pages/Calender';
import Ipaddress from '../../pages/Ipaddress';
/* Images */
import logo from '../../assets/images/logo.png';
import menuIcon from '../../assets/icons/menu-icon.png';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
};

  return (
    <Router>
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="logo" className="logo" />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pomodoro">Pomodoro</Link></li>
            <li><Link to="/clock">Clock</Link></li>
            <li><Link to="/calender">Calender</Link></li>
            <li><Link to="/what-is-my-ipaddress">Ip Address</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <img src={menuIcon} alt="Menu Icon" className="menu_icon nav_contact_box" onClick={toggleMenu} />
    </nav>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/what-is-my-ipaddress" element={<Ipaddress />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
</Router>
);
}

export default navbar
