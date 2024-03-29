import { useContext } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Context } from "../components/globalContext/globalContext";

export default function StartingScreen({ navigation }) {
  const globalContext = useContext(Context);
  const { isLoggedIn } = globalContext;
  const signup = () => {
    navigation.push("SignUp1");
  };
  const login = () => {
    navigation.push("LoginPage");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingMain}>All-In</Text>
      <Image
        resizeMode="contain"
        source={require("../assets/images/default.png")}
        style={{ width: 400, height: 400, flex: 4 }}
      />
      <View style={{ flex: 1, marginTop: 50 }}>
        <TouchableOpacity style={styles.btn} onPress={signup}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontFamily: "Roboto-Bold",
              fontSize: 18,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={login}>
          <Text
            style={{
              fontFamily: "Roboto-Bold",
              marginTop: 20,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Login with Email
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 30,
    color: "#000",
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    // fontFamily: "Regular",
  },
  btn: {
    // flex: 1,
    backgroundColor: "#000",
    textAlign: "center",
    color: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    fontSize: 32,
    padding: 20,
    width: 320,
    fontFamily: "Roboto-Black",
    fontWeight: "bold",
  },
  headingMain: {
    // flex: 1,
    // marginTop: 80,
    textAlign: "center",
    color: "#000",
    fontFamily: "Roboto-Black",
    fontSize: 40,
    paddingBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
