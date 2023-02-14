import React, { useRef, useState } from 'react'
import './index.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FiArrowRight } from "react-icons/fi";



const Slider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3.2,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2.4,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.2,
          slidesToSlide: 1
        }
      };
      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group"> 
            <button className={`caro-btn ${currentSlide === 0 ? 'disable' : ''}`} onClick={() => previous()}><FontAwesomeIcon icon={faArrowLeft} color='#fff'/></button>
            <button onClick={() => next()} className={`caro-btn ${currentSlide === 4 ? 'disable' : ''}`}><FontAwesomeIcon icon={faArrowRight} color='#fff'/></button>
          </div>
        );
      };
   return(
    <>
    <Carousel responsive={responsive}
    swipeable={false}
    draggable={true}
    containerClass="carousel-container"
    className='caros'
    arrows={false}
    renderButtonGroupOutside={true}
    customButtonGroup={<ButtonGroup />}
    >
    <div className='slides'>
        <Link className='start-box' to='/starhere'>
          <div className="overlay2"></div>
            <h5>NEW TO PASSION CITY CHURCH?</h5>
            <h2>START HERE</h2>
            <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
            <h4>START HERE <FontAwesomeIcon icon={faArrowRight}/></h4>
        </Link>

    </div>
    <div className='slides'>
    <Link className='start-box' to='/signup'>
     <div className="overlay2"></div>
        <h5>NEW TO PASSION CITY CHURCH?</h5>
        <h2>START HERE</h2>
        <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
        <h4>SIGN UP <FontAwesomeIcon icon={faArrowRight}/></h4>
    </Link>
    </div>

    <div className='slides'>
        <Link className='start-box' to='/us'>
        <div className="overlay2"></div>
            <h5>NEW TO PASSION CITY CHURCH?</h5>
            <h2>START HERE</h2>
            <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
            <h4> LEARN MORE <FontAwesomeIcon icon={faArrowRight}/></h4>
        </Link>

    </div>
    <div className='slides'>
        <Link className='start-box' to='/give'>
         <div className="overlay2"></div>
            <h5>NEW TO PASSION CITY CHURCH?</h5>
            <h2>START HERE</h2>
            <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
            <h4>GIVE <FontAwesomeIcon icon={faArrowRight}/></h4>
        </Link>

    </div>
    <div className='slides'>
        <Link className='start-box' to='/holder'>
        <div className="overlay2"></div>
            <h5>NEW TO PASSION CITY CHURCH?</h5>
            <h2>START HERE</h2>
            <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
            <h4>DOOR HOLDERS <FontAwesomeIcon icon={faArrowRight}/></h4>
        </Link>

    </div>
    <div className='slides'>
        <Link className='start-box' to='/core'>
        <div className="overlay2"></div>
            <h5>NEW TO PASSION CITY CHURCH?</h5>
            <h2>START HERE</h2>
            <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
            <h4> LEARN MORE <FontAwesomeIcon icon={faArrowRight}/></h4>
        </Link>

    </div>
    <div className='slides'>
        <Link className='start-box' to='/online'>
        <div className="overlay2"></div>
            <h5>NEW TO PASSION CITY CHURCH?</h5>
            <h2>START HERE</h2>
            <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
            <h4> JOIN US ONLINE <FontAwesomeIcon icon={faArrowRight}/></h4>
        </Link>

    </div>

    </Carousel>
    
  </>
   )  
  
}

export default Slider