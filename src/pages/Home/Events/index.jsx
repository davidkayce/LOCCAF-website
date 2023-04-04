import React from "react";
import "./index.scss";
import Pic1 from "../../../assets/images/mess1.jpg";
import Pic2 from "../../../assets/images/mess2.jpg";
import Pastor from "../../../assets/images/pastor.jpg";
import Leader from "../../../assets/images/leader.jpg";
import { Link } from "react-router-dom";
// import Pic5 from "../../../assets/images/mess5.jpg";
import Thumb1 from "../../../assets/images/thumb1.jpg";
import Thumb2 from "../../../assets/images/thumb2.jpg";
import Thumb3 from "../../../assets/images/thumb3.jpg";
import Thumb4 from "../../../assets/images/thumb4.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import YouTube from "react-youtube";
import { useState } from "react";

const Events = () => {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [player3, setPlayer3] = useState(null);
  const [player4, setPlayer4] = useState(null);

  const [hide, setHide] = useState("");

  // const youtubeID1 = ;

  const onReady1 = (e) => {
    setPlayer1(e.target.playVideo());
  };
  const onReady2 = (e) => {
    setPlayer2(e.target.playVideo());
  };
  const onReady3 = (e) => {
    setPlayer3(e.target.playVideo());
  };
  const onReady4 = (e) => {
    setPlayer4(e.target.playVideo());
  };

  const onPlayHandler1 = () => {
    setHide("one");
    player1.playVideo();
  };
  const onPauseHandler1 = () => {
    setHide("");
    player1.pauseVideo();
  };

  const onPlayHandler2 = () => {
    setHide("two");
    player2.playVideo();
  };
  const onPauseHandler2 = () => {
    setHide("");
    player2.pauseVideo();
  };

  const onPlayHandler3 = () => {
    setHide("three");
    player3.playVideo();
  };
  const onPauseHandler3 = () => {
    setHide("");
    player3.pauseVideo();
  };

  const onPlayHandler4 = () => {
    setHide("four");
    player4.playVideo();
  };
  const onPauseHandler4 = () => {
    setHide("");
    player4.pauseVideo();
  };

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
      breakpoint: { max: 1024, min: 700 },
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
      <div className="carousel-button-gpy">
        <button
          className={`pas-btn ${currentSlide === 0 ? "disable" : ""}`}
          onClick={() => previous()}
        >
          &larr;
        </button>
        <button
          onClick={() => next()}
          className={`pas-btn ${currentSlide === 3 ? "disable" : ""}`}
        >
          &rarr;
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="events">
        <div className="events-top">
          {/* <h5>UPCOMING EVENTS</h5> */}
          <h1>UPCOMING EVENTS</h1>
        </div>
        <div className="events-con">
          <Link className="event event1" to="#">
            <div className="event-pic">
              <img src={Pic1} alt="" />
            </div>
            <div className="event-text">
              <h6>JANUARY 3-5, 2024</h6>
              <h1>PRAISE 2024</h1>
              <h6>AMSTERDAM, NL</h6>
              <p className="note">
                Join us in Amsterdam, NL on january 3-5, 2024 for Praise 2024.
                We can't wait to gather a generation together to call on Heaven.
                Get your tickets today!
              </p>
            </div>
          </Link>
          <Link className="event" to="/#">
            <div className="event-pic">
              <img src={Pic2} alt="" />
            </div>
            <div className="event-text">
              <h6>JANUARY 3-5, 2024</h6>
              <h1>ENCOUNTER 2024</h1>
              <h6>HABOUR, NL</h6>
              <p className="note">
                Join us in Habour, NL on january 3-5, 2024 for Encounter 2024.
                We can't wait to gather a generation together to call on Heaven.
                Get your tickets today!
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="youtubeCon">
        <div className="youtube">
          <div
            className="tube"
            onMouseEnter={onPlayHandler1}
            onMouseLeave={onPauseHandler1}
          >
            <div className="body-top">
              <img
                src={Thumb1}
                alt=""
                className={`img ${hide === "one" ? "hide" : ""}`}
              />
              <YouTube
                containerClassName='tube-con'
                className="y-vid"
                videoId="bozhvs9kalA"
                onReady={onReady1}
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: {
                    controls: 1,
                    autoplay: 1,
                    mute: 1,
                  },
                }}
              />
            </div>
            <div className="body-bot">
              <h4>THE CROSS PART 2.1</h4>
              <h4>Rev. John Angoh</h4>
            </div>
          </div>
          <div
            className="tube"
            onMouseEnter={onPlayHandler2}
            onMouseLeave={onPauseHandler2}
          >
            <div className="body-top">
              <img
                src={Thumb2}
                alt=""
                className={`img ${hide === "two" ? "hide" : ""}`}
              />
              <YouTube
                // containerClassName='y-vid'
                className="y-vid"
                videoId="cpHTzvDKUYE"
                onReady={onReady2}
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: {
                    controls: 1,
                    autoplay: 1,
                    mute: 1,
                  },
                }}
              />
            </div>
            <div className="body-bot">
              <h4>THE CROSS PART 1.1</h4>
              <h4>Elder Owusu Asare</h4>
            </div>
          </div>
          <div
            className="tube"
            onMouseEnter={onPlayHandler3}
            onMouseLeave={onPauseHandler3}
          >
            <div className="body-top">
              <img
                src={Thumb3}
                alt=""
                className={`img ${hide === "three" ? "hide" : ""}`}
              />
              <YouTube
                // containerClassName='y-vid'
                className="y-vid"
                videoId="p4x_DOlqcGA"
                onReady={onReady3}
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: {
                    controls: 1,
                    autoplay: 1,
                    mute: 1,
                  },
                }}
              />
            </div>
            <div className="body-bot">
              <h4>LIFT HIM UP PART 4.1</h4>
              <h4>Rev. John Angoh</h4>
            </div>
          </div>
          <div
            className="tube"
            onMouseEnter={onPlayHandler4}
            onMouseLeave={onPauseHandler4}
          >
            <div className="body-top">
              <img
                src={Thumb4}
                alt=""
                className={`img ${hide === "four" ? "hide" : ""}`}
              />
              <YouTube
                // containerClassName='y-vid'
                className="y-vid"
                videoId="lKX5v4gPzu0"
                onReady={onReady4}
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: {
                    controls: 1,
                    autoplay: 1,
                    mute: 1,
                  },
                }}
              />
            </div>
            <div className="body-bot">
              <h4>LIFT HIM UP PART 3.1</h4>
              <h4>Elder Junior Obeng Eshun</h4>
            </div>
          </div>
        </div>
        <div className="text">
          Would you love to watch more of our messages? 
          <a
            href="https://www.youtube.com/channel/UCvx240pRUOBgxMo4ZRNscxA?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            Click here &rarr;
          </a>
        </div>
      </div>
      <div className="passion-con">
        <div className="passion-slide">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            containerClass="carousel-container"
            className="caros"
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            <div className="passion-slides">
              <a
                className="passion-box"
                href="https://www.facebook.com/amsterdamcitychurch"
                target="_blank"
                rel="noreferrer"
              >
                <div className="passion-overlay"></div>
                <h2>FACEBOOK</h2>
                <p>Follow us on Facebook.</p>
                <h4>CLICK HERE &rarr;</h4>
              </a>
            </div>
            <div className="passion-slides">
              <a
                className="passion-box"
                href="https://www.instagram.com/amsterdamcitychurch"
                target="_blank"
                rel="noreferrer"
              >
                <div className="passion-overlay"></div>
                <h2>INSTAGRAM</h2>
                <p>Follow us on Instagram.</p>
                <h4>CLICK HERE &rarr;</h4>
              </a>
            </div>

            <div className="passion-slides">
              <a className="passion-box" href="https://www.youtube.com/channel/UCvx240pRUOBgxMo4ZRNscxA" target="_blank">
                <div className="passion-overlay"></div>
                <h2>YOUTUBE</h2>
                <p>Subcribe to our Youtube channel.</p>
                <h4>CLICK HERE &rarr;</h4>
              </a>
            </div>
            <div className="passion-slides">
              <a
                className="passion-box"
                href="https://tiktok.com/@amsterdamcitychurch"
                target="_blank"
                rel="noreferrer"
              >
                <div className="passion-overlay"></div>
                <h2>TIKTOK</h2>
                <p>Follow us on Tiktok.</p>
                <h4>CLICK HERE &rarr;</h4>
              </a>
            </div>
            <div className="passion-slides">
              <Link
                className="passion-box"
                to="#"
                target="_blank"
                rel="noreferrer"
              >
                <div className="passion-overlay"></div>
                <h2>TWITTER</h2>
                <p>Follow us Twitter.</p>
                <h4>CLICK HERE &rarr;</h4>
              </Link>
            </div>
            {/* <div className="passion-slides">
              <Link className="passion-box" to="/core" target="_blank">
                <div className="passion-overlay"></div>
                <h2>START HERE</h2>
                <p>
                  Our desire is that everybody at Passion City Church feels seen
                  and can find lasting community
                </p>
                <h4>
                  {" "}
                  LEARN MORE &rarr;
                </h4>
              </Link>
            </div> */}
          </Carousel>
        </div>
      </div>

      <div className="pastor-con">
        <div className="pastor">
          <img src={Leader} alt="" />
          <div className="pastor-contents">
            <h5>OUR LEADERSHIP</h5>
            <h1>REV.</h1>
            <h1>JOHN</h1>
            <h1>ANGOH</h1>
            <p>John is the Presiding Overseer of the City CHurch District.</p>
            <h3>
              <Link className="pastor-info" to="/pastor">
                MORE INFO &rarr;
              </Link>
            </h3>
          </div>
          <div className="pastor-contents1">
            <h5>OUR LEADERSHIP</h5>
            <h1>REV. JOHN </h1>
            <h1>ANGOH</h1>
            <p>John is the Presiding Overseer of the City CHurch District.</p>

            <h3>
              <Link className="pastor-info" to="#">
                MORE INFO &rarr;
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
