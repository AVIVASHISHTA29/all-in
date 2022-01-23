import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useContext, useState } from "react";
import { Context } from "../../components/globalContext/globalContext";

export default function LoginPage({ navigation, route, props }) {
  const globalContext = useContext(Context);
  const {
    setIsLoggedIn,
    appSettings,
    domain,
    userObj,
    setUserObj,
    setToken,
    setCartList,
    setWishList,
  } = globalContext;

  const [securePassword, setSecurePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    setError("");

    let body = JSON.stringify({
      username: email.toLowerCase(),
      password: password,
    });

    fetch(`${domain}/api/v1.0/user/login-user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setError("Invalid Credentials");
          throw res.json();
        }
      })
      .then((json) => {
        setToken(json.token);
        setIsLoggedIn(true);
        getUserData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getUserData() {
    fetch(`${domain}/api/v1.0/user/user-data/${email.toLowerCase()}`, {
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
        setUserObj(json[0]);
        setWishList(json[0].wish_list.products);
        setCartList(json[0].my_cart.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.mainHeading}>Login</Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
            }}
          >
            {/* <Image
              resizeMode="contain"
              source={require("../../assets/images/shoe.png")}
              style={{
                width: "30%",
              }}
            /> */}
            <AntDesign name="user" size={48} color="#000" />
          </View>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderRadius: 10,
              borderColor: "#C4C4C4",
              width: "100%",
              padding: 12,
              margin: 30,
              marginTop: 0,
              marginBottom: 20,
              backgroundColor: "#C4C4C4",
              marginLeft: 0,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign
              name="google"
              size={24}
              color="#333"
              style={{ marginRight: 10 }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#333",
              }}
            >
              Login With Google
            </Text>
          </TouchableOpacity>
          <Text style={styles.subHeading}>Or Use Your Email ID to Login</Text>
          <View>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              textContentType="username"
              autoCompleteType="email"
              style={styles.input}
              placeholder="Email"
            />
            <View
              style={[
                styles.input,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <TextInput
                style={{ fontSize: 18, flex: 1, marginRight: 5 }}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={securePassword}
                textContentType="password"
                autoCompleteType="password"
                placeholder="Password"
              />
              <TouchableOpacity
                onPress={() => {
                  setSecurePassword(!securePassword);
                }}
              >
                <AntDesign name="eye" size={24} color="#999" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.error}>{error}</Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity
              style={styles.floatingButton}
              onPress={handleLogin}
            >
              <AntDesign name="arrowright" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // marginLeft: 50,
    // textAlign: "center",
    // color: "#000",
    // alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  mainHeading: {
    fontSize: 32,
    fontFamily: "Roboto-Black",
    textAlign: "center",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#999",
    textAlign: "center",
  },
  input: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    fontWeight: "900",
    padding: 12,
    paddingLeft: 15,
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 2,
    width: "100%",
  },
  floatingButton: {
    borderWidth: 5,
    borderColor: "#000",
    marginVertical: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "relative",

    height: 60,
    backgroundColor: "#000",
    borderRadius: 100,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
