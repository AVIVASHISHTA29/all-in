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
import { useContext } from "react";
import { Context } from "../../components/globalContext/globalContext";

export default function SignUp1({ navigation, route, props }) {
  const globalContext = useContext(Context);
  const { isLoggedIn, setIsLoggedIn, setUserObj } = globalContext;

  function login() {
    setIsLoggedIn(true);
    setUserObj(true);
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.mainHeading}>Sign Up</Text>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderRadius: 10,
              borderColor: "#C4C4C4",
              width: "100%",
              padding: 12,
              margin: 30,
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
              Sign In With Google
            </Text>
          </TouchableOpacity>
          <Text style={styles.subHeading}>Or Use Your Email ID to Sign Up</Text>
          <View>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Full Name"
              // keyboardType="default"
            />
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Email"
              // keyboardType="default"
            />
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Password"
              // keyboardType="default"
            />
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Confirm Password"
              // keyboardType="default"
            />
          </View>
          <TouchableOpacity style={styles.floatingButton} onPress={login}>
            <AntDesign name="arrowright" size={30} color="#fff" />
          </TouchableOpacity>
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
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "relative",
    left: "80%",
    height: 60,
    backgroundColor: "#000",
    borderRadius: 100,
  },
});
