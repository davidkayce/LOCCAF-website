import React from "react";
// import { useState,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../../assets/images/logo.png";
import "./index.scss";
import Menu from "../Navbar/Menu";
import { useGlobalContext } from '../../context'


const Navbar = () => {
  const { setOpenMenu, openMenu, roth, handleCurrentChurch, setroth,handleTest} = useGlobalContext()


  if (openMenu) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  



  if (roth === "" ){
    return (
      <>
        {openMenu && <Menu/>}
        <div className="nav-bar">
          <div className="logo1-con">
            <Link className="logo1" to="/">
              <h3>CITY</h3>
              <h3>CHURCH</h3>
              <h3>DISTRICT</h3>
              <p>
                <i> The more you know Jesus. The more you know you!</i>
              </p>
            </Link>
            <Link to="/" >
              <img src={Logo} alt=""/>
            </Link>
            <div className="dropdown">
              <button className="drop-btn">
              Global <FiChevronDown />
              </button>
              <div className="menu">
                <ul>
                <li>
                    <Link
                      to="/amsterdam" 
                      id="ams"
                      onClick={handleTest}
                      >
                        Amsterdam</Link>
                  </li>
                  <li>
                    <Link
                      to="/rotterdam"
                      id="roth" 
                      onClick={handleTest}
                      >Rotterdam</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
  
          <nav>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/start"
              className="hide"
            >
              START HERE
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/amsterdam/sundays"
              className="hide"
            >
              SUNDAYS
            </NavLink>
            <a
              rel="noreferrer"
              target='_blank'
              href="https://useplink.com/payment/mK4x0NBv4nqc1tnDJEPT/"
              className="hide"
            >
              GIVE
            </a>
               <div className="dropdown">
              <button className="drop-btn hide ">
                WATCH 
              </button>
              <div className="menu hide">
                <ul>
                  <li>
                    <a href="https://us02web.zoom.us/j/8812443296?pwd=OWtFazlVUE4xZFlFVlBpVmhvZ2dFdz09" target='_blank' rel="noreferrer">ZOOM</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCvx240pRUOBgxMo4ZRNscxA?sub_confirmation=1" target='_blank' rel="noreferrer">YOUTUBE</a>
                  </li>
                  <li>
                    <a href="https://open.spotify.com/show/6iOGsfojd34b5SBPlPOShJ?si=71jdz_htT3CMu6jeTEgdXQ" target='_blank' rel="noreferrer">SPOTIFY</a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              exact="true"
              activeclassname="active"
              className="menu"
              onClick={() => setOpenMenu(true)}
            >
              MENU
            </button>
          </nav>
        </div>
      </>
    );
  }
  if (roth === "roth" ){
    return(
      <>
      {openMenu && <Menu/>}
      <div className="nav-bar">
        <div className="logo1-con">
          <Link className="logo1" to="rotterdam">
              <h3>CITY</h3>
              <h3>CHURCH</h3>
              <h3>DISTRICT</h3>
              <p>
                <i> The more you know Jesus. The more you know you!</i>
              </p>
            </Link>
          <Link to="/rotterdam" >
              <img src={Logo} alt=""/>
            </Link>
          <div className="dropdown">
            <button className="drop-btn">
            Rotterdam <FiChevronDown />
            </button>
            <div className="menu">
              <ul>
                <li>
                  <Link
                   to="/amsterdam" 
                   id="ams"
                   onClick={handleTest}
                   >Amsterdam</Link>
                </li>
                <li>
                    <Link
                      to="/" 
                      onClick={handleTest}
                      >Global</Link>
                  </li>
              </ul>
            </div>
          </div>
        </div>
       

        <nav>
          {/* <NavLink
            exact="true"
            activeclassname="active"
            to="/start"
            className="hide"
          >
            START HERE
          </NavLink> */}
          <NavLink
            exact="true"
            activeclassname="active"
            to="/rotterdam/sundays"
            className="hide"
          >
            SUNDAYS
          </NavLink>
          <a
            rel="noreferrer"
            target='_blank'
            href="https://useplink.com/payment/mK4x0NBv4nqc1tnDJEPT/"
            className="hide"
          >
            GIVE
          </a>
             <div className="dropdown ">
            <button className="drop-btn hide">
              WATCH 
            </button>
            <div className="menu">
              <ul>
                <li>
                  <a href="https://us02web.zoom.us/j/8812443296?pwd=OWtFazlVUE4xZFlFVlBpVmhvZ2dFdz09" target='_blank' rel="noreferrer">ZOOM</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCvx240pRUOBgxMo4ZRNscxA?sub_confirmation=1" target='_blank' rel="noreferrer">YOUTUBE</a>
                </li>
                <li>
                  <a href="https://open.spotify.com/show/6iOGsfojd34b5SBPlPOShJ?si=71jdz_htT3CMu6jeTEgdXQ" target='_blank' rel="noreferrer">SPOTIFY</a>
                </li>
              </ul>
            </div>
          </div>
          <button
            exact="true"
            activeclassname="active"
            className="menu"
            onClick={() => setOpenMenu(true)}
          >
            MENU
          </button>
        </nav>
      </div>
    </>
    )
  }
  if (roth === "ams" ){
    return(
      <>
      {openMenu && <Menu/>}
      <div className="nav-bar">
        <div className="logo1-con">
          <Link className="logo1" to="/amsterdam">
              <h3>CITY</h3>
              <h3>CHURCH</h3>
              <h3>DISTRICT</h3>
              <p>
                <i> The more you know Jesus. The more you know you!</i>
              </p>
            </Link>
          <Link to="/" >
              <img src={Logo} alt=""/>
            </Link>
          <div className="dropdown">
            <button className="drop-btn">
            Amsterdam <FiChevronDown />
            </button>
            <div className="menu">
              <ul>
                <li>
                  <Link
                   to="/rotterdam" 
                    id="roth"
                    onClick={handleTest}
                    >Rotterdam</Link>
                </li>
                <li>
                    <Link
                      to="/" 
                      onClick={handleTest}
                      >Global</Link>
                  </li>
              </ul>
            </div>
          </div>
        </div>
       

        <nav>
          {/* <NavLink
            exact="true"
            activeclassname="active"
            to="/start"
            className="hide"
          >
            START HERE
          </NavLink> */}
          <NavLink
            exact="true"
            activeclassname="active"
            to="/amsterdam/sundays"
            className="hide"
          >
            SUNDAYS
          </NavLink>
          <a
            rel="noreferrer"
            target='_blank'
            href="https://useplink.com/payment/mK4x0NBv4nqc1tnDJEPT/"
            className="hide"
          >
            GIVE
          </a>
             <div className="dropdown ">
            <button className="drop-btn hide">
              WATCH 
            </button>
            <div className="menu">
              <ul>
                <li>
                  <a href="https://us02web.zoom.us/j/8812443296?pwd=OWtFazlVUE4xZFlFVlBpVmhvZ2dFdz09" target='_blank' rel="noreferrer">ZOOM</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCvx240pRUOBgxMo4ZRNscxA?sub_confirmation=1" target='_blank' rel="noreferrer">YOUTUBE</a>
                </li>
                <li>
                  <a href="https://open.spotify.com/show/6iOGsfojd34b5SBPlPOShJ?si=71jdz_htT3CMu6jeTEgdXQ" target='_blank' rel="noreferrer">SPOTIFY</a>
                </li>
              </ul>
            </div>
          </div>
          <button
            exact="true"
            activeclassname="active"
            className="menu"
            onClick={() => setOpenMenu(true)}
          >
            MENU
          </button>
        </nav>
      </div>
    </>
    )
  }
  
};

export default Navbar;
