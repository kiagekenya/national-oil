import React from 'react'
import { Link } from 'react-router-dom';


import './all.css'
import LOGO from '../../assets/nock j.png'
const All = () => {
 
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <span className="nav-logo">
            <img src={LOGO} alt="logo" />
            <p>ENERGIZING KENYA</p>
          </span>
          <div className="navbar-links">

          <ul>
      <li>
        <Link to="/signup"  className="report">Admin</Link>
        </li>
      
    </ul>
          </div>
        </div>
      </nav>

      <div className="main">
  <div className="main__container">
    <ul>
      <li>
        <Link to="/checkin"  className="in">CHECK IN</Link>
        </li>
      <li>
        <Link to="/checkout" className="out">CHECK OUT</Link>
        </li>
    </ul>
  </div>
</div>

      <div className="footer__container">
        <div className="social__media">
          <div className="social__media--wrap">
            <div className="footer__logo">
              <a href="/" id="footer__logo" className="fas faa gem">National Oil Corporation</a>
            </div>
            <p className="website__rights">© National Oil Corporation 2023. All rights reserved</p>
            <div className="social__icons">
              <a href="https://www.facebook.com/NationalOilKE/" className="social__icon--link" >
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/nationaloilke/?hl=en" className="social__icon--link" >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/NationalOilKE?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="social__icon--link" >
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/national-oil-corporation-of-kenya/?originalSubdomain=ke" className="social__icon--link" >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default All