import React, { useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Context } from "../components/globalContext/globalContext";

export default function Landing({ navigation }) {
  const globalContext = useContext(Context);
  const { isLoggedIn } = globalContext;
  const getStarted = () => {
    navigation.push("SignUp1");
  };
  return (
    <SafeAreaView>
      <Text>Hello User!</Text>
      <Text>You are {isLoggedIn ? "" : "Not "}logged in</Text>
      <TouchableOpacity
        onPress={getStarted}
        style={{
          width: "70%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
