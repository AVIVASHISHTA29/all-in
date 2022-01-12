import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Context } from "../components/globalContext/globalContext.js";
import ProductPage from "../screens/ProductPages/productPage";
import HomePage from "../screens/MainApp/HomePage.js";
import MyCart from "../screens/MainApp/MyCart.js";
import Wishlist from "../screens/MainApp/Wishlist.js";
import Profile from "../screens/MainApp/Profile.js";

const Stack = createStackNavigator();

function topBarStack() {
  const globalContext = useContext(Context);
  const { isLoggedIn, userObj } = globalContext;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="My Cart"
        component={MyCart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default topBarStack;
