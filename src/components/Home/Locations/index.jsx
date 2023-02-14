import React, { useState } from 'react'
import churchVid  from '../../../assets/church-vid.mp4'
import Game from '../../../assets/rps.mp4'

import './index.scss'


const Locations = () => {
  const [hoverVid1, setHoverVid1] = useState(false)
  const [hoverVid2, setHoverVid2] = useState(false)
  const [hoverVid3, setHoverVid3] = useState(false)
  const [hoverVid4, setHoverVid4] = useState(false)

  // function show (e){
  //    setHoverVid1(true)
  //    if (hoverVid1 === true){
  //     return(
  //       <video src={churchVid} autoPlay loop muted className='vide vid1' />
  //     )
  //    }
  //    console.log(e.target)

  // }

 
  return (
    <div className='addresses'>
        <div className='add-title'>
            <h1>LOCATIONS</h1>
        </div>
        <div className='locate'>
            <div className="videos">
              <video src={churchVid} autoPlay loop muted className={`vide vid1 ${hoverVid1 ? "" : "hidden"}`} />
              <video src={Game} autoPlay loop muted className={`vide vid2 ${hoverVid2 ? "" : "hidden"}`}/>
              <video src={churchVid} autoPlay loop muted className={`vide vid3 ${hoverVid3 ? "" : "hidden"}`}/>
              <video src={Game} autoPlay loop muted className={`vide vid4 ${hoverVid4 ? "" : "hidden"}`}/>
            </div>
            <div className="locations">
              <h5>PASSION CITY CHURCH</h5>
              <div className="515" onMouseEnter={() => setHoverVid1(true)} onMouseLeave={() => setHoverVid1(false)}>
              <h1 className='l515'>515</h1>
              </div>
              <div className="cumber" onMouseEnter={() => setHoverVid2(true)} onMouseLeave={() => setHoverVid2(false)}>
                <h1>CUMBERLAND</h1>
              </div>
              <div className="tril" onMouseEnter={() => setHoverVid3(true)} onMouseLeave={() => setHoverVid3(false)} >
                <h1>TRILITH</h1>
              </div> 
              <div className="dc" onMouseEnter={() => setHoverVid4(true)} onMouseLeave={() => setHoverVid4(false)}>
                <h1>WASHINGTON D.C.</h1>
              </div>
            </div>
        </div>
        {/* <div className="rub">
          <h1>gvh.hvh;hvhvh;ucy;cyucyv;;lkkllllubjbljhvyctcgcggclotdot7s5sa43irslktdotdotdso</h1>
        </div> */}
    </div>
  )
}

export default Locations