import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [page, setPage] = useState("Login");
  const [selectInfo, setSelectInfo] = useState(null);
  const [cartItems, setCartItems] = useState({});
  const [deliveryTotal, setDeliveryTotal] = useState();
  const CartCount = useRef(0);
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState({});

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
    //  addToCart();
  }, []);

  const value = {
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
