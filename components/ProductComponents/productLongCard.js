import { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { Context } from "../globalContext/globalContext";
function ProductLongCard(props) {
  const globalContext = useContext(Context);
  const { wishList, setWishList, cartList, setCartList } = globalContext;

  useEffect(() => {
    console.log("hi2");
    console.log(props.imgUrl);
  }, []);

  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => {
        props.navigation.navigate("Product", {
          title: props.title,
          price: props.price,
          inStock: props.inStock,
          imgUrl: props.imgUrl,
          rating: props.rating,
          description: props.description,
        });
      }}
    >
      <View style={styles.flexContainer}>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            source={{ uri: props.imgUrl }}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              margin: 20,
              flex: 1,
              height: 100,
              width: 100,
            }}
          />
        </View>
        <View style={styles.infoView}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>₹{props.price}</Text>
          <Text style={styles.size}>
            Size:
            <Text style={{ textTransform: "uppercase" }}> {props.size}</Text>
          </Text>
          <Text style={styles.size}>
            {props.inStock ? "In Stock" : "Out Of Stock"}
          </Text>

          <View style={styles.buttonView}>
            {props.showDeleteButton ? (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  props.deleteItem(props.id);
                  showMessage({
                    message: "Item Deleted",
                    description: "This item was successfully removed!",
                    type: "success",
                  });
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/icons/dustbin.png")}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}
            {props.showAddToWishListButton ? (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  showMessage({
                    message: "Added To Your Wish List",
                    description:
                      "This item was successfully added to your wish list!",
                    type: "success",
                  });
                  setWishList([
                    ...wishList,
                    {
                      id: props.id,
                      title: props.title,
                      price: props.price,
                      size: props.size,
                      rating: props.rating,
                      inStock: props.inStock,
                      imgUrl: props.imgUrl,
                    },
                  ]);
                  console.log("wishList\n");
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/icons/TopBarIcons/saved.png")}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}
            {props.showAddToCartButton ? (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  showMessage({
                    message: "Added To Your Cart",
                    description:
                      "This item was successfully added to your cart! Happy Shopping !",
                    type: "success",
                  });
                  setCartList([
                    ...cartList,
                    {
                      id: props.id,
                      title: props.title,
                      price: props.price,
                      size: props.size,
                      rating: props.rating,
                      inStock: props.inStock,
                      imgUrl: props.imgUrl,
                    },
                  ]);
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/icons/TopBarIcons/cart.png")}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 10,
    // marginTop: 10,
  },
  btn: {
    padding: 7,
    backgroundColor: "#C4C4C4",
    marginRight: 10,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 15,
    // marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    marginHorizontal: 10,
  },
  size: {
    fontSize: 12,
    fontWeight: "500",
    marginHorizontal: 10,
    marginTop: 5,
  },
  heading: {
    fontSize: 32,
    fontFamily: "Roboto-Bold",
  },
  productContainer: {
    flex: 0.5,
    height: 175,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#E0E0E0",
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  imgView: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  infoView: {
    flex: 0.5,
  },
});

export default ProductLongCard;
