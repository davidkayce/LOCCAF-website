import React from "react";
import Worship from "../../assets/Worship.mp4";
import Us from "../../assets/us.jpg";
import House from "../../assets/House.jpg";
import Leader from "../../assets/leadership.jpg";
import WorshipPic from "../../assets/start-worship.jpg";
import Welcome from "../../assets/welcome.jpg";
import Holder from "../../assets/holder.jpg";
import Pic5 from "../../assets/515.jpg";
import Cumber from "../../assets/cumberland.jpg";
import Trilith from "../../assets/trilith.jpg";
import Community from "../../assets/community.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from '../Footer'
import { FiChevronDown } from "react-icons/fi";

import "./index.scss";

const Start = () => {
  return (
    <>
      <div className="startCon">
        <div className="main-start">
          <div className="godCon">
            <div className="for-god">
              <div className="god-text">
                <h1>FOR GOD. FOR PEOPLE. FOR THE CITY. FOR THE WORLD.</h1>
              </div>
              <div className="text-vid">
                <div className="text-side">
                  <h3>EVERYBODY CAN KNOW THEY MATTER TO GOD</h3>
                  <p>
                    Our desire is that everybody at Passion City Church feels
                    seen and can find lasting community. This gospel is for
                    everybody and everyone has a place here. Read below to learn
                    more about where to start.
                  </p>
                </div>
                <div className="video-side">
                  <div className="video">
                    <video src={Worship} autoPlay loop muted></video>
                  </div>
                  <div className="difference"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="jesusCon">
            <div className="jesus">
              <h1>JESUS IS OUR LEAD STORY</h1>
              <div className="jesus-text">
                <p>
                  <b>In fact, Jesus is our only story.</b> he is preeminent in
                  our hearts and central in all we do. We believe Jesus is
                  unrivaled in history and eternity. Our goal is not just to get
                  people to church, Ultimately, we want people to meet Jesus.
                  That's why we say we are a Jesus church. We really don't want
                  to be identified by any other name.
                </p>
              </div>
            </div>
          </div>
          <div className="kingdomCon">
            <div className="kingdom">
              <div className="kingdom-text">
                <h5>WE ARE KINGDOM PEOPLE</h5>
                <h1>WHO WE ARE</h1>
              </div>
              <div className="kingdom-pics">
                <Link className="k-pics kp1">
                  <img src={Us} alt="" />
                  <div className="k-contents">
                    <h5>WHO WE ARE AND WHAT WE BELIEVE</h5>
                    <h1>LEARN ABOUT US</h1>
                    <h6>LEARN MORE</h6>
                    <p>
                      We are a Jesus Church. A small tribe of His followers
                      coonected by our common faith and a deep desire to see our
                      city [and the world] come to know His power and beauty.
                      Learn more about who we are and what we believe.
                    </p>
                  </div>
                </Link>
                <Link className="k-pics kp2">
                  <img src={House} alt="" />
                  <div className="k-contents">
                    <h5>WHO WE ARE AND WHAT WE BELIEVE</h5>
                    <h1>LEARN ABOUT US</h1>
                    <h6>LEARN MORE</h6>
                    <p>
                      We are a Jesus Church. A small tribe of His followers
                      coonected by our common faith and a deep desire to see our
                      city [and the world] come to know His power and beauty.
                      Learn more about who we are and what we believe.
                    </p>
                  </div>
                </Link>
                <Link className="k-pics kp3">
                  <img src={Leader} alt="" />
                  <div className="k-contents">
                    <h5>WHO WE ARE AND WHAT WE BELIEVE</h5>
                    <h1>LEARN ABOUT US</h1>
                    <h6>LEARN MORE</h6>
                    <p>
                      We are a Jesus Church. A small tribe of His followers
                      coonected by our common faith and a deep desire to see our
                      city [and the world] come to know His power and beauty.
                      Learn more about who we are and what we believe.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="us-picsCon">
            <div className="us-pics">
              <div className="uspic1">
                <img src={WorshipPic} alt="" />
              </div>
              <div className="uspic2">
                <img src={WorshipPic} alt="" />
              </div>
              <div className="uspic-contents">
                <div className="overlaid"></div>
                <h1>JOIN US ON A SUNDAY</h1>
                <p>
                  Our rhythm at Passion City Church is to gather together to
                  worship and scatter to serve. We have something for everyone
                  on Sundays so we hope you join us for an upcoming Gathering.
                  Learn more about Sundays at each of our locations below.
                </p>

                <div className="location-drop">
                  <div className="dropdown">
                    <button className="drop-btn">
                      CHOOSE A LOCATION <FiChevronDown />
                    </button>
                    <div className="menu">
                      <ul>
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
              </div>
            </div>
          </div>
          <div className="signupCon">
            <div className="signUp">
              <h2>Sign Up for Email Updates</h2>
              <p>
                Sign up for email updates from Passion City Church to stay up to
                date on our gathering times, locations, and upcoming moments at
                Passion City Church.
              </p>
              <form action="">
                <label htmlFor="firstname">First name</label>
                <input type="text" id="firstname" />
                <label htmlFor="lastname">Last name</label>
                <input type="text" id="lastname" />
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" />
                <button type="submit">SIGN UP</button>
              </form>
            </div>
          </div>
          <div className="welcomeCon">
            <div className="welcome">
              <div className="welcome-left">
                <div className="wel-top">
                  <h1>WELCOME TO CHURCH</h1>
                </div>
                <div className="wel-down">
                  <h3>DISCOVER THE HEARTBEAT OF PASSION CITY CHURCH</h3>
                  <p>
                    Welcome to Church is a 2-part opportunity to discover the
                    heartbeat of Passion City Church. Join us to learn more
                    about the beliefs, culture, family and get the chance to
                    meet the leadership of our house. Sign up for an upcoming
                    session today!
                  </p>
                  <div className="location-drop">
                    <div className="dropdown">
                      <button className="drop-btn">
                        CHOOSE A LOCATION <FiChevronDown />
                      </button>
                      <div className="menu">
                        <ul>
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
                </div>
              </div>
              <div className="welcome-right">
                <img src={Welcome} alt="" />
              </div>
            </div>
          </div>
          <div className="grow">
            <div className="grow-top">
              <h1>GROW CLOSER TO JESUS</h1>
            </div>
            <div className="grow-bot">
              <Link className="k-pics kp1">
                <img src={Us} alt="" />
                <div className="k-contents">
                  <h5>WHO WE ARE AND WHAT WE BELIEVE</h5>
                  <h1>LEARN ABOUT US</h1>
                  <h6>LEARN MORE</h6>
                  <p>
                    We are a Jesus Church. A small tribe of His followers
                    coonected by our common faith and a deep desire to see our
                    city [and the world] come to know His power and beauty.
                    Learn more about who we are and what we believe.
                  </p>
                </div>
              </Link>
              <Link className="k-pics kp1">
                <img src={House} alt="" />
                <div className="k-contents">
                  <h5>WHO WE ARE AND WHAT WE BELIEVE</h5>
                  <h1>LEARN ABOUT US</h1>
                  <h6>LEARN MORE</h6>
                  <p>
                    We are a Jesus Church. A small tribe of His followers
                    coonected by our common faith and a deep desire to see our
                    city [and the world] come to know His power and beauty.
                    Learn more about who we are and what we believe.
                  </p>
                </div>
              </Link>
              <Link className="k-pics kp1">
                <img src={Leader} alt="" />
                <div className="k-contents">
                  <h5>WHO WE ARE AND WHAT WE BELIEVE</h5>
                  <h1>LEARN ABOUT US</h1>
                  <h6>LEARN MORE</h6>
                  <p>
                    We are a Jesus Church. A small tribe of His followers
                    coonected by our common faith and a deep desire to see our
                    city [and the world] come to know His power and beauty.
                    Learn more about who we are and what we believe.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="holderCon">
            <div className="holder">
              <div className="holder-left">
                <div className="hol-top">
                  <h1>BECOME A DOOR HOLDER</h1>
                </div>
                <div className="hol-down">
                  <h3>THAT WE MAY</h3>
                  <p>
                    Our Door Holders are crucial to our House. Door Holders are
                    those who've been on the inside and experienced Jesus and
                    are willing to open the door for others to be welcomed in.
                    Learn more about what it means to be a Door Holder at
                    Passion City Church!
                  </p>
                  <a href="#">
                    <b> BECOME A DOOR HOLDER </b>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
              <div className="holder-right">
                <img src={Holder} alt="" />
              </div>
            </div>
          </div>
          <div className="start-text">
            <div className="text">
              <h3>
                Better is one day in your courts than a thousand elsewhere; I
                would rather be a doorkeeper [door holder] in the house of my
                God than dwell in the tents of the wicked. – Psalm 84:10
              </h3>
            </div>
          </div>
          <div className="communityCon">
            <div className="community">
            <div className="overlay"></div>
              <img src={Community} alt="" width={500} />
              <div className="comm-contents">
                <h5>BIG CHURCH MADE SMALL</h5>
                <h1>COMMUNITY</h1>
                <p>
                  Our desire is for everyone who attends Passion City Church to
                  find lasting community here. Through Community Groups and
                  Connect Groups, you can find smaller groups of people to live
                  life with here. Click below to learn more and find your group!
                </p>
                <a href="#"><b>FIND COMMUNITY</b> <FontAwesomeIcon icon={faArrowRight} /> </a>
              </div>
            </div>
          </div>
          <div className="selectCon">
            <div className="select">
                <div className="select-top">
                    <h6>SELECT A LOCATION</h6>
                    <h1>LEARN MORE ABOUT OUR ATLANTA LOCATIONS</h1>
                </div>
                <div className="select-bot">
                <Link className="k-pics kp1">
                <img src={Pic5} alt="" />
                <div className="k-contents">
                  <h6>515 GARSON DRIVE</h6>
                  <h1>515</h1>
                  <h6>LEARN MORE</h6>
                 
                </div>
              </Link>
              <Link className="k-pics kp1">
                <img src={Cumber} alt="" />
                <div className="k-contents">
                  <h6>2625 CUMBERLAND PKWY</h6>
                  <h1>CUMBERLAND</h1>
                  <h6>LEARN MORE</h6>
                 
                </div>
              </Link>
              <Link className="k-pics kp1">
                <img src={Trilith} alt="" />
                <div className="k-contents">
                  <h6>250 TRILITH PARKWAY</h6>
                  <h1>TRILITH</h1>
                  <h6>LEARN MORE</h6>
                 
                </div>
              </Link>
                </div>
            </div>

          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Start;
