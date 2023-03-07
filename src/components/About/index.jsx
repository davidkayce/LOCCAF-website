import React from "react";
import We from "../../assets/ACC.jpg";
import "./index.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Prayer from "../../assets/Prayer.jpg";
import { Link } from "react-router-dom";
import History from "../../assets/history.jpg";
import Footer from '../Footer'
import { useState } from "react";

const About = () => {
  const [checked, setchecked] = useState("");

  return (
    <section>
      <div className="aboutCon">
        <div className="abouts">
          <div className="about">
            <div className="usCon">
              <div className="us">
                <div className="us-left">
                  <div className="top">
                    <h1>US</h1>
                  </div>
                  <div className="left-body">
                    <div className="bod-top">
                      <h3>GLORY TO GOD</h3>
                      <h3>EXTRAVAGANT WORSHIP</h3>
                    </div>
                    <div className="body-bot">
                      <p>
                        We are a multicultural church that aims to: connect
                        people with God, improve their personal relationship
                        with the Lord, and provide them with a safe home full of
                        love, attention, and support.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="us-right">
                  <img src={We} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="belief-con">
          <div className="belief">
            <h1>WHAT WE BELIEVE</h1>
            <p>
              We live in shifting times but are rooted in eternal truths, the
              teachings of Holy Scripture. Here at Passion City Church we are
              guided by certain foundational beliefs and shaping values.
            </p>
            <h3>Read more about our Theological Truths below.</h3>
          </div>
        </div>
        <div className="truthCon">
          <div className="truth">
            <h5>THEOLOGICAL TRUTHS</h5>
            <div className="close-divs">
              <div className="container" onClick={() => setchecked("one")}>
                <h1>01</h1>
                <div className="contain">
                  <div className="tops">
                    <h3>KNOWABLE TRUTH</h3>
                    <IoIosCloseCircleOutline
                      className={`number1 ${checked === "one" ? "rotate" : ""}`}
                    />
                  </div>
                  <div className={`close ${checked === "one" ? "show" : ""}`}>
                    <p>
                      We believe in the accuracy, truth, authority and power of
                      the Holy Scriptures as the Word of God.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container" onClick={() => setchecked("two")}>
                <h1>02</h1>
                <div className="contain">
                  <div className="tops">
                    <h3>ONE GOD </h3>
                    <IoIosCloseCircleOutline
                      className={`number1 ${checked === "two" ? "rotate" : ""}`}
                    />
                  </div>
                  <div className={`close ${checked === "two" ? "show" : ""}`}>
                    <p>
                      We believe in a personal God who has revealed Himself as
                      One. God exists in three persons–Father, Son and Holy
                      Spirit–each distinct, yet all of One essence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container" onClick={() => setchecked("three")}>
                <h1>03</h1>
                <div className="contain">
                  <div className="tops">
                    <h3>UNIQUENESS OF CHRIST</h3>
                    <IoIosCloseCircleOutline
                      className={`number1 ${
                        checked === "three" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={`close ${checked === "three" ? "show" : ""}`}>
                    <p>
                      We believe Jesus Christ to be the virgin born Son of God
                      who lived in flesh, died for the sins of the world, was
                      buried, rose again, and ascended to the Father according
                      to the Scriptures.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container" onClick={() => setchecked("four")}>
                <h1>04</h1>
                <div className="contain">
                  <div className="tops">
                    <h3>GRACE LIFE</h3>
                    <IoIosCloseCircleOutline
                      className={`number1 ${
                        checked === "four" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={`close ${checked === "four" ? "show" : ""}`}>
                    <p>
                      We believe that the death of Jesus Christ was the final
                      and complete sacrifice for the sins of humanity. Salvation
                      is obtained by grace through faith in Jesus Christ. All
                      who repent of their sins and receive Jesus Christ as
                      Savior and Lord are born again into eternal life as
                      children of God.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container" onClick={() => setchecked("five")}>
                <h1>05</h1>
                <div className="contain">
                  <div className="tops">
                    <h3>INDWELLING POWER</h3>
                    <IoIosCloseCircleOutline
                      className={`number1 ${
                        checked === "five" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={`close ${checked === "five" ? "show" : ""}`}>
                    <p>
                      We believe that life on earth is to be lived in the power
                      of the Holy Spirit, who indwells believers, enabling them
                      to live distinctive lives in the life and power of Christ,
                      making famous the Father in heaven.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container" onClick={() => setchecked("six")}>
                <h1>06</h1>
                <div className="contain">
                  <div className="tops">
                    <h3>GOD'S PEOPLE</h3>
                    <IoIosCloseCircleOutline
                      className={`number1 ${checked === "six" ? "rotate" : ""}`}
                    />
                  </div>
                  <div className={`close ${checked === "six" ? "show" : ""}`}>
                    <p>
                      We believe that those who have placed their faith in
                      Christ are knit together in one Body, the Church, a
                      distinctive community of faith expressed in local
                      clusters, engaging culture on every front with God’s hope
                      and love … a Church for which Christ will personally
                      return.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container" onClick={() => setchecked("seven")}>
                <h1>07</h1>
                <div className="contain">
                  <div className="tops">
                    <h3>THE KNOWLEDGE OF THE HOLY</h3>
                    <IoIosCloseCircleOutline
                      className={`number1 ${
                        checked === "seven" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={`close ${checked === "seven" ? "show" : ""}`}>
                    <p>
                      Created by and for God, we seek to passionately pursue an
                      intimate relationship with God in response to His great
                      love for us. To know God is the ultimate treasure of the
                      soul.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container" onClick={() => setchecked("eight")}>
                <h1>08</h1>
                <div className="contain">
                  <div className="tops">
                    <h3>WHOLE LIFE WORSHIP</h3>
                    <IoIosCloseCircleOutline
                      className={`number1 ${
                        checked === "eight" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={`close ${checked === "eight" ? "show" : ""}`}>
                    <p>
                      More than outward forms, theologically informed worship
                      must encompass our entire existence, whereby in all
                      circumstances our words and actions bring glory to God.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container" onClick={() => setchecked("nine")}>
                <h1>09</h1>
                <div className="contain">
                  <div className="tops">
                    <h3>HIS RENOWN</h3>
                    <IoIosCloseCircleOutline
                      className={`number1 ${
                        checked === "nine" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={`close ${checked === "nine" ? "show" : ""}`}>
                    <p>
                      We echo and affirm the Westminster confession: “the chief
                      end of man is to glorify God and enjoy Him forever.” All
                      things exist for the glory of God.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container last" onClick={() => setchecked("ten")}>
                <h1>10</h1>
                <div className="contain">
                  <div className="tops">
                    <h3>COMMUNITY OF FAITH</h3>
                    <IoIosCloseCircleOutline
                      className={`number1 ${checked === "ten" ? "rotate" : ""}`}
                    />
                  </div>
                  <div className={`close ${checked === "ten" ? "show" : ""}`}>
                    <p>
                      The worldwide Body of Christ function best in localized
                      communities of believers. Thus we seek to plant churches
                      that amplify His fame, strengthen the lives of people and
                      repair communities so that all people can know the healing
                      power and grace of the Savior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus">
          <div className="about">
            <h1>ABOUT OUR MISSION</h1>
            <p>
              The mission of Amsterdam City Church is to go into the world and
              preach the Gospel, to share the grace of our Lord Jesus Christ, to
              spread the Love of God and to show the sweet fellowship of the
              Holy Spirit. God has reconciled us to Himself through Jesus Christ
              and He has given us the ministry of reconciling Him back to you (2
              Corinthians 5:18-21). We are a glorious church to possess the
              nation.
            </p>
          </div>
        </div>
        <div className="us-picsCon">
          <div className="us-pics">
            <div className="pics">
              <div className="uspic1">{/* <img src={Prayer} alt="" /> */}</div>
              <div className="uspic2">
                <div className="overlaid"></div>
                <img src={Prayer} alt="" />
              </div>
            </div>

            <div className="uspic-contents">
              <h1>WHY YOU SHOULD JOIN US</h1>
              <p>
                Amsterdam City Church exist to lead people into a growing
                relationship with Jesus Christ. We want to help you discover
                what it means to have a RELATIONSHIP with Jesus Christ. Our
                mission is to spread the word of God and His love. We believe
                that the more you know Jesus the more you know you!
              </p>
            </div>
          </div>
        </div>
        <div className="weCon">
          <div className="leftCon">
            <div className="left">
              <h4>We are: for God. for people. for the city. for the world.</h4>
              <p>
                Amsterdam City Church (ACC) is a church that was opened on
                Sunday 4 October 2020. The church consists of many young people
                and is one of the many branches of The Church of Pentecost
                Holland. Amsterdam City Church is also referred to as ACC.
              </p>
              <p>
                Amsterdam City Church is a multicultural church that aims to:
                connect people with God, improve their personal relationship
                with the Lord, and provide them with a safe home full of love,
                attention, and support.
              </p>
              <p>
                The City Church district’s overseer is John Angoh who also
                presides at ACC.
              </p>
              <p>
                The national head of The Church of Pentecost Holland is Apostle
                Samuel Obeng Eshun.
              </p>
              <p>
                Since our inception we have seen God do miraculous things. We
                want to personally invite you to come be part of the journey.
              </p>
              <div className="sunday">
                <h5>Our church services take place every week on:</h5>
                <p>Fridays from 20:00u. till 21:30u.</p>
                <p>Sundays from 10:45u. till 12:30u.</p>
              </div>
            </div>
            <Link to="/trilith/sundays">
              <h4>JOIN US FOR A SUNDAY &rarr;</h4>
            </Link>
          </div>
          <div className="right">
            <div className="top">
              <h1>WHO WE ARE</h1>
            </div>
            <div className="pic">
              <img src={History} alt="" width={500} />
            </div>
          </div>
        </div>
        <div className="vision-con" id="vision">
          <div className="vision">
            <h1>OUR VISION</h1>
            <p>
              The vision of Amsterdam City Church is to spread the love of God,
              which is the Gospel of our Lord Jesus Christ, that all men may be
              saved and find their true identity in Christ. (John 3:16).
            </p>
            <p>
              We believe that the more you know Jesus, the more you know you.
              Because ‘in Him, we live and move and have our very being. Our aim
              is that all men may grow in the gifts of the Holy Spirit so that
              we can experience the power of Christ and bear the fruit of the
              Holy Spirit to serve the community, nation, and the world at
              large. In fact, it is all about Jesus. Jesus is the answer to all
              questions.
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    </section>
  );
};

export default About;
