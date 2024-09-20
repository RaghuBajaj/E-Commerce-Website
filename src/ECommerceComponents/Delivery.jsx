import { useContext, useEffect } from "react";
import { assets } from "./assets";
import "./Delivery.css";
import { PageContext } from "../context/context";

function Delivery() {
  const abcd = useContext(PageContext);
  const total = abcd.deliveryTotal;

  const handlePlaceOrder = async () => {
    const items = await abcd.cartItems;
    abcd.setOrderItems(items);
    // abcd.setPage("Orders");
    abcd.navigate("/Orders");
    abcd.setCartItems({});
    abcd.CartCount.current = 0;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="full_del">
        <div className="info_del">
          <div className="title_del">
            <p className="p1_del">DELIVERY</p>
            <p className="p2_del">INFORMATION</p>
            <p className="p3_del"></p>
          </div>

          <div className="halfBox_del">
            <input placeholder="First name" className="input_half_del"></input>
            <input placeholder="Last name" className="input_half_del"></input>
          </div>
          <div className="fullBox_del">
            <input
              placeholder="Email address"
              className="input_full_del"
            ></input>
          </div>
          <div className="fullBox_del">
            <input placeholder="Street" className="input_full_del"></input>
          </div>
          <div className="halfBox_del">
            <input placeholder="City" className="input_half_del"></input>
            <input placeholder="State" className="input_half_del"></input>
          </div>
          <div className="halfBox_del">
            <input placeholder="Pincode" className="input_half_del"></input>
            <input placeholder="Country" className="input_half_del"></input>
          </div>
          <div className="fullBox_del">
            <input placeholder="Phone" className="input_full_del"></input>
          </div>
        </div>

        <div className="box_del_totals">
          <div className="bill_del">
            <p className="p_billDel ">Total</p>
            <p className="amount_billDel ">${total}</p>
          </div>

          <div className="title_del">
            <p className="p1_del">PAYMENT</p>
            <p className="p2_del">METHOD</p>
            <p className="p3_del "></p>
          </div>

          <div className="pay_methods">
            <div className="options_del opt1">
              <input type="radio" name="pay_opt" className="radio1"></input>
              <img
                src={assets.stripe_logo}
                className="icon_opt icon1"
                alt=""
              ></img>
            </div>
            <div className="options_del opt2">
              <input type="radio" name="pay_opt" className="radio1"></input>
              <img
                src={assets.razorpay_logo}
                className="icon_opt icon2 "
                alt=""
              ></img>
            </div>
            <div className="options_del opt3">
              <input type="radio" name="pay_opt" className="radio1"></input>
              <p className="icon_opt icon3">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="proceed_del">
            <button className="btn_po_cart" onClick={handlePlaceOrder}>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;
