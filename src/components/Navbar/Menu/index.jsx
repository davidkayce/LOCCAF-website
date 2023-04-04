import React, { useState, useEffect } from "react";
import Thumb2 from "../../../assets/images/thumb2.jpg";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../../assets/images/logo.png";
import { useGlobalContext } from "../../../context";

import "./index.scss";

const Menu = () => {
  const {setOpenMenu} = useGlobalContext()
  const [hover, setHover] = useState(false);

  return (
    <div className="menu-modalCon">
      <div className="overlay"></div>
      <div className="modal">
        <div className="menu-top">
          <div className="top-left">
            <Link to="/" onClick={() => setOpenMenu(false)}>
              <img src={Logo} alt="" />
            </Link>
            {/* <div className="left-search">
                        <FontAwesomeIcon icon={faSearch} id='search'/>
                        <input type="text" placeholder='SEARCH PASSION'/>
                    </div> */}
          </div>

          <div className="top-right">
            <button onClick={() => setOpenMenu(false)}>CLOSE</button>
          </div>
        </div>
        <div className="menu-body">
          <div className="body-left">
            <h2>FEATURED</h2>
            <img src={Thumb2} alt="" />
            <div className="left-bot">
              <h5> THE CROSS PART 1.1</h5>
              <h5 id="blue"> ELDER DANIEL OWUSU</h5>
              <h5>02.13.23</h5>
            </div>
          </div>
          <div className="body-right">
            <div className="logo1-con">
              <Link className="logo1" to="/">
                CITY CHURCH DISTRICT
              </Link>
              <div
                className="dropdown"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <button className="drop-btn">
                  NETHERLAND <FiChevronDown />
                </button>
                <div className="menu">
                  <ul>
                    <li>
                      <a 
                      href="/amsterdam"
                      id="ams"
                      // onClick={handleTest}
                      >
                        Amsterdam</a>
                    </li>
                    <li>
                      <a 
                      href="/rotterdam"
                      id="roth" 
                      // onClick={handleTest}
                      >Rotterdam
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden-menu">
              <a href="/start">START HERE</a>
              <a href="/amsterdam/sundays">SUNDAYS</a>
              <a
                href="https://useplink.com/payment/mK4x0NBv4nqc1tnDJEPT/"
                target="_blank"
                rel="noreferrer"
              >
                GIVE
              </a>
            </div>
            <div className={`main-right ${hover ? "disappear" : ""}`}>
              <div className="right-bod">
                <div className="right1 rights">
                  <p>ABOUT US</p>
                  <a href="/us" onClick={() => setOpenMenu(false)}>
                    WHO WE ARE
                  </a>
                  <a href="/us#vision" onClick={() => setOpenMenu(false)}>
                    THE VISION
                  </a>
                  <a href="/us" onClick={() => setOpenMenu(false)}>
                    ABOUT OUR MISSION
                  </a>
                  <a href="#" onClick={() => setOpenMenu(false)}>
                    OUR LEADERSHIP
                  </a>
                  <a href="/contact" onClick={() => setOpenMenu(false)}>
                    CONTACT US
                  </a>
                </div>
                <div className="right2 rights">
                  <p>NEXT STEPS </p>
                  <a href="/serve" onClick={() => setOpenMenu(false)}>
                    SERVE
                  </a>
                  <a href="/outreach">OUTREACH</a>
                  <a href="/baptism" onClick={() => setOpenMenu(false)}>
                    BAPTISM{" "}
                  </a>
                  <a href="/prayer-request" onClick={() => setOpenMenu(false)}>
                    PRAYER REQUEST
                  </a>
                  <a
                    href="https://members.amsterdamcitychurch.nl/session/begin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MEMBERSHIP
                  </a>
                </div>
                <div className="right3 rights">
                  <p>JOIN US </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdtXPd1CX6lOMDHHrOwqyBwK8pH5dqYTGCrbbguVIWgohNTiA/viewform"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FIND YOUR PLACE
                  </a>
                  <a href="#">BIBLE ACADEMY</a>
                  <a href="#">NEW CONVERTS CLASS</a>
                </div>
              </div>
              <div className="sm-handles">
                <Link
                  className="youtube handles"
                  to="https://www.youtube.com/channel/UCvx240pRUOBgxMo4ZRNscxA?sub_confirmation=1"
                  target="_blank"
                >
                  <FaYoutube color="#fff" />
                </Link>
                <Link
                  className="insta handles"
                  to="https://www.instagram.com/amsterdamcitychurch"
                  target="_blank"
                >
                  <FaInstagram color="#fff" />
                </Link>
                <Link
                  className="facebook handles"
                  to="https://www.facebook.com/amsterdamcitychurch"
                  target="_blank"
                >
                  <FaFacebook color="#fff" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
