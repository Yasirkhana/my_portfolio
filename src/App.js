import React from 'react'
import "./MyStyles.scss"
import TopBar from './Components/TopBar/TopBar'
import Intro from "./Components/Intro/Intro"
import Portfolio from  "./Components/Portfolio/Portfolio"
import Testimonial from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Works from "./Components/Works/Works"
 
function App() {
  return (
    <>
    <div className="app">
      <TopBar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
    </>

  )
}

export default App