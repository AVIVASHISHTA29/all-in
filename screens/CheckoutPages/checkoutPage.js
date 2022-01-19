import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { myOrderList, myRecommendations } from "../../data/data.js";
import ProductLongCard from "../../components/ProductComponents/productLongCard";
import ProductSmallCard from "../../components/ProductComponents/productSmallCard";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { Context } from "../../components/globalContext/globalContext.js";

const CheckOutPage = ({ route, navigation }) => {
  const globalContext = useContext(Context);
  //   const { cartList, setCartList } = globalContext;
  //   const [taxes, setTaxes] = useState(0.18 * parseInt(route.params.totalPrice));
  //   const [finalTotal, setFinalTotal] = useState(
  //     taxes + parseInt(route.params.totalPrice)
  //   );
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Checkout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  heading: {
    fontSize: 32,
    fontFamily: "Roboto-Bold",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 10,
  },
  blackView: {
    marginVertical: 20,
    backgroundColor: "#000",
    width: "100%",
    borderRadius: 20,
    padding: 20,
  },
  infoView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  btn: {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: 20,
    borderRadius: 20,
  },
});

export default CheckOutPage;
