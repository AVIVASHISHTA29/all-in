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
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useContext, useState } from "react";
import { Context } from "../../../components/globalContext/globalContext";

export default function EditProfile({ navigation, route, props }) {
  const globalContext = useContext(Context);
  const { domain, userObj } = globalContext;

  const [email, setEmail] = useState(userObj.email);
  const [firstName, setFirstName] = useState(userObj.first_name);
  const [lastName, setLastName] = useState(userObj.last_name);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState(
    userObj.address ? userObj.address : ""
  );
  const [error, setError] = useState("");

  function handleSave() {
    let body = JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      address: address,
    });

    fetch(`${domain}/api/v1.0/user/user-data/${userObj.email}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("User data coudn't be updated");
          throw res.json();
        }
      })
      .then((json) => {
        // setUserObj(json);
        // setToken(json.token);
        // setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
    navigation.pop();
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.mainHeading}>Edit Profile</Text>
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 500,
              backgroundColor: "#E0E0E0",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 10,
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../../assets/images/default.png")}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <TouchableOpacity>
            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                textAlign: "center",
                color: "#999",
              }}
            >
              Edit Picture
            </Text>
          </TouchableOpacity>

          <View>
            <TextInput
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              textContentType="name"
              autoCompleteType="name"
              style={styles.input}
              placeholder="First Name"
            />
            <TextInput
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              textContentType="name"
              autoCompleteType="name"
              style={styles.input}
              placeholder="Last Name"
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              textContentType="username"
              autoCompleteType="email"
              style={styles.input}
              placeholder="Email"
              editable={false}
            />

            <TextInput
              multiline
              numberOfLines={10}
              value={address}
              onChangeText={(text) => setAddress(text)}
              textContentType="name"
              style={[
                styles.input,
                { minHeight: 100, paddingTop: 10, maxHeight: 250 },
              ]}
              placeholder="Address"
            />
            {/* <View
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
            </View> */}
            {/* <View
              style={[
                styles.input,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <TextInput
                style={{ fontSize: 18, flex: 1, marginRight: 5 }}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry={secureConfirmPassword}
                textContentType="password"
                autoCompleteType="password"
                placeholder="Confirm Password"
              />
              <TouchableOpacity
                onPress={() => {
                  setSecureConfirmPassword(!secureConfirmPassword);
                }}
              >
                <AntDesign name="eye" size={24} color="#999" />
              </TouchableOpacity>
            </View> */}
          </View>
          <Text style={styles.error}>{error}</Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity
              style={styles.floatingButton}
              onPress={handleSave}
            >
              <AntDesign name="plus" size={30} color="#fff" />
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
