import React, { useState } from 'react'
import Vid1 from '../../../assets/locate1.mp4'
import Vid2 from '../../../assets/CBL_V1.mp4'
import Vid3 from '../../../assets/TrilithLoop.mp4'
import Vid4 from '../../../assets/DC_V1.mp4'


import './index.scss'


const Locations = () => {
  const [hoverVid1, setHoverVid1] = useState(false)
  const [hoverVid2, setHoverVid2] = useState(false)
  // const [hoverVid3, setHoverVid3] = useState(false)
  // const [hoverVid4, setHoverVid4] = useState(false)

  

 
  return (
    <div className='addresses'>
       <div className="title">
        <h1>LOCATIONS</h1>
      </div>
      <div className="tril">
        <div className="overlay"></div>
          <div className="pics">
            <video
              src={Vid1}
              autoPlay loop muted
              className={`img1 ${hoverVid1 ? "show" :''}`}
            />
            <video src={Vid2} autoPlay loop muted className={`img2 ${hoverVid2 ? "show" :''}`} />

          </div>
        <div className="tril-text">
            <div className="main-text">
            <div className="place">CITY CHURCH DISTRICT</div>
          <div
            // className="bloom"
            onMouseEnter={() => setHoverVid1(true)}
            onMouseLeave={() => setHoverVid1(false)}
          >
            <h1>AMSTERDAM CITY CHURCH</h1>
            <h2 className={`bloom ${hoverVid1 ? "shows" :''}`}>Amsterdam, NL</h2>
          </div>
          <div 
        //   className="passion-kids" 
            onMouseEnter={() => setHoverVid2(true)}
            onMouseLeave={() => setHoverVid2(false)}>
            <h1>HARBOUR CITY CHURCH</h1>
            <h2 className={`passion-kids ${hoverVid2 ? "shows" :''}`}>Rotterdam, NL</h2>
          </div>
          
            </div>
            <div className="transit-div">
                <div className={`six ${hoverVid1 ? "showed" :''}`}> </div>
                <div className={`pas ${hoverVid2 ? "showed" :''}`}></div>
                {/* <div className={`stud ${hoverVid3 ? "showed" :''}`}></div> */}
                {/* <div className={`hold ${hoverVid4 ? "showed" :''}`}></div> */}

            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Locations