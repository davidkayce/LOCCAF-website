import React from 'react'
import './index.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Pic1 from '../../../assets/mess1.jpg'
import Pic2 from '../../../assets/mess2.jpg'
import Pic3 from '../../../assets/mess3.jpg'
import Pic4 from '../../../assets/mess4.jpg'


const Messages = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1.7,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1.2,
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
          <div className="carousel-button-gp"> 
            <button className={`caro-btn ${currentSlide === 0 ? 'disable' : ''}`} onClick={() => previous()}><FontAwesomeIcon icon={faArrowLeft} color='#fff'/></button>
            <button onClick={() => next()} className={`caro-btn ${currentSlide === 4 ? 'disable' : ''}`}><FontAwesomeIcon icon={faArrowRight} color='#fff'/></button>
          </div>
        );
      };
  return (
    <>
    <div className='messages'>
        <div className="message-text">
            <h2>LATEST MESSAGES FROM PASSION CITY CHURCH ATLANTA + PASSION CITY CHURCH DC</h2>
        </div>
        <div className="message-slide">
                <Carousel responsive={responsive}
                    swipeable={false}
                    draggable={true}
                    containerClass="carousel-container"
                    className='caros1'
                    arrows={false}
                    renderButtonGroupOutside={true}
                    customButtonGroup={<ButtonGroup />}
                    >
                    <div className='slides1'>
                        <Link className='message-box' to='/starhere'>
                            <img src={Pic1} alt="" />
                            <div className="message-top">
                                <h5>PRIORITIES</h5>
                                <h5>02.06.23</h5>
                            </div>
                            <h5>MOVING FROM A LIFE OF DISTRACTION TO A LIFE OF DEVOTION</h5>
                            <h4>Grant Patrick</h4>
                        </Link>

                    </div>
                    <div className='slides1'>
                    <Link className='message-box' to='/signup'>
                        <img src={Pic2} alt="" id='pic' />
                        <div className="message-top">
                                <h5>PRIORITIES</h5>
                                <h5>02.06.23</h5>
                            </div>
                            <h5>MOVING FROM A LIFE OF DISTRACTION TO A LIFE OF DEVOTION</h5>
                            <h4>Grant Patrick</h4>
                    </Link>
                    </div>

                    <div className='slides1'>
                        <Link className='message-box' to='/us'>
                            <img src={Pic3} alt="" id='pic' />
                            <div className="message-top">
                                <h5>PRIORITIES</h5>
                                <h5>02.06.23</h5>
                            </div>
                            <h5>MOVING FROM A LIFE OF DISTRACTION TO A LIFE OF DEVOTION</h5>
                            <h4>Grant Patrick</h4>
                        </Link>

                    </div>
                    <div className='slides1'>
                        <Link className='message-box' to='/give'>
                             <img src={Pic4} alt="" id='pic'/>
                             <div className="message-top">
                                <h5>PRIORITIES</h5>
                                <h5>02.06.23</h5>
                            </div>
                            <h5>MOVING FROM A LIFE OF DISTRACTION TO A LIFE OF DEVOTION</h5>
                            <h4>Grant Patrick</h4>
                        </Link>

                    </div> 
                </Carousel>
            </div>
    </div>
    
    </>
  )
}

export default Messages