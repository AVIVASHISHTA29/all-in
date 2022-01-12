import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { createRef, useState } from "react";
import AppLoading from "expo-app-loading";
import StartingScreen from "./screens/StartingScreen";
import SignUp1 from "./screens/SignUp/signUp";
import HomePage from "./screens/MainApp/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import SignupStack from "./navigation/startingStack";
import DrawerTab from "./navigation/drawer";
import { Provider } from "./components/globalContext/globalContext";
import Navigator from "./navigation/startingStack";
const getFonts = () => {
  return Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Provider>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <NavigationContainer ref={createRef()}>
            <Navigator />
          </NavigationContainer>
        </View>
      </Provider>
      // <NavigationContainer>
      //   <DrawerTab />
      // </NavigationContainer>
      // <SignUp1 />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
      // <Text style={{ padding: 50 }}>hi</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
