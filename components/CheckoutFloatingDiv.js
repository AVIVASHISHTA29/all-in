import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { Context } from "./globalContext/globalContext";
function CheckoutFloatingDiv(props) {
  const globalContext = useContext(Context);
  const { cartList, setCartList } = globalContext;
  const [totalPrice, setTotalPrice] = useState(0);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setTotalPrice(
      cartList.reduce(
        (total, currentItem) => (total = total + parseInt(currentItem.price)),
        0
      )
    );
    cartList.length == 0 ? setDisabled(true) : setDisabled(false);
  }, [cartList]);

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={disabled}
      onPress={() => {
        console.log("Checking Out");
        props.navigation.navigate("SummaryPage", {
          totalPrice: totalPrice,
        });
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            styles.heading,
            { color: "#fff", textAlign: "left", marginRight: 10 },
          ]}
        >
          Checkout
        </Text>
        <AntDesign name="arrowright" size={32} color="#fff" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text style={[styles.subHeading, { color: "#fff", textAlign: "left" }]}>
          Total Items :
        </Text>
        <Text
          style={[styles.subHeading, { textAlign: "right", color: "#fff" }]}
        >
          {cartList.length}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text style={[styles.subHeading, { color: "#fff", textAlign: "left" }]}>
          Total Amount :
        </Text>
        <Text
          style={[styles.subHeading, { textAlign: "right", color: "#fff" }]}
        >
          ₹{totalPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default CheckoutFloatingDiv;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: "100%",
    width: "100%",
    borderRadius: 20,
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontFamily: "Roboto-Bold",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#999",
    textAlign: "center",
  },
});
