import "./Topbar.scss"
import PersonIcon from '@material-ui/icons';


function TopBar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">YASIRKHANA.</a>
          <div className="itemContainer">
            <PersonIcon/>
            
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