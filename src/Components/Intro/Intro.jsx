import "./Intro.scss"
import React, { useEffect, useRef } from "react"
import { init } from 'ityped'

function Intro() {
  const textRef  =useRef();

  useEffect(()=>{
    
    init(textRef.current,
       { showCursor: false,
         strings: ['Developer',
          'Designer', 'Marketer' ] })


  },[])

  return (
    <div className="intro" id="intro">
      <div className="leftPart">
        <div className="imgConatiner">
          <img src="assets/mypic.png" alt="Yasir" />
        </div>
      </div>
      <div className="rightPart">
        <div className="wrapper">
          <h2>Hi there, I'm </h2>
          <h1>Yasir Ahmad</h1>
          <h3>Freelance <span ref={textRef }></span></h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="down arrow" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro