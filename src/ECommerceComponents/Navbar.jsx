import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../context/context";
import { assets } from "./assets";
import logo from "../components/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const {CartCount,user} = useContext(PageContext);
  const count = CartCount.current;
  const [liActive, setLiActive] = useState("");
  const [logedIn, setLogedIn] = useState(false);
  const check = ()=>{
    if(user && Object.keys(user).length > 0){
      setLogedIn(true);
    }
    else{
      setLogedIn(false);
    }
  };
  useEffect(() => {}, [count]);
  useEffect(() => {
    check();
    console.log('check ....');
  }, [user]);
  return (
    <div className="navbar">
      <img src={logo} className="img_nav" alt=""/>

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
        <NavLink to="/Home" className={liActive === "1" ? 'li li_active':'li li1'} onClick={()=>{setLiActive('1');}}>
          HOME
        </NavLink>
        <NavLink to="/Collection" className={liActive === "2" ? 'li li_active':'li li1'} onClick={()=>{setLiActive('2');}}>
          COLLECTION
        </NavLink>
        <NavLink to="/About" className={liActive === "3" ? 'li li_active':'li li1'} onClick={()=>{setLiActive('3');}}>
          ABOUT
        </NavLink>
        <NavLink to="/Contact" className={liActive === "4" ? 'li li_active':'li li1'} onClick={()=>{setLiActive('4');}}>
          CONTACT
        </NavLink>
      </ul>

      <ul className="ul2">
        <NavLink to="/Cart" className={liActive === "5" ? 'li li_active':'li li1'} onClick={()=>{setLiActive('5');}}>
          <img src={assets.cart_icon} className="nav_imgs" alt=""></img>
          <p className="count_nav">{count}</p>
        </NavLink>
        <NavLink to="/Orders" className={liActive === "7" ? 'li li_active':'li li1'} onClick={()=>{setLiActive('7');}}>
          ORDERS
        </NavLink>
        {logedIn === true ? (
           <NavLink to="/Profile" className={liActive === "6" ? 'li li_active':'li li1'} onClick={()=>{setLiActive('6');}}>
           <img src={assets.profile_icon} className="nav_imgs" alt=""></img>
         </NavLink>
          // <NavLink to="/Login" className={liActive === "8" ? 'li li_active':'li li1'} onClick={()=>{setLiActive('8');}}>
          // LOGOUT
          // </NavLink>
        ):( 
          <NavLink to="/Login" className={liActive === "8" ? 'li li_active':'li li1'} onClick={()=>{setLiActive('8');}}>
          LOGIN
          </NavLink>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
