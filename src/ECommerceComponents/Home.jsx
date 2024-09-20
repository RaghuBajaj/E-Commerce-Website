import React, { useEffect, useState } from "react";
import "./Home.css";
import { assets, products } from "./assets";
import ItemBox from "./ItemBox";
import Policy from "./Policy";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function Home(props) {
  const [latest, setLatest] = useState([]);
  const [best, setBest] = useState([]);
  function search1() {
    function checklatest(itm) {
      return itm.price < 150;
    }
    const laColl = products.filter(checklatest);
    setLatest(laColl);

    function checkbest(itm) {
      return itm.bestseller === true;
    }
    const beColl = products.filter(checkbest);
    setBest(beColl);
  }
  useEffect(() => {
    setBest(null);
    setLatest(null);
    search1();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="H_box">
        <div className="H_half">
          <div className="half">
            <p className="line"></p>
            <p className="h_l1"> OUR BESTSELLERS</p>
          </div>
          <h1>Latest Arrivals</h1>
          <div className="half">
            <p className="h_l1">SHOP NOW</p>
            <p className="line"></p>
          </div>
        </div>
        <img src={assets.hero_img} className="h_img" alt=""></img>
      </div>
      <div className="lat_Col">
        <p className="lat">
          LATEST <span className="col">COLLECTIONS</span>
        </p>
        <p className="line1"></p>
      </div>
      <p className="display">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        ipsam earum est alias?{" "}
      </p>
      <div className="latest">
        {latest.length > 0 ? (
          latest.map((itm, index) => {
            return (
              <div key={index} className="itembox flex">
                <ItemBox itm={itm} />
              </div>
            );
          })
        ) : (
          <div> Nothing to show </div>
        )}
      </div>
      <div className="lat_Col">
        <p className="lat">
          BEST <span className="col">SELLERS</span>
        </p>
        <p className="line1"></p>
      </div>
      <p className="display">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        ipsam earum est alias?{" "}
      </p>
      <div className="latest">
        {best.length > 0 ? (
          best.map((itm, index) => {
            return (
              <div key={index} className="itembox flex">
                <ItemBox itm={itm} />
              </div>
            );
          })
        ) : (
          <div> Nothing to show </div>
        )}
      </div>
      <Policy />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
