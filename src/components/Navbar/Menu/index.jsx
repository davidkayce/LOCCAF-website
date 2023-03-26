import React, { useState,useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Thumb2 from "../../../assets/images/thumb2.jpg";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Pastor from "../../../assets/images/mess5.jpg";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../../../assets/images/logo.png";
import { useGlobalContext } from '../../../context'


import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Menu = () => {
  const {setOpenMenu,handleOpenChurch, handleCloseChurch} = useGlobalContext()

  const [hover, setHover] = useState(false);


 
  //  useEffect(() =>{
  //   if (roth !== ""){
  //     handleRoth()
  //   }
  //  },[roth])

  return (
    <div className="menu-modalCon">
      <div className="overlay"></div>
      <div className="modal">
        <div className="menu-top">
          <div className="top-left">
            <Link to="/"  onClick={() => setOpenMenu(false)}>
              <img src={Logo} alt=""/>
            </Link>
            {/* <div className="left-search">
                        <FontAwesomeIcon icon={faSearch} id='search'/>
                        <input type="text" placeholder='SEARCH PASSION'/>
                    </div> */}
          </div>
          <div className="top-mid">
            <h5>
              GATHERING TIMES: ATL 9:30A + 11:45A EST // D.C. 9:30A + 11:30A EST
            </h5>
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
                  GLOBAL <FiChevronDown />
                </button>
                <div className="menu">
                  <ul>
                    <li>
                      <Link 
                      to="/amsterdam"
                      id="ams"
                      onClick={handleOpenChurch}>Amsterdam</Link>
                    </li>
                    <li>
                      <Link 
                      to="/rotterdam"
                      id="roth" 
                      onClick={handleOpenChurch}>Rotterdam
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden-menu">
              <a href="/start">START HERE</a>
              <a href="/amsterdam/sundays" >SUNDAYS</a>
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
                    SERVE{" "}
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
                  <a href="#">FIND YOUR PLACE</a>
                  <a href="#">BIBLE ACADEMY</a>
                  <a href="#">NEW CONVERTS CLASS</a>
                </div>
              </div>
              <div className="sm-handles">
                <Link className="youtube handles" to="#" target="_blank">
                  <FontAwesomeIcon icon={faYoutube} color="#fff" />
                </Link>
                <Link className="insta handles" to="#" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} color="#fff" />
                </Link>
                <Link className="facebook handles" to="#" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} color="#fff" />
                </Link>
                <Link className="twitter handles" to="#" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} color="#fff" />
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
