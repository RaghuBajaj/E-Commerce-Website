import "./Navbar.css";
import { useContext, useEffect } from "react";
import { PageContext } from "../context/context";
import { assets } from "./assets";
import logo from "../components/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const abcd = useContext(PageContext);
  const count = abcd.CartCount.current;
  useEffect(() => {}, [count]);
  return (
    <div className="navbar">
      <img src={logo} className="img_nav" alt=""></img>

      {/* <ul className="ul1">
        <li className="li" onClick={()=>{abcd.setPage('Home')}} >HOME</li>
        <li className="li" onClick={()=>{abcd.setPage('Collection')}}>COLLECTION</li>
        <li className="li"  onClick={()=>{abcd.setPage('About')}}>ABOUT</li>
        <li className="li" onClick={()=>{abcd.setPage('Contact')}}>CONTACT</li>
      </ul> */}

      {/* <ul className="ul2">
        <li className="li" onClick={()=>{abcd.setPage('Cart')}}>
          <img src={assets.cart_icon} className="nav_imgs" alt=""></img>
          <p className="count_nav">{count}</p>
        </li>
        <li className="li" onClick={()=>{abcd.setPage('Profile')}}>
          <img src={assets.profile_icon} className="nav_imgs" alt=""></img>
        </li>
        <li className="li" onClick={()=>{abcd.setPage('Orders')}}>ORDERS</li>
        <li className="li" onClick={()=>{abcd.setPage('Login')}}>LOGIN</li>
      </ul> */}

      <ul className="ul1">
        <NavLink to="/" className="li">
          HOME
        </NavLink>
        <NavLink to="/Collection" className="li">
          COLLECTION
        </NavLink>
        <NavLink to="/About" className="li">
          ABOUT
        </NavLink>
        <NavLink to="/Contact" className="li">
          CONTACT
        </NavLink>
      </ul>

      <ul className="ul2">
        <NavLink to="/Cart" className="li">
          <img src={assets.cart_icon} className="nav_imgs" alt=""></img>
          <p className="count_nav">{count}</p>
        </NavLink>
        <NavLink to="/Profile" className="li">
          <img src={assets.profile_icon} className="nav_imgs" alt=""></img>
        </NavLink>
        <NavLink to="/Orders" className="li">
          ORDERS
        </NavLink>
        <NavLink to="/Login" className="li">
          LOGIN
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
