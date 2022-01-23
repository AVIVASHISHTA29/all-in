import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Star from "react-native-star-view";
import { showMessage } from "react-native-flash-message";
import shareProduct from "../functions/Share/sharingProducts";
import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../globalContext/globalContext";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import AddToWishlist from "../functions/addToWishlist";
import AddToCart from "../functions/AddToCart";
import getWishList from "../functions/DbFunctions/updateWishList";

export default function ProductCollection(props) {
  const globalContext = useContext(Context);
  const {
    wishList,
    setWishList,
    cartList,
    setCartList,
    allProducts,
    setAllProducts,
    domain,
    userObj,
  } = globalContext;
  const [flag, setFlag] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    fetch(`${domain}/api/v1.0/user/products`, {
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
        // console.log(json);
        setAllProducts(json);
      })
      .catch((error) => {
        console.log(error);
      });
    setRefreshing(false);
  }, [refreshing]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.heading}>All Products</Text>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {allProducts ? (
        <FlatList
          style={{ marginBottom: 120, marginTop: 10 }}
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={allProducts}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productContainer}
              onPress={() => {
                props.navigation.navigate("Product", {
                  productItem: item,
                });
              }}
            >
              <View style={{ flex: 1 }}>
                <Image
                  resizeMode="contain"
                  source={{
                    uri: item.imgUrl,
                  }}
                  style={{
                    width: 100,
                    height: 150,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
                <Star
                  score={item.rating ? item.rating : 3.5}
                  style={styles.starStyle}
                />
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: "auto",
                    marginBottom: 0,
                  }}
                >
                  <TouchableOpacity style={styles.btn2} onPress={shareProduct}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/icons/share.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btn2}
                    onPress={() => {
                      AddToWishlist(
                        item,
                        wishList,
                        setWishList,
                        domain,
                        userObj.email
                      );
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/icons/TopBarIcons/saved.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btn2}
                    onPress={() => {
                      AddToCart(
                        item,
                        cartList,
                        setCartList,
                        domain,
                        userObj.email
                      );
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/icons/TopBarIcons/cart.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            onRefresh;
          }}
          style={{
            textAlign: "center",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <View style={{}}>
            <AntDesign name="shoppingcart" size={48} color="black" />
          </View>
          <Text style={[{ marginTop: 20, color: "#000", textAlign: "center" }]}>
            Couldn't Load Products
          </Text>
          <AntDesign
            name="reload1"
            size={20}
            color="black"
            style={{ marginTop: 20 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 10,
    marginTop: 10,
  },
  heading: {
    fontSize: 32,
    fontFamily: "Roboto-Bold",
  },
  productContainer: {
    flex: 0.5,
    height: "auto",
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#E5E5E54A",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    marginHorizontal: 10,
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    marginTop: 10,
  },
  btn2: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    marginHorizontal: 2.5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
