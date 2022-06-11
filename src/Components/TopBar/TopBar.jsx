import "./Topbar.scss"
import { Person } from "@material-ui/icons"


function TopBar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">YASIRKHANA.</a>
          <div className="itemContainer">
            <Person/>
            
          </div>        
        </div>
        <div className="right">
          this is riht
        </div>
      </div>
    </div>
  )
}

export default TopBar