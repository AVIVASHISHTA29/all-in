import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StartingScreen({ navigation }) {
  const getStarted = () => {
    navigation.push("Signup1");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingMain}>
        Connect <Text style={{ color: "#FE5679" }}>.</Text>
      </Text>
      <Image
        source={require("../assets/images/introLogo.png")}
        style={{ width: 400, height: 400, flex: 4 }}
      />
      <View style={{ flex: 1, marginTop: 50 }}>
        <TouchableOpacity style={styles.btn} onPress={getStarted}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontFamily: "Roboto-Bold",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "Roboto-Bold",
              marginTop: 20,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Login with email
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
    borderRadius: 50,
    borderWidth: 1,
    fontSize: 16,
    padding: 15,
    width: 220,
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
