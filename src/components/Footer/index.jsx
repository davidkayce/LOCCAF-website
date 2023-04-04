import React from "react";
import "./index.scss";
import Logo from "../../assets/images/logo.png";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-con">
      <div className="footer">
        <div className="footer-top">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <h1> CITY CHURCH DISTRICT</h1>
        </div>
        <div className="footer-mid">
          <div className="mid-left">
            <h1>STAY UP TO DATE WITH US</h1>
            <form>
              <input type="email" placeholder="ENTER YOUR EMAIL" id="text" />
              <p></p>
            </form>
          </div>
          <div className="mid-right">
            <div className="locate-city right">
              <h5>LOCATIONS</h5>
              <a href="/">Amsterdam</a>
              <a href="#">Rotterdam</a>
            </div>
            <div className="passion-city right">
              <h5>CITY CHURCH </h5>
              <a href="us">Us</a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdtXPd1CX6lOMDHHrOwqyBwK8pH5dqYTGCrbbguVIWgohNTiA/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Serve
              </a>
              <a href="baptism">Baptism</a>
              <a href="prayer-request">Prayer request</a>
            </div>
            <div className="movement right">
              <h5>PODCAST</h5>
              <a
                href="https://anchor.fm/city-church-district/episodes/The-Cross---Part-2-2-e20amke"
                target="_blank"
                rel="noreferrer"
              >
                The Cross - Part 2.2
              </a>
              <a
                href="https://anchor.fm/city-church-district/episodes/The-Cross---Part-2-e20am3u"
                target="_blank"
                rel="noreferrer"
              >
                The Cross - Part 2
              </a>
              <a
                href="https://anchor.fm/city-church-district/episodes/The-Cross---Part-1-2-e200na8"
                target="_blank"
                rel="noreferrer"
              >
                The Cross - Part 1.2
              </a>
              <a
                href="https://anchor.fm/city-church-district/episodes/The-Cross---Part-1-e200mpp"
                target="_blank"
                rel="noreferrer"
              >
                The Cross - Part 1
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span id="ft-el">
            <p>&copy; 2023 City Church </p>
            <p> District</p>
          </span>
          <span id="ft-el">
            <p href="#">Privacy</p>
            <p href="#">Policy</p>
          </span>
          <span id="ft-el">
            <p href="#">Terms +</p>
            <p href="#">Conditions</p>
          </span>
          <span id="ft-el">
            <p href="#">SMS Terms + </p>
            <p href="#">Conditions</p>
          </span>

          <div className="sm-handles">
            <Link className="youtube handles" to="#" target="_blank">
              <FaYoutube color="#000" />
            </Link>
            <Link className="insta handles" to="#" target="_blank">
              <FaInstagram color="#000" />
            </Link>
            <Link className="facebook handles" to="#" target="_blank">
              <FaFacebook color="#000" />
            </Link>
            <Link className="twitter handles" to="#" target="_blank">
              <FaTwitter color="#000" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
