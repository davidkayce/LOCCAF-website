import Amsterdam from '../../assets/amsterdam.mp4'
import Slider from './Slider'
import Locations from './Locations'
import './index.scss'
import Messages from './Messages'
import Events from './Events'
import Footer from '../Footer'
import { useEffect } from 'react'


const Home = () => {
  useEffect(() => {
    document.title = "City Church District"
 }, []);
  return (
    <section>
    <div className='main'>
      <div className="video">
      <div className="overlay">
      </div>
      <video src={Amsterdam} autoPlay loop muted className='vid'/>
      <div className="contents">
        <div className="in-contents">
          <div className="watch">
            <h1>WATCH</h1>
          </div>
         
        </div>
        <div className='join'>
          <div className="text">
            <h5>JOIN US FOR AN ONLINE GATHERING</h5>
            <p>We gather online each Sunday at 9:30a and 11:45a ET and would love for you to join us!</p>
            <h4><a href="#">JOIN US &rarr;</a></h4>
          </div>
      </div>
       </div>
      </div>
      

       {/* Place in the church */}

       
       <div className="contain">
        <div className='carousel'><Slider/></div>
        <Locations/>
       </div>
       {/* <Messages/> */}
       <Events/>
       <Footer/>

       
        
    </div>
    </section>
  )
}

export default Home