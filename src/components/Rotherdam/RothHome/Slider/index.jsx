import React, { useRef, useState } from "react";
import "./index.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FiArrowRight } from "react-icons/fi";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.2,
      slidesToSlide: 1,
    },
    smtablet: {
      breakpoint: { max: 700, min: 464 },
      items: 1.4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
      slidesToSlide: 1,
    },
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <button
          className={`caro-btn ${currentSlide === 0 ? "disable" : ""}`}
          onClick={() => previous()}
        >
          &larr;
        </button>
        <button
          onClick={() => next()}
          className={`caro-btn ${currentSlide === 3 ? "disable" : ""}`}
        >
          &rarr;
        </button>
      </div>
    );
  };
  return (
    <>
     <div className='place'>
        <h3>FIND YOUR PLACE AT AMSTERDAM CITY CHURCH</h3>       
       </div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        containerClass="carousel-container"
        className="slider"
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        <div className="slides">
          <Link className="start-box" to="/start">
            <div className="overlay2"></div>
            <h5>NEW TO PASSION CITY CHURCH?</h5>
            <h2>START HERE</h2>
            <p>
              Our desire is that everybody at Amsterdam City Church feels seen
              and can find lasting community
            </p>
            <h4>START HERE &rarr;</h4>
          </Link>
        </div>
        <div className="slides">
          <Link className="start-box" to="/contact">
            <div className="overlay2"></div>
            <h5>BE IN THE KNOW</h5>
            <h2>CONNECT WITH US</h2>
            <p>Join our email list to get updates from Amsterdam City Church</p>
            <h4>SIGN UP &rarr;</h4>
          </Link>
        </div>

        <div className="slides">
          <Link className="start-box" to="/us">
            <div className="overlay2"></div>
            <h5> WHO WE ARE AT AMSTERDAM CITY CHURCH</h5>
            <h2>US</h2>
            <p>
              Get to know more about who we are and what we believe here at
              Amsterdam city church
            </p>
            <h4> LEARN MORE &rarr;</h4>
          </Link>
        </div>
        <div className="slides">
          <a
            className="start-box"
            href="https://useplink.com/payment/mK4x0NBv4nqc1tnDJEPT/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="overlay2"></div>
            <h5>THAT WE MAY</h5>
            <h2>GIVE</h2>
            <p>Your Generosity is Making a Difference</p>
            <h4>GIVE &rarr;</h4>
          </a>
        </div>
        <div className="slides">
          <Link className="start-box" to="/serve">
            <div className="overlay2"></div>
            <h5>SERVE</h5>
            <h2>SERVICE</h2>
            <p>
              One of the best ways to meet people, develop relationships, and
              grow as a follower of Christ is to serve the church
            </p>
            <h4>SERVE &rarr;</h4>
          </Link>
        </div>
        <div className="slides">
          <Link className="start-box" to="/outreach">
            <div className="overlay2"></div>
            <h5>SHOWING LOVE</h5>
            <h2>OUTREACH</h2>
            <p>
              It is love that connects people all over the world. God is love.
              It is God’s plan to bring love and hope to a hurting world.
            </p>
            <h4>REACH OUT &rarr;</h4>
          </Link>
        </div>
        <div className="slides">
          <Link className="start-box" to="/prayer-request">
            <div className="overlay2"></div>
            <h5>LET US PRAY FOR YOU</h5>
            <h2>PRAYER REQUEST</h2>
            <p>
             We would love to pray for you.
            </p>
            <h4> PRAYER REQUEST &rarr;</h4>
          </Link>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
