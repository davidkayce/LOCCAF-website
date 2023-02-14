import React from 'react'
import './index.scss'
import Pic1 from '../../../assets/mess1.jpg'
import Pic2 from '../../../assets/mess2.jpg'
import Pastor from '../../../assets/pastor.jpg'
import { Link, NavLink } from 'react-router-dom'
import Pic5 from '../../../assets/mess5.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FiArrowRight } from "react-icons/fi";


const Events = () => {
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
          items: 2,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-gpy"> 
            <button className={`pas-btn ${currentSlide === 0 ? 'disable' : ''}`} onClick={() => previous()}><FontAwesomeIcon icon={faArrowLeft} color='#fff'/></button>
            <button onClick={() => next()} className={`pas-btn ${currentSlide === 3 ? 'disable' : ''}`}><FontAwesomeIcon icon={faArrowRight} color='#fff'/></button>
          </div>
        );
      };
  return (
    <>
    <div className='events'>
        <div className="events-top">
            <h5>UPCOMING EVENTS</h5>
            <h1>AROUND THE PASSION MOVEMENT</h1>
        </div>
        <div className="events-con">
            <Link className='event' to='/starthere'>
                <div className="event-pic">
                    <img src={Pic1} alt="" />
                </div>
                <div className="event-text">
                    <h6>JANUARY 3-5, 2024</h6>
                    <h1>PASSION 2024</h1>
                    <h6>ATLANTA, GA</h6>
                    <p>Join us in Atlanta, GA on january 3-5, 2024 for Passion 2024. We 
                        can't wait to gather a generation together to call on Heaven. Get your tickets today! </p>
                </div>
            </Link>
            <Link className='event' to='/starthere'>
                <div className="event-pic">
                    <img src={Pic2} alt="" />
                </div>
                <div className="event-text">
                    <h6>JANUARY 3-5, 2024</h6>
                    <h1>PASSION 2024</h1>
                    <h6>ATLANTA, GA</h6>
                    <p>Join us in Atlanta, GA on january 3-5, 2024 for Passion 2024. We 
                        can't wait to gather a generation together to call on Heaven. Get your tickets today! </p>
                </div>
            </Link>
        </div>
    </div>
    <div className='originals'>
        <div className="origin-text">
        <h3>PASSION </h3>
        <h3> ORIGINALS</h3>
        </div>
        <div className="collection">
            <div className="message-pic">
                <img src={Pic5} alt="" id='pic1'/>
                <img src={Pic5} alt="" id='pic2' />
            </div>
            <div className="collect-name">
                <Link className="message-div collect" to='/message'>
                    <h1>MESSAGES</h1>
                    <h5>WATCH</h5>
                </Link>
                <Link className="podcast-div collect"  to='/message'>
                    <h1>PODCAST</h1>
                    <h5>LISTEN</h5>
                </Link>
                <Link className="articles-div collect" to='/message'>
                    <h1>ARTICLES</h1>
                    <h5>READ</h5>
                </Link>
                <Link className="music-div collect" to='/message'>
                    <h1>MUSIC</h1>
                    <h5>WORSHIP</h5>
                </Link>
            </div>
        </div>
    </div>
    <div className="passion-con">
        <h2 id='passion'>THE PASSION MOVEMENT</h2>
        <div className="passion-slide">
        <Carousel responsive={responsive}
    swipeable={false}
    draggable={true}
    containerClass="carousel-container"
    className='caros'
    arrows={false}
    renderButtonGroupOutside={true}
    customButtonGroup={<ButtonGroup />}
    >
    <div className='passion-slides'>
        <Link className='passion-box' to='/starhere' target='_blank'>
          <div className="passion-overlay"></div>
            <h2>START HERE</h2>
            <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
            <h4>START HERE <FontAwesomeIcon icon={faArrowRight}/></h4>
        </Link>

    </div>
    <div className='passion-slides'>
    <Link className='passion-box' to='/signup' target='_blank'>
     <div className="passion-overlay"></div>
        <h2>START HERE</h2>
        <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
        <h4>SIGN UP <FontAwesomeIcon icon={faArrowRight}/></h4>
    </Link>
    </div>

    <div className='passion-slides'>
        <Link className='passion-box' to='/us' target='_blank'>
        <div className="passion-overlay"></div>
            <h2>START HERE</h2>
            <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
            <h4> LEARN MORE <FontAwesomeIcon icon={faArrowRight}/></h4>
        </Link>

    </div>
    <div className='passion-slides'>
        <Link className='passion-box' to='/give' target='_blank'>
         <div className="passion-overlay"></div>
            <h2>START HERE</h2>
            <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
            <h4>GIVE <FontAwesomeIcon icon={faArrowRight}/></h4>
        </Link>

    </div>
    <div className='passion-slides'>
        <Link className='passion-box' to='/holder' target='_blank'>
        <div className="passion-overlay"></div>
            <h2>START HERE</h2>
            <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
            <h4>DOOR HOLDERS <FontAwesomeIcon icon={faArrowRight}/></h4>
        </Link>

    </div>
    <div className='passion-slides'>
        <Link className='passion-box' to='/core' target='_blank'>
        <div className="passion-overlay"></div>
            <h2>START HERE</h2>
            <p>Our desire is that everybody at Passion City Church feels seen and can find lasting community</p>
            <h4> LEARN MORE <FontAwesomeIcon icon={faArrowRight}/></h4>
        </Link>

    </div>

    </Carousel>
        </div>
    </div>

    <div className="pastor-con">
        <div className='pastor'>
            <img src={Pastor} alt="" />
            <div className="pastor-contents">
                <h6>OUR LEADERSHIP</h6>
                <h1>PASTOR</h1>
                <h1>LOUIE +</h1>
                <h1>SHELLY</h1>
                <p>Louie is a Visionary Architect and Director of the Passion Movement, and the founder
                    of Passion Institute. Shelly is the chief Strategist , Director of Label Operations
                    and the Artist Management of sixstepsrecords, Co-founder of the Passion Movement, and leads 
                    The GROOVE, a gathering for the girls of Atlanta.
                    <h3>
                    <Link className='pastor-info' to='/pastor'>
                        MORE INFO <FontAwesomeIcon icon={faArrowRight} color='#fff'/>
                    </Link>
                    </h3>
                    
                </p>
            </div>
        </div>
    </div>    
    </>
  )
}

export default Events