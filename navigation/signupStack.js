import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp1 from "../screens/SignUp/signUp";
import { Context } from "../components/globalContext/globalContext.js";
import StartingScreen from "../screens/StartingScreen.js";
import DrawerTab from "./drawer.js";

const Stack = createStackNavigator();

function Navigator(props) {
  const globalContext = useContext(Context);
  const { isLoggedIn, userObj } = globalContext;

  return (
    <Stack.Navigator initialRouteName="StartingScreen">
      {!isLoggedIn || !userObj ? (
        <>
          <Stack.Screen
            name="StartingScreen"
            component={StartingScreen}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="StartingScreen" component={StartingScreen} /> */}
          <Stack.Screen
            name="SignUp1"
            component={SignUp1}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="DrawerTab"
          component={DrawerTab}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

export default Navigator;
