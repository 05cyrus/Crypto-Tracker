  import React, {useRef, useContext } from 'react';
  import './Navbar.css';
  import logo from "../../assets/newlogo.png";
  import arrow_icon from "../../assets/arrow_icon.png";
  import { CoinContext } from '../../context/CoinContext';
  import { Link } from 'react-router-dom';
  import { FaBars, FaTimes } from 'react-icons/fa';

  function Navbar() {
    const { setCurrency } = useContext(CoinContext);
    const navRef = useRef();
    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    }
    const currencyHandler = (event) => {
      switch (event.target.value) {
        case "usd":
          setCurrency({ name: "usd", symbol: "$" });
          break;
        case "eur":
          setCurrency({ name: "eur", symbol: "€" });
          break;
        case "inr":
          setCurrency({ name: "inr", symbol: "₹" });
          break;
        default:
          setCurrency({ name: "usd", symbol: "$" });
          break;
      }
    };

    return (
      <div className='navbar'>
        <Link to={`/`}>
          <img src={logo} alt='' className='logo' />
        </Link>
        <ul ref={navRef}>
          <li onClick={showNavbar}><Link to={`/`}> Home</Link></li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes /></button>
        </ul>
        <button className='nav-btn' onClick={showNavbar}><FaBars /></button>
        <div className="nav-right">
          <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>
          <button>Sign up <img src={arrow_icon} alt=''/></button>
        </div>
      </div>
    );
  }

  export default Navbar;
