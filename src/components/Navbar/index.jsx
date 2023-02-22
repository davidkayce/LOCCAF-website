import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "./index.scss";
import Menu from "../Navbar/Menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  if (openMenu) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {openMenu && <Menu setOpenMenu={setOpenMenu} 
      openMenu={openMenu} />}
      <div className="nav-bar">
        <div className="logo1-con">
          <Link className="logo1" to="/">
            PASSION CITY CHURCH
          </Link>
          <div className="dropdown">
            <button className="drop-btn">
              GLOBAL <FiChevronDown />
            </button>
            <div className="menu">
              <ul>
                <li>
                  <a href="#">515</a>
                </li>
                <li>
                  <a href="#">CUMBERLAND</a>
                </li>
                <li>
                  <a href="#">D.C.</a>
                </li>
                <li>
                  <a href="#">TRILITH</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="logo2-con">
          <Link className="logo2" to="/">
            PASSION
          </Link>
          <div className="dropdown">
            <button className="drop-btn">
              GLOBAL <FiChevronDown />
            </button>
            <div className="menu">
              <ul>
                <li>
                  <a href="#">515</a>
                </li>
                <li>
                  <a href="#">CUMBERLAND</a>
                </li>
                <li>
                  <a href="#">D.C.</a>
                </li>
                <li>
                  <a href="#">TRILITH</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav>
          <NavLink exact="true" activeclassname="active" to="/start" className='hide'>
            START HERE
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/sundays" className='hide'>
            SUNDAYS
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/give" className='hide'>
            GIVE
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/messages" className='hide'>
            MESSAGES
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="menu"
            onClick={() => setOpenMenu(true)}
          >
            MENU
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
