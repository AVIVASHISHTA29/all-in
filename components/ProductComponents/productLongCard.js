import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { showMessage } from "react-native-flash-message";
import AddToCart from "../functions/AddToCart";
import AddToWishlist from "../functions/addToWishlist";
import { Context } from "../globalContext/globalContext";
import { AntDesign } from "@expo/vector-icons";
import getCartList from "../functions/DbFunctions/updateCartList";
function ProductLongCard(props) {
  const globalContext = useContext(Context);
  const { wishList, setWishList, cartList, setCartList, domain, userObj } =
    globalContext;
  const [quantity, setQuantity] = useState(props.quantity ? props.quantity : 1);
  const [productItem, setProductItem] = useState();

  function getProductData() {
    fetch(`${domain}/api/v1.0/user/product-data/${props.id}`, {
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
        setProductItem(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getProductData();
  }, []);

  function updateQuantity(finalquantity) {
    fetch(`${domain}/api/v1.0/user/user-data/${userObj.email}`, {
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
        newList = [];
        console.log("printing the bloody item - " + finalquantity.toString());
        json[0].my_cart.products.map((item) => {
          if (item.id === props.id) {
            setCartList([
              ...newList,
              { id: item.id, quantity: finalquantity, price: item.price },
            ]);
            newList = [
              ...newList,
              { id: item.id, quantity: finalquantity, price: item.price },
            ];
          } else {
            setCartList([...newList, item]);
            newList = [...newList, item];
          }
        });
        let body = JSON.stringify({
          my_cart: { products: newList },
        });
        console.log("printing the new cart list");
        console.log(body);
        fetch(`${domain}/api/v1.0/user/user-data/${userObj.email}/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: body,
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              console.log("User data coudn't be updated");
              throw res.json();
            }
          })
          .then((json) => {
            // setUserObj(json);
            // setToken(json.token);
            // setIsLoggedIn(true);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => {
        props.navigation.navigate("Product", {
          id: props.id,
        });
      }}
    >
      {productItem ? (
        <View style={styles.flexContainer}>
          <View style={styles.imgView}>
            <Image
              resizeMode="contain"
              source={{
                uri: productItem
                  ? productItem.imgUrl
                  : "https://i.ibb.co/F8sBgT6/shoe.png",
              }}
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
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                      updateQuantity(quantity - 1);
                    }
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
                    updateQuantity(quantity + 1);
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
            <Text style={styles.title}>
              {productItem ? productItem.title : "Product"}
            </Text>
            <Text style={styles.price}>
              ₹{productItem ? productItem.price : "999"}
            </Text>
            {props.isCheckOut ? (
              <>
                <Text style={styles.size}>
                  Quantity:
                  <Text style={{ textTransform: "uppercase" }}>
                    {" "}
                    {props.quantity ? props.quantity : 1}
                  </Text>
                </Text>
              </>
            ) : (
              <>
                <Text style={styles.size}>
                  Size:
                  <Text style={{ textTransform: "uppercase" }}>
                    {" "}
                    {productItem ? productItem.size : "S,XS,M"}
                  </Text>
                </Text>
                <Text style={styles.size}>
                  {productItem
                    ? productItem.inStock
                      ? "In Stock"
                      : "Out Of Stock"
                    : "Out Of Stock"}
                </Text>
              </>
            )}

            <View style={styles.buttonView}>
              {props.showDeleteButton ? (
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    props.deleteItem(productItem.id);
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
                      productItem,
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
                      productItem,
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
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#999999" />
        </View>
      )}
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
