import React, { useState } from 'react'
import "./MyStyles.scss"
import TopBar from './Components/TopBar/TopBar'
import Intro from "./Components/Intro/Intro"
import Portfolio from  "./Components/Portfolio/Portfolio"
import Testimonial from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Works from "./Components/Works/Works"
import Menu from './Components/Menu/Menu'

function App() {

  const[menuOpen,setMenuOpen] = useState(false);


  return (
    <>
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen ={menuOpen} setMenuOpen={setMenuOpen} />
        
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




// 54:51 / 2:38:49

// •
// React Sidebar menu

