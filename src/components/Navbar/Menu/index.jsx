import React from 'react'
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'
import Logo from '../../../assets/logo.jpeg'
import Pastor from '../../../assets/mess5.jpg'
import { FiChevronDown } from "react-icons/fi";
import {faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'





const Menu = ({setOpenMenu, openMenu}) => {
  return (
    <div className='menu-modalCon'>
        <div className="overlay"></div>
        <div className="modal">
            <div className="menu-top">
                <div className="top-left">
                    <Link to='/' ><h1>P</h1></Link>
                    <div className="left-search">
                        <FontAwesomeIcon icon={faSearch} id='search'/>
                        <input type="text" placeholder='SEARCH PASSION'/>
                    </div>
                </div>
                <div className="top-mid">
                    <h5>GATHERING TIMES: ATL 9:30A + 11:45A EST // D.C. 9:30A + 11:30A EST</h5>
                </div>
                <div className="top-right">
                    <button onClick={() => setOpenMenu(false)}>CLOSE</button>
                </div>
            </div>
            <div className="menu-body">
                <div className="body-left">
                    <h2>FEATURED</h2>
                    <img src={Pastor} alt="" />
                    <div className="left-bot">
                        <h5> THE BEST AND WORST NEWS YOU'VE EVER HEARD</h5>
                        <h5 id='blue'>LOUIE GIGLIO</h5>
                        <h5>02.13.23</h5>
                    </div>
                </div>
                <div className="body-right">
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
                    <div className="hidden-menu">
                        <h6>START HERE</h6>
                        <h6>SUNDAYS</h6>
                        <h6>GIVE</h6>
                        <h6>MESSAGES</h6>
                    </div>
                    <div className='main-right'>
                    <div className="right-bod">
                        <div className="right1 rights">
                            <p>OUR HOUSE</p>
                            <a href="#">WHAT WE BELIEVE</a> 
                            <a href="#">OUR LEADERSHIP</a> 
                            <a href="#">DOOR HOLDERS</a>
                            <a href="#">LAUNCH</a>    
                            <a href="#">WELCOME TO CHURCH</a>    
                            <a href="#">BAPTISM</a>    
                            <a href="#">COMMUNITY GROUPS</a>    
                            <a href="#">ABOVE + BEYOND</a>    
                        </div>
                        <div className="right2 rights">
                            <p>OUR HOUSE</p>
                            <a href="#">WHAT WE BELIEVE</a> 
                            <a href="#">OUR LEADERSHIP</a> 
                            <a href="#">DOOR HOLDERS</a>
                            <a href="#">LAUNCH</a>    
                            <a href="#">WELCOME TO CHURCH</a>    
                            <a href="#">BAPTISM</a>    
                            <a href="#">COMMUNITY GROUPS</a>    
                            <a href="#">ABOVE + BEYOND</a>    
                        </div>
                        <div className="right3 rights">
                            <p>OUR HOUSE</p>
                            <a href="#">WHAT WE BELIEVE</a> 
                            <a href="#">OUR LEADERSHIP</a> 
                            <a href="#">DOOR HOLDERS</a>
                            <a href="#">LAUNCH</a>    
                            <a href="#">WELCOME TO CHURCH</a>    
                            <a href="#">BAPTISM</a>    
                            <a href="#">COMMUNITY GROUPS</a>    
                            <a href="#">ABOVE + BEYOND</a>    
                        </div>
                    </div>
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
        </div>

    </div>
  )
}

export default Menu