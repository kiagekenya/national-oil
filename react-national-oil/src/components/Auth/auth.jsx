import React, { useState } from 'react';
import axios from 'axios';





const Auth = () => {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegistration = async () => {
    try {
      const response = await axios.post('/api/register', { name, email, password });
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
};


  return (
    <div>
    <nav className="navbar">
      <div className="navbar__container">
        <span className="nav-logo">
          <img src="./images/nock j.png" alt="logo" />
          <p>ENERGIZING KENYA</p>
        </span>
      </div>
    </nav>

    <div className="main">
      <div className="container">
        <div className="box">
          <h1 id="title">Sign Up</h1>
          <form>
            <div className="input-group">
              <div className="input-fields" id="nameField">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="input-fields">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input-fields">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <p>
                Lost password <a href="#">Click here!</a>
              </p>
            </div>
            <div className="btn-fields">
            <button onClick={handleRegistration}>Sign up</button>
              <button type="button" id="signInBtn" className="disable">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="footer__container">
      <div className="social__media">
        <div className="social__media--wrap">
          <div className="footer__logo">
            <a href="/" id="footer__logo" className="fas faa gem">
              National Oil Corporation
            </a>
          </div>
          <p className="website__rights">© National Oil Corporation 2023. All rights reserved</p>
          <div className="social__icons">
            <a href="https://www.facebook.com/NationalOilKE/" className="social__icon--link" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/nationaloilke/?hl=en" className="social__icon--link" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/NationalOilKE?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              className="social__icon--link"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/national-oil-corporation-of-kenya/?originalSubdomain=ke"
              className="social__icon--link"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Auth