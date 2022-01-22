import { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import AddToCart from "../functions/AddToCart";
import AddToWishlist from "../functions/addToWishlist";
import { Context } from "../globalContext/globalContext";
import { AntDesign } from "@expo/vector-icons";
function ProductLongCard(props) {
  const globalContext = useContext(Context);
  const { wishList, setWishList, cartList, setCartList, domain, userObj } =
    globalContext;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("hi2");
    console.log(props.productItem.imgUrl);
  }, []);

  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => {
        props.navigation.navigate("Product", {
          productItem: props.productItem,
        });
      }}
    >
      <View style={styles.flexContainer}>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            source={{ uri: props.productItem.imgUrl }}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              margin: 20,
              flex: 1,
              height: 100,
              width: 100,
            }}
          />
          {props.showQuantityButton ? (
            <View
              style={{
                flexDirection: "row",
                margin: 20,
              }}
            >
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                <AntDesign name="minus" size={20} color="black" />
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#000",
                  flex: 1,
                  marginRight: 10,
                  textAlign: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text>{quantity}</Text>
              </View>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setQuantity(quantity + 1);
                }}
              >
                <AntDesign name="plus" size={20} color="black" />
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
        </View>
        <View style={styles.infoView}>
          <Text style={styles.title}>{props.productItem.title}</Text>
          <Text style={styles.price}>₹{props.productItem.price}</Text>
          <Text style={styles.size}>
            Size:
            <Text style={{ textTransform: "uppercase" }}>
              {" "}
              {props.productItem.size}
            </Text>
          </Text>
          <Text style={styles.size}>
            {props.productItem.inStock ? "In Stock" : "Out Of Stock"}
          </Text>

          <View style={styles.buttonView}>
            {props.showDeleteButton ? (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  props.deleteItem(props.productItem.id);
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
                  AddToWishlist(
                    props.productItem,
                    wishList,
                    setWishList,
                    domain,
                    userObj.email
                  );
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
                  AddToCart(
                    props.productItem,
                    cartList,
                    setCartList,
                    domain,
                    userObj.email
                  );
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
