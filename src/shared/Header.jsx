import image from "../assets/images/—Pngtree—movie board icon_4751062.png"
import "../Style/Header.css"
import { NavLink } from "react-router-dom";



function Header() {
  return (
<header>
    
    <div className="image">
        <NavLink to="/">
        <img src={image} alt="logo" />
        </NavLink>
      </div>  
      
        <ul id="sidebar">
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/sign-in">Sign-in</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
  </header>
  )
}

export default Header