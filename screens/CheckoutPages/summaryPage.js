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

const SummaryPage = ({ route, navigation }) => {
  const globalContext = useContext(Context);
  const { cartList, setCartList } = globalContext;
  const [taxes, setTaxes] = useState(0.18 * parseInt(route.params.totalPrice));
  const [finalTotal, setFinalTotal] = useState(
    taxes + parseInt(route.params.totalPrice)
  );
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Summary</Text>
      <View style={{ flex: 1 }}>
        <View style={styles.blackView}>
          <View style={styles.infoView}>
            <Text
              style={[styles.subHeading, { color: "#fff", textAlign: "left" }]}
            >
              Subtotal
            </Text>
            <Text
              style={[styles.subHeading, { textAlign: "right", color: "#fff" }]}
            >
              ₹ {route.params.totalPrice}
            </Text>
          </View>
          <View style={styles.infoView}>
            <Text
              style={[styles.subHeading, { color: "#fff", textAlign: "left" }]}
            >
              Tax & Fees
            </Text>
            <Text
              style={[styles.subHeading, { textAlign: "right", color: "#fff" }]}
            >
              ₹ {taxes}
            </Text>
          </View>
          <View style={styles.infoView}>
            <Text
              style={[styles.subHeading, { color: "#fff", textAlign: "left" }]}
            >
              Delivery
            </Text>
            <Text
              style={[styles.subHeading, { textAlign: "right", color: "#fff" }]}
            >
              Free
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#fff",
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              borderBottomWidth: 1,
              marginVertical: 20,
            }}
          />
          <View style={styles.infoView}>
            <Text
              style={[
                styles.heading,
                { color: "#fff", textAlign: "left", marginHorizontal: 10 },
              ]}
            >
              Total
            </Text>
            <Text
              style={[
                styles.heading,
                { textAlign: "right", color: "#fff", marginHorizontal: 10 },
              ]}
            >
              ₹ {finalTotal}
            </Text>
          </View>
        </View>
        <FlatList
          nestedScrollEnabled
          style={{ marginBottom: 20, marginTop: 0, flex: 2 }}
          keyExtractor={(item) => item.id}
          data={cartList}
          renderItem={({ item }) => (
            <ProductLongCard
              title={item.title}
              price={item.price}
              size={item.size}
              inStock={item.inStock}
              image={item.image}
              rating={item.rating}
              navigation={navigation}
              showDeleteButton={false}
              showAddToCartButton={false}
            />
          )}
        />
        <TouchableOpacity style={[styles.btn]}>
          <Text
            style={
              ([styles.heading],
              {
                color: "#fff",
                textAlign: "center",
                fontFamily: "Roboto-Bold",
                fontSize: 24,
              })
            }
          >
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
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

export default SummaryPage;
