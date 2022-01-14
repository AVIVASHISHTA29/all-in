import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Context } from "../components/globalContext/globalContext.js";
import ProductPage from "../screens/ProductPages/productPage";
import HomePage from "../screens/MainApp/HomePage.js";
import Wishlist from "../screens/MainApp/Wishlist.js";
import MyCart from "../screens/MainApp/MyCart.js";
import Profile from "../screens/MainApp/Profile.js";

const Stack = createStackNavigator();

function ProductStack(props) {
  const globalContext = useContext(Context);
  const { isLoggedIn, userObj } = globalContext;

  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerTintColor: "#000",
        headerTitleStyle: { display: "none" },
        headerBackgroundContainerStyle: { borderColor: "#fff" },
        headerStyle: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          borderBottomWidth: 0, // Just in case.
        },
        cardStyle: { backgroundColor: "#FFFFFF" },
      }}
    >
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={ProductPage}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerStyle: {
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0, // Just in case.
          },
        }}
      />
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

export default ProductStack;