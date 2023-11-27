import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./LandingPage.css";
import fb from "../../images/facebook-logo.svg";
import instagram from "../../images/instagram-logo.svg";
import youtube from "../../images/youtube-logo.svg";
import twitter from "../../images/twitter-logo.svg";
import hamburger from "../../images/hamburger-icon.svg";
import logo from "../../images/logo-3.PNG.jpg";

const LandingPage = () => {
  return (
    <div className="main-body">
      <header>
        <nav class="container">
          {/* <p class="logo">Eval8Hub</p> */}
          <img src={logo} width={"250px"} />
          {/* <ul class="primary-nav">
            <li class="nav-item">
              <a href="#">Features</a>
            </li>
            <li class="nav-item ">
              <a href="#">Solutions</a>
            </li>
            <li class="nav-item ">
              <a href="#">Resources</a>
            </li>
            <li class="nav-item ">
              <a href="#">Pricing</a>
            </li>
          </ul> */}
          <ul class="login-nav">
            <li class="nav-item" onClick={() => console.log("clicked")}>
            <Button className="sign-in">
              <Link to="sign-in">Log In</Link>
            </Button>
            </li>
            <li class="nav-item">
              {/* <a href="#" class="primary-button">
                Sign Up
              </a> */}
              <Button className="sign-up" type="primary">
              Sign Up
              </Button>
            </li>
          </ul>
          <img class="mobile-nav" src={hamburger} alt="Mobile Menu" />
        </nav>
      </header>
      <main className="main-page">
        <div id="box1"></div>
        <div class="main-content">
          <h1>
            Evaluation system in <span>AI</span>
          </h1>
          <p className="main-paragraph">
            Eval8Hub is an AI-powered skills, knowledge assessment software &
            open source platform for evaluating.
          </p>
        </div>
      </main>
      <footer class="container">
        <ul class="footer-socials">
          <li>
            <a href="#">
              <img src={fb} alt="facebook-logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="instagram-logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={youtube} alt="youtube-logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter-logo" />
            </a>
          </li>
        </ul>
        <ul class="footer-links">
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookie Preference</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default LandingPage;
