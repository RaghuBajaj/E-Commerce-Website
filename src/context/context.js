import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [page, setPage] = useState("Login");
  const CartCount = useRef(0);
  const navigate = useNavigate();
  const [selectInfo, setSelectInfo] = useState(null);
  const [deliveryTotal, setDeliveryTotal] = useState();
  const [cartItems, setCartItems] = useState({});
  const [orderItems, setOrderItems] = useState({});
  
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  // console.log('allUsers:',allUsers);
  // console.log("user:", user);

  const updateAll = () => {
    if (allUsers.length > 0) {
      setAllUsers((prev) => {
        let acco = prev.map((itm) => {
          if (
            itm.Your_name === user.Your_name &&
            itm.Password === user.Password &&
            itm.Mobile_number === user.Mobile_number
          ) {
            return { ...itm, userCart: cartItems, userOrder: orderItems };
          }
          return itm;
        });
        return acco;
      });
    }
    if (user && Object.keys(user).length > 0) {
      setUser({ ...user, userCart: cartItems, userOrder: orderItems });
      console.log("user11-->", user);
    }
  };

  const addToCart = async (Id) => {
    CartCount.current += 1;
    let cartData = structuredClone(cartItems);
    if (cartData[Id]) {
      cartData[Id] += 1;
    } else {
      cartData[Id] = 1;
    }
    setCartItems(cartData);
  };

  const removeFromCart = async (Id) => {
    CartCount.current -= 1;
    let cartData = structuredClone(cartItems);
    if (cartData[Id]) {
      cartData[Id] -= 1;
    }
    setCartItems(cartData);
  };

  const deleteFromCart = async (Id) => {
    let cartData = structuredClone(cartItems);
    while (cartData[Id] > 0) {
      cartData[Id] -= 1;
      CartCount.current -= 1;
    }
    setCartItems(cartData);
  };

  useEffect(() => {
    updateAll();
  }, [cartItems, orderItems]);
  useEffect(() => {
    if (allUsers.length > 0) {
      localStorage.setItem("allAccounts", JSON.stringify(allUsers));
    }
  }, [allUsers]);
  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      localStorage.setItem("accountUser", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("orderItems", JSON.stringify(orderItems));
  }, [cartItems, orderItems]);

  useEffect(() => {
    const allUsers_ = JSON.parse(localStorage.getItem("allAccounts")) || [];
    const user_ = JSON.parse(localStorage.getItem("accountUser")) || {};
    const cartItems_ = JSON.parse(localStorage.getItem("cartItems")) || [];
    const orderItems_ = JSON.parse(localStorage.getItem("orderItems")) || [];
    setAllUsers(allUsers_);
    setUser(user_);
    setCartItems(cartItems_);
    setCartItems(orderItems_);
  }, []);

  const value = {
    allUsers,
    setAllUsers,
    user,
    setUser,
    page,
    setPage,
    selectInfo,
    setSelectInfo,
    cartItems,
    setCartItems,
    addToCart,
    deliveryTotal,
    setDeliveryTotal,
    orderItems,
    setOrderItems,
    CartCount,
    removeFromCart,
    deleteFromCart,
    navigate,
  };

  return (
    <PageContext.Provider value={value}>{props.children}</PageContext.Provider>
  );
};

export default PageContextProvider;
