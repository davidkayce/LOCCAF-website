import React from 'react'
import './index.scss'
import Logo from '../../assets/logo.jpeg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer-con'>
        <div className="footer">
            <div className="footer-top">
                <Link to='/' ><img src={Logo} alt="" /></Link>
                <h1>PASSION CITY CHURCH</h1>
            </div>
            <div className="footer-mid">
                <div className="mid-left">
                    <h1>STAY UP TO DATE WITH PASSION</h1>
                    <form>
                        <input type='email' placeholder='ENTER YOUR EMAIL'  id='text'/>
                        <p></p>
                    </form>
                </div>
                <div className="mid-right">
                    <div className="passion-city right">
                        <h5>PASSION CITY</h5>
                        <a href="#">Us</a>
                        <a href="#">Join Our Team</a>
                        <a href="#">Our Leadership</a>
                        <a href="#">Give</a>
                    </div>
                    <div className="locate-city right">
                        <h5>LOCATIONS</h5>
                        <a href="#">515</a>
                        <a href="#">Cumberland</a>
                        <a href="#">Trilith</a>
                        <a href="#">DC</a>
                    </div>
                    <div className="movement right">
                        <h5>THE MOVEMENT</h5>    
                        <a href="#">Passion Resources</a>
                        <a href="#">Passion Conferences</a>
                        <a href="#">Passion Publishing</a>
                        <a href="#">sixstepsrecords</a>
                        <a href="#">Passion Originals</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span id='ft-el'><p >&copy; 2023 Passion City </p><p> Church</p></span>
                <span id='ft-el'><a href='#' >Privacy</a><a href="#">Policy</a></span>
                <span id='ft-el'><a href='#' >Terms +</a><a href="#">Conditions</a></span>
                <span id='ft-el'><a href='#' >SMS Terms + </a><a href="#">Conditions</a></span>
                <span id='ft-el'><a href='#' >Georgia </a><a href="#">Film</a></span>
                <span id='ft-el'><a href="#">Impact </a><a href="#">Report</a></span>
                <div className="sm-handles">
                    <Link className='youtube handles' to='#' target='_blank'>
                        <FontAwesomeIcon icon={faYoutube} color='#fff'/>
                    </Link>
                    <Link className='insta handles' to='#' target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} color='#fff'/>
                    </Link>
                    <Link className='facebook handles' to='#' target='_blank'>
                        <FontAwesomeIcon icon={faFacebook} color='#fff'/>
                    </Link>
                    <Link className='twitter handles' to='#' target='_blank'>
                        <FontAwesomeIcon icon={faTwitter} color='#fff'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer