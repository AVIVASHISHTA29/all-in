import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

export default function SignUp1() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons
          name="mail"
          size={40}
          color="black"
          style={{ marginBottom: 20 }}
        />
        <Text style={styles.mainHeading}>What's your email?</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Email"
          // keyboardType="default"
        />
      </View>
      <TouchableOpacity style={styles.floatingButton}>
        <AntDesign name="arrowright" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // marginLeft: 50,
    // flex: 1,
    // textAlign: "center",
    // color: "#000",
    // alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  mainHeading: {
    fontSize: 32,
    fontFamily: "Roboto-Black",
    textAlign: "left",
  },
  input: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: "Roboto-Bold",
    padding: 10,
    paddingLeft: 0,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    width: "100%",
  },
  floatingButton: {
    borderWidth: 5,
    borderColor: "#000",
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "relative",
    top: "100%",
    left: "80%",
    height: 60,
    backgroundColor: "#000",
    borderRadius: 100,
  },
});
