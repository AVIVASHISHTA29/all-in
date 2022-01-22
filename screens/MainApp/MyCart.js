import { useCallback, useContext, useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Context } from "../../components/globalContext/globalContext";
import ProductLongCard from "../../components/ProductComponents/productLongCard";
import ProductSmallCard from "../../components/ProductComponents/productSmallCard";
import { myRecommendations } from "../../data/data.js";
import { AntDesign } from "@expo/vector-icons";
import CheckoutFloatingDiv from "../../components/CheckoutFloatingDiv";
import getCartList from "../../components/functions/DbFunctions/updateCartList";

const MyCart = ({ navigation }) => {
  const globalContext = useContext(Context);
  const { cartList, setCartList, domain, userObj } = globalContext;
  const deleteItem = (id) => {
    setCartList((cartList) => {
      return cartList.filter((item) => item.id != id);
    });
  };

  useEffect(() => {
    getCartList(setCartList, domain, userObj);
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    getCartList(setCartList, domain, userObj);
    setRefreshing(false);
  }, [refreshing]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Cart</Text>
      <View style={{ flex: 1 }}>
        {cartList.length > 0 ? (
          <FlatList
            nestedScrollEnabled
            style={{ marginBottom: 20, flex: 1, marginTop: 10 }}
            keyExtractor={(item) => item.id}
            data={cartList}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({ item }) => (
              <ProductLongCard
                productItem={item}
                navigation={navigation}
                deleteItem={deleteItem}
                showDeleteButton={true}
                showAddToCartButton={false}
                showAddToWishListButton={true}
                showQuantityButton={true}
              />
            )}
          />
        ) : (
          <TouchableOpacity
            onPress={() => {
              getCartList(setCartList, domain, userObj);
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
            <Text
              style={[
                styles.subHeading,
                { marginTop: 20, color: "#000", textAlign: "center" },
              ]}
            >
              Your Cart is Empty
            </Text>

            <AntDesign
              name="reload1"
              size={20}
              color="black"
              style={{ marginTop: 20 }}
            />
          </TouchableOpacity>
        )}

        <View style={{ flex: 0.25 }}>
          {/* <Text style={styles.subHeading}>You Also Bought</Text>
          <FlatList
            nestedScrollEnabled
            horizontal={true}
            style={{ marginBottom: 0, flex: 1 }}
            keyExtractor={(item) => item.id}
            data={myRecommendations}
            renderItem={({ item }) => (
              <ProductSmallCard
                title={item.title}
                image={item.image}
                navigation={navigation}
              />
            )}
          /> */}
          <CheckoutFloatingDiv navigation={navigation} />
        </View>
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
});

export default MyCart;
