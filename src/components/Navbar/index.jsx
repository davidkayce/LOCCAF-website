import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";
import './index.scss'


const Navbar = () => {
  return (
    <div className='nav-bar'>
      <div className="logo1-con">
      <Link className='logo1' to='/'>PASSION CITY CHURCH</Link>
      <div className="dropdown">
        <button className='drop-btn'>GLOBAL <FiChevronDown/></button>
        <div className="menu">
          <ul>
            <li><a href="#">515</a></li>
            <li><a href="#">CUMBERLAND</a></li>
            <li><a href="#">D.C.</a></li>
            <li><a href="#">TRILITH</a></li>

          </ul>
        </div>
      </div>
      </div>
      <div className="logo2-con">
      <Link className='logo2' to='/'>PASSION</Link>
      <div className="dropdown">
        <button className='drop-btn'>GLOBAL <FiChevronDown/></button>
        <div className="menu">
          <ul>
            <li><a href="#">515</a></li>
            <li><a href="#">CUMBERLAND</a></li>
            <li><a href="#">D.C.</a></li>
            <li><a href="#">TRILITH</a></li>

          </ul>
        </div>
      </div>
      </div>
      
      <nav>
      <NavLink exact="true" activeclassname="active" to="/starthere">
          START HERE
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/sundays">
          SUNDAYS
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/give">
          GIVE
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/messages">
          MESSAGES
        </NavLink>
        <NavLink exact="true" activeclassname="active" className='menu'>
          MENU
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar