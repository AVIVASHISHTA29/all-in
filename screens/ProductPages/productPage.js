import { useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SearchBar } from "react-native-elements";
import Star from "react-native-star-view";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SearchBarComponent from "../../components/searchBar";

export default function ProductPage() {
  const updateSearch = (search) => {
    setSearch(search);
  };
  const [search, setSearch] = useState("");
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.productHeading}>
          All-In Essentials Half Sleeves Tshirt
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Star score={3.5} style={styles.starStyle} />
          <Text style={{ marginBottom: 10 }}>{3.5}</Text>
        </View>
        <View
          style={{
            flex: 4,
            alignItems: "center",
            marginVertical: 20,
            backgroundColor: "#E5E5E54A",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/images/default.png")}
            style={{
              height: 300,
              width: 200,
            }}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text style={styles.price}>₹2500</Text>
            <Text
              style={(styles.price, { marginHorizontal: 10, fontSize: 16 })}
            >
              In Stock
            </Text>
          </View>
          <View style={styles.sizeView}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.sizeText}>XS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.sizeText}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.sizeText}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.sizeText}>XL</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>Delivery Options</Text>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
            inputContainerStyle={{
              fontSize: 12,
              backgroundColor: "#F7F7F7",
              paddingTop: 5,
              paddingBottom: 5,
              marginLeft: 10,
            }}
            containerStyle={{
              fontSize: 12,
              flex: 1,
              backgroundColor: "#fff",
              borderTopWidth: 0,
              borderBottomWidth: 0,
            }}
          />
        </View>
        <View style={{ flex: 0.5, flexDirection: "row", marginBottom: 50 }}>
          <TouchableOpacity style={styles.btn}>
            <Image
              resizeMode="contain"
              source={require("../../assets/icons/share.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Text
              style={{
                backgroundColor: "#C4C4C4",
                marginRight: 10,
                fontFamily: "Roboto-Bold",
              }}
            >
              Wishlist
            </Text>
            <Image
              resizeMode="contain"
              source={require("../../assets/icons/TopBarIcons/saved.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Text
              style={{
                backgroundColor: "#C4C4C4",
                marginRight: 10,
                fontFamily: "Roboto-Bold",
              }}
            >
              Add To Cart
            </Text>
            <Image
              resizeMode="contain"
              source={require("../../assets/icons/TopBarIcons/cart.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    flex: 1,
  },
  productHeading: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 10,
    marginTop: 20,
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 10,
    marginHorizontal: 10,
  },
  btn: {
    backgroundColor: "#C4C4C4",
    marginRight: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn2: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    marginRight: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  sizeView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 5,
    marginTop: 15,
    // marginBottom: 15,
  },
  sizeText: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    width: 20,
    height: 20,
    textAlign: "center",
  },
});
