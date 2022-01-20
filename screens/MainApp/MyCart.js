import { useContext, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Context } from "../../components/globalContext/globalContext";
import ProductLongCard from "../../components/ProductComponents/productLongCard";
import ProductSmallCard from "../../components/ProductComponents/productSmallCard";
import { myRecommendations } from "../../data/data.js";
import { AntDesign } from "@expo/vector-icons";
import CheckoutFloatingDiv from "../../components/CheckoutFloatingDiv";
const MyCart = ({ navigation }) => {
  const globalContext = useContext(Context);
  const { cartList, setCartList } = globalContext;
  const deleteItem = (id) => {
    setCartList((cartList) => {
      return cartList.filter((item) => item.id != id);
    });
  };

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
            renderItem={({ item }) => (
              <ProductLongCard
                id={item.id}
                title={item.title}
                price={item.price}
                size={item.size}
                inStock={item.inStock}
                imgUrl={item.imgUrl}
                rating={item.rating}
                navigation={navigation}
                deleteItem={deleteItem}
                showDeleteButton={true}
                showAddToCartButton={false}
                showAddToWishListButton={true}
              />
            )}
          />
        ) : (
          <View
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
          </View>
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
