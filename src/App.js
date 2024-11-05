import React, { useContext, useEffect } from 'react'
import "./App.css";
import Navbar from './ECommerceComponents/Navbar'
import Home from './ECommerceComponents/Home'
import Collection from './ECommerceComponents/Collection'
import About from './ECommerceComponents/About'
import Contact from './ECommerceComponents/Contact'
import Cart from './ECommerceComponents/Cart'
import Profile from './ECommerceComponents/Profile';
import Login from './ECommerceComponents/Login'
import Orders from './ECommerceComponents/Orders'
import { PageContext } from './context/context';
import SelectItem from './ECommerceComponents/SelectItem';
// import Subscribe from './ECommerceComponents/Subscribe';
// import Footer from './ECommerceComponents/Footer';
import Delivery from './ECommerceComponents/Delivery';
import { Route, Routes } from 'react-router-dom';

function App() {
  const abcd = useContext(PageContext);
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (<>
   <div className='full'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/Home' element={<Home /> } />
        <Route path='/About' element={<About />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Delivery' element={<Delivery />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/SelectItem' element={<SelectItem item={abcd.selectInfo}/>} />
      </Routes>


      {/* <div className='navigatedTo' >
        {(abcd.page === 'Home') && <Home />}
        {(abcd.page === 'About') && <About />}
        {(abcd.page === 'Collection') && <Collection />}
        {(abcd.page === 'Contact') && <Contact />}
        {(abcd.page === 'Cart') && <Cart />}
        {(abcd.page === 'Delivery') &&  <Delivery />}
        {(abcd.page === 'Login') && <Login />}
        {(abcd.page === 'Profile') && <Profile/> }
        {(abcd.page === 'Orders') && <Orders />}
        {(abcd.page === 'SelectItem') && <SelectItem item={abcd.selectInfo} />}
      </div>     */}

      {/* {(abcd.page !=='Login') && <Subscribe/>}
      {(abcd.page !=='Login') && <Footer/>}
      {(abcd.page !=='Login') && <div className='copyright'>Copyright 2024@ forever.com - All Rights Reserved.</div>} */}

    </div>
  </>
  );
}

export default App; 
