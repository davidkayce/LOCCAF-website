import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FiArrowRight } from "react-icons/fi";


const Slide = () => {
  return (
    <div className="straight-slide">
    <div className='slid'>
      <Link className='slid-box' to='/starhere'>
      <div className="overlays"></div>
          <h5>NEW TO PASSION CITY CHURCH?</h5>
          <h2>START HERE</h2>
          <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
          <h4>START HERE <FontAwesomeIcon icon={faArrowRight}/></h4>
      </Link>

  </div>
  <div className='slid'>
  <Link className='slid-box' to='/signup'>
   <div className="overlays"></div>
      <h5>NEW TO PASSION CITY CHURCH?</h5>
      <h2>START HERE</h2>
      <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
      <h4>SIGN UP <FontAwesomeIcon icon={faArrowRight}/></h4>
  </Link>
  </div>

  <div className='slid'>
      <Link className='slid-box' to='/us'>
      <div className="overlays"></div>
          <h5>NEW TO PASSION CITY CHURCH?</h5>
          <h2>START HERE</h2>
          <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
          <h4> LEARN MORE <FontAwesomeIcon icon={faArrowRight}/></h4>
      </Link>

  </div>
  <div className='slid'>
      <Link className='slid-box' to='/give'>
       <div className="overlays"></div>
          <h5>NEW TO PASSION CITY CHURCH?</h5>
          <h2>START HERE</h2>
          <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
          <h4>GIVE <FontAwesomeIcon icon={faArrowRight}/></h4>
      </Link>

  </div>
  <div className='slid'>
      <Link className='slid-box' to='/holder'>
      <div className="overlays"></div>
          <h5>NEW TO PASSION CITY CHURCH?</h5>
          <h2>START HERE</h2>
          <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
          <h4>DOOR HOLDERS <FontAwesomeIcon icon={faArrowRight}/></h4>
      </Link>

  </div>
  <div className='slid'>
      <Link className='slid-box' to='/core'>
      <div className="overlays"></div>
          <h5>NEW TO PASSION CITY CHURCH?</h5>
          <h2>START HERE</h2>
          <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
          <h4> LEARN MORE <FontAwesomeIcon icon={faArrowRight}/></h4>
      </Link>

  </div>
  <div className='slid'>
      <Link className='slid-box' to='/online'>
      <div className="overlays"></div>
          <h5>NEW TO PASSION CITY CHURCH?</h5>
          <h2>START HERE</h2>
          <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
          <h4> JOIN US ONLINE <FontAwesomeIcon icon={faArrowRight}/></h4>
      </Link>

  </div>
  </div>
  )
}

export default Slide