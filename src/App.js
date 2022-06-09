import React from 'react'
import "./Components/MyStyles.css"
import TopBar from './Components/TopBar/TopBar'
import Intro from "./Components/Intro/Intro"
import Portfolio from  "./Components/Portfolio/Portfolio"
import Testimonial from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Works from "./Components/Works/Works"
 
function App() {
  return (
    <>
    <TopBar/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
    </div>
    </>

  )
}

export default App