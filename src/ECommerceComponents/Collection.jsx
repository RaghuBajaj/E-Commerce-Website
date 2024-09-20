import React, { useCallback, useEffect, useState } from "react";
import "./Collection.css";
import ItemBox from "./ItemBox";
import { products } from "./assets";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function Collection() {
  const [ctry, setCtry] = useState("Men");
  const [subCtry, setSubCtry] = useState("Topwwear");
  const [items, setItems] = useState([]);
  console.log(ctry);
  console.log(subCtry);
  console.log(items);
  const search = useCallback(() => {
    function checkCollection(itm) {
      return itm.category === ctry && itm.subCategory === subCtry;
    }
    const filtered = products.filter(checkCollection);
    setItems(filtered);
  }, [ctry, subCtry]);
  useEffect(() => {
    search();
  }, [ctry, subCtry, search]);

  return (
    <>
      <div className="titles_fetch">
        <div className="filters">FILTERS</div>
        <div className="head_col">
          <div className="allCollection_Col">
            <p className="Col_lat">ALL</p>
            <span className="Col_col">COLLECTIONS</span>
            <p className="Col_line1"></p>
          </div>
          <div className="option_col">
            <option value="">Sort by: choice </option>
          </div>
        </div>
      </div>

      <div className="fetched_item">
        <div className="choice">
          <div className="choicebox">
            <div className="type">CATEGORES</div>
            <div>
              <span>
                <input
                  type="radio"
                  name="categores"
                  onClick={() => {
                    setCtry("Men");
                  }}
                ></input>{" "}
                Men
              </span>
            </div>
            <div>
              <span>
                <input
                  type="radio"
                  name="categores"
                  onClick={() => {
                    setCtry("Women");
                  }}
                ></input>{" "}
                Women{" "}
              </span>
            </div>
            <div>
              <span>
                <input
                  type="radio"
                  name="categores"
                  onClick={() => {
                    setCtry("Kids");
                  }}
                ></input>{" "}
                Kids{" "}
              </span>
            </div>
          </div>
          <div className="choicebox">
            <div className="type">TYPE</div>
            <div>
              <span>
                <input
                  type="radio"
                  name="type"
                  onClick={() => {
                    setSubCtry("Topwear");
                  }}
                ></input>{" "}
                Topwear{" "}
              </span>
            </div>
            <div>
              <span>
                <input
                  type="radio"
                  name="type"
                  onClick={() => {
                    setSubCtry("Bottomwear");
                  }}
                ></input>{" "}
                Bottomwear{" "}
              </span>
            </div>
            <div>
              <span>
                <input
                  type="radio"
                  name="type"
                  onClick={() => {
                    setSubCtry("Winterwear");
                  }}
                ></input>{" "}
                Winterwear{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="results">
          {items.length > 0 ? (
            items.map((itm, index) => {
              return (
                <div key={index} className="Col_itembox Col_flex">
                  <ItemBox
                    image={itm.image}
                    name={itm.name}
                    price={itm.price}
                    itm={itm}
                  />
                </div>
              );
            })
          ) : (
            <div> Nothing to show </div>
          )}
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}

export default Collection;
