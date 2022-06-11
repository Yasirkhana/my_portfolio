import "./Topbar.scss"
import React from "react"
import { Person } from "@material-ui/icons"
import { Email } from "@material-ui/icons"

function TopBar() {
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">YASIRKHANA.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+92 302 8069709</span>
            
          </div>   
          <div className="itemContainer">
            <Email className="icon"/>
            <span>khan10055yasir@gmail.com</span>
            
          </div>        
        </div>
        <div className="right">
          <div className="humburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar