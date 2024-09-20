import { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { PageContext } from "../context/context";
import { assets, products } from "./assets";
import Footer from "./Footer";

function Cart() {
  const abcd = useContext(PageContext);
  const Component = abcd.cartItems;
  console.log("Component is:");
  console.log(Component);
  const [cartList, setCartList] = useState([]);
  // const billAmount = useRef(0);
  let billAmount = 0;

  const handlePlaceOrder = () => {
    let amount = billAmount + Math.floor((billAmount / 100) * 12) + 10;
    console.log(amount);
    abcd.setDeliveryTotal(amount);
    abcd.navigate("/Delivery");
  };

  useEffect(() => {
    const tempData = [];
    for (const i in Component) {
      if (Component[i] > 0) {
        tempData.push({
          _id: i,
          quantity: Component[i],
        });
      }
    }
    console.log("tempData is:");
    console.log(tempData);
    setCartList(tempData);
    // billAmount = 0;
    // window.scrollTo(0,0);
  }, [Component]);

  return (
    <>
      <div className="title_crt">
        <p className="p1_crt">YOUR</p>
        <p className="p2_crt">CART</p>
        <p className="p3_crt"></p>
      </div>

      <div className="Item_Show_crt">
        {cartList.length > 0 ? (
          cartList.map((lst, index) => {
            const thing = products.filter((itm) => {
              return itm._id === lst._id;
            });
            const totalPrice = lst.quantity * thing[0].price;
            //  console.log(thing);
            billAmount += totalPrice;
            return (
              <div key={index} className="Item_Crt">
                <div className="part1_item">
                  <img
                    className="img_item_crt"
                    src={thing[0].image}
                    alt=""
                  ></img>
                </div>
                <div className="part2_item">
                  <p className="name_item_crt">{thing[0].name}</p>
                </div>
                <div className="part4_item">${thing[0].price}</div>
                <div className="part3_item">
                  <div className="btn_I_D_count_item">
                    <button
                      className="btn_p_m_item"
                      onClick={() => {
                        abcd.addToCart(thing[0]._id);
                      }}
                    >
                      +
                    </button>
                    <p className="btn_c_item">{lst.quantity}</p>
                    <button
                      className="btn_p_m_item"
                      onClick={() => {
                        abcd.removeFromCart(thing[0]._id);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="part5_item">${totalPrice}</div>
                <div className="part6_item">
                  <img
                    src={assets.bin_img}
                    className="delete_item"
                    onClick={() => {
                      abcd.deleteFromCart(thing[0]._id);
                    }}
                    alt=""
                  ></img>
                </div>
              </div>
            );
          })
        ) : (
          <div>Nothing to show</div>
        )}
      </div>

      <div className="cart_totals">
        <div className="box_cart_totals">
          <div className="title_crt hidden_border">
            <p className="p1_crt">CART</p>
            <p className="p2_crt">TOTALS</p>
            <p className="p3_crt line"></p>
          </div>
          <div className="bill_cart">
            <p className="p_billCart">Subtotal</p>
            <p className="amount_billCart">${billAmount}</p>
          </div>
          <div className="btw_line"></div>
          <div className="bill_cart">
            <p className="p_billCart">GST of 12%</p>
            <p className="amount_billCart">
              ${Math.floor((billAmount / 100) * 12)}
            </p>
          </div>
          <div className="btw_line"></div>
          <div className="bill_cart">
            <p className="p_billCart">Shipping Fee</p>
            <p className="amount_billCart">$10</p>
          </div>
          <div className="btw_line"></div>
          <div className="bill_cart">
            <p className="p_billCart dark1">Total</p>
            <p className="amount_billCart dark1">
              ${billAmount + Math.floor((billAmount / 100) * 12) + 10}
            </p>
          </div>
          <div className="proceed_cart">
            <button className="btn_ptc_cart" onClick={handlePlaceOrder}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
