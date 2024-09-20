import { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { PageContext } from "../context/context";
import { products } from "./assets";
import Footer from "./Footer";

function Orders(props) {
  const abcd = useContext(PageContext);
  const Component = abcd.orderItems;
  const [orders, setOrders] = useState([]);

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
    setOrders(tempData);
    window.scrollTo(0, 0);
  }, [Component]);
  return (
    <>
      <div className="title_crt">
        <p className="p1_crt">YOUR</p>
        <p className="p2_crt">ORDERs</p>
        <p className="p3_crt"></p>
      </div>

      <div className="Item_Show_crt">
        {orders.length > 0 ? (
          orders.map((lst, index) => {
            const thing = products.filter((itm) => {
              return itm._id === lst._id;
            });
            const totalPrice = lst.quantity * thing[0].price;
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
                  <p
                    className="name_item_crt"
                    style={{ fontSize: "medium", color: "gray" }}
                  >
                    Price : ${thing[0].price}
                  </p>
                </div>
                <div className="part4_item orderInfo">{lst.quantity}</div>
                <div className="part3_item orderInfo">${totalPrice}</div>
                <div className="part5_item orderInfo">
                  <p className="greenPoint"></p>
                  <p className="orderStatus">Ordered</p>
                </div>
              </div>
            );
          })
        ) : (
          <div>Nothing to show</div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Orders;
