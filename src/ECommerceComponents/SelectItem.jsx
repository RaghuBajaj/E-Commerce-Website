import { useEffect, useState, useContext, useCallback } from "react";
import "./SelectItem.css";
import { PageContext } from "../context/context";
import { products } from "./assets";
import ItemBox from "./ItemBox";

function SelectItem({ item }) {
  const [change, setChange] = useState(0);
  const [count, setCount] = useState(0);
  const abcd = useContext(PageContext);
  const compo = abcd.cartItems;

  const handleAddToCart = () => {
    if (change < 10) {
      abcd.addToCart(item._id);
      setChange(change + 1);
    }
  };
  const handleRemoveCart = () => {
    abcd.removeFromCart(item._id);
    setChange(change - 1);
  };

  const [sizes, setSizes] = useState([]);
  const [similar, setSimilar] = useState([]);
  const similarCheck = useCallback(() => {
    function sortlist(itms) {
      return (
        itms.category === item.category && itms.subCategory === item.subCategory
      );
    }
    const similarProduct = products.filter(sortlist);
    setSimilar(similarProduct);
  }, [item, setSimilar]);

  useEffect(() => {
    for (const i in compo) {
      if (i === item._id) {
        setCount(compo[i]);
      }
    }

    setSizes(item.sizes);
    similarCheck(item);
    window.scrollTo(0, 0);
  }, [item, similarCheck, change, compo]);
  return (
    <div className="full_SI">
      {change > 9 && (
        <div className="stockAlert">
          "Sorry, this item is in limited numbers ."
        </div>
      )}

      <div className="Item_SI">
        <div className="section1_SI">
          <img src={item.image} className="s1_img_SI" alt=""></img>
        </div>
        <div className="section2_SI">
          <img src={item.image} className="s2_img_SI" alt=""></img>
        </div>
        <div className="section3_SI">
          <p className="itm_name_SI">{item.name}</p>
          <p className="itm_price_SI">${item.price}</p>
          <p className="itm_description_SI">{item.description}</p>
          <div className="p_Sizes_SI">
            <p className="select_SI">Select Size</p>
            <div className="itm_size_SI">
              {sizes.map((siz, index) => {
                return (
                  <p key={index} className="siz_SI">
                    {siz}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="btnDiv_SI">
            <button className="btn_SI" onClick={handleAddToCart}>
              ADD TO CART
            </button>
            {count > 0 && (
              <div className="btn_I_D_count_SI">
                <button className="btn_p_m_SI" onClick={handleAddToCart}>
                  +
                </button>
                <p className="btn_c_SI">{count}</p>
                <button className="btn_p_m_SI" onClick={handleRemoveCart}>
                  -
                </button>
              </div>
            )}
          </div>
          <div className="permanent_s3_SI">
            <p className="line_s3_SI"></p>
            <p className="para_s3_SI">100% Original product.</p>
            <p className="para_s3_SI">
              Cash on delivery is available on this product.
            </p>
            <p className="para_s3_SI">
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>
      </div>

      <div className="title_SI">
        <p className="p1_SI">SIMILAR</p>
        <p className="p2_SI">PRODUCTS</p>
        <p className="p3_SI"></p>
      </div>

      <div className="simi_SI">
        {similar.length > 0 &&
          similar.map((item, index) => {
            return (
              <div key={index} className="itembox flex">
                <ItemBox itm={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SelectItem;
