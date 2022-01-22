import React, { useState, useEffect, useRef, createContext } from "react";
import * as SecureStore from "expo-secure-store";
import { myReviewList } from "../../data/data";

const Context = createContext();

const Provider = ({ children }) => {
  const [domain, setDomain] = useState("http://localhost:8000");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState();
  const [allProducts, setAllProducts] = useState({});
  const [wishList, setWishList] = useState();
  const [cartList, setCartList] = useState();
  const [reviewList, setReviewList] = useState(myReviewList);
  const setToken = async (token) => {
    await SecureStore.setItemAsync("token", token);
  };

  function getData() {
    fetch(`${domain}/api/v1.0/user/products`, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res.json();
        }
      })
      .then((json) => {
        // console.log(json);
        setAllProducts(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const globalContext = {
    domain,
    isLoggedIn,
    setIsLoggedIn,
    userObj,
    setUserObj,
    setToken,
    wishList,
    setWishList,
    cartList,
    setCartList,
    reviewList,
    setReviewList,
    allProducts,
    setAllProducts,
    domain,
  };

  return <Context.Provider value={globalContext}>{children}</Context.Provider>;
};

export { Context, Provider };
