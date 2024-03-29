import { useCallback, useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  Keyboard,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SearchBar } from "react-native-elements";
import Star from "react-native-star-view";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ReviewCard from "../../components/ReviewCard";
import SearchBarComponent from "../../components/searchBar";
import { showMessage } from "react-native-flash-message";
import shareProduct from "../../components/functions/Share/sharingProducts";
import { myWishList } from "../../data/data";
import Wishlist from "../MainApp/Wishlist";
import { Context } from "../../components/globalContext/globalContext";
import AddToCart from "../../components/functions/AddToCart";
import AddToWishlist from "../../components/functions/addToWishlist";
import getWishList from "../../components/functions/DbFunctions/updateWishList";

export default function ProductPage({ route, navigation }) {
  const globalContext = useContext(Context);
  const { wishList, setWishList, cartList, setCartList, domain, userObj } =
    globalContext;

  const updateSearch = (search) => {
    setSearch(search);
  };
  const [search, setSearch] = useState("");
  const [reviewList, setReviewList] = useState();
  const [productItem, setProductItem] = useState();
  const [sizeList, setSizeList] = useState();

  function getReviewData() {
    fetch(`${domain}/api/v1.0/user/product-data/${route.params.id}`, {
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
        console.log("product");
        console.log(json);
        setReviewList(json.reviews.data);
        setSizeList(json.size.split(","));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getReviewData();
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    getReviewData();
    setRefreshing(false);
  }, [refreshing]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {productItem ? (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.container}>
            <Text style={styles.productHeading}>
              {productItem ? productItem.title : ""}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Star
                score={
                  productItem
                    ? productItem.rating
                      ? productItem.rating
                      : 3.5
                    : 3.5
                }
                style={styles.starStyle}
              />
              <Text style={{ marginBottom: 10 }}>
                {productItem ? productItem.rating : 3.5}
              </Text>
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
              {productItem ? (
                <Image
                  resizeMode="contain"
                  source={{ uri: productItem.imgUrl }}
                  style={{
                    height: 300,
                    width: 200,
                  }}
                />
              ) : (
                <View
                  style={{
                    height: 300,
                    width: 200,
                  }}
                ></View>
              )}
            </View>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View>
                <Text style={styles.price}>
                  ₹{productItem ? productItem.price : 2500}
                </Text>
                <Text
                  style={(styles.price, { marginHorizontal: 10, fontSize: 16 })}
                >
                  {productItem
                    ? productItem.inStock
                      ? "In Stock"
                      : "Out Of Stock"
                    : "Out Of Stock"}
                </Text>
              </View>
              <View style={styles.sizeView}>
                {sizeList ? (
                  sizeList.map((item, id) => (
                    <TouchableOpacity style={styles.btn} key={id}>
                      <Text style={styles.sizeText}>{item}</Text>
                    </TouchableOpacity>
                  ))
                ) : (
                  <></>
                )}
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
            <View style={{ flex: 0.5, flexDirection: "row", marginBottom: 0 }}>
              <TouchableOpacity style={styles.btn} onPress={shareProduct}>
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
                    productItem,
                    wishList,
                    setWishList,
                    domain,
                    userObj.email
                  );
                }}
              >
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
              <TouchableOpacity
                style={styles.btn2}
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
            <View style={{}}>
              <Text style={styles.productSubHeading}>Product Details</Text>
              <Text style={styles.productDetails}>
                {productItem ? productItem.description : "Loreum ipsum"}
              </Text>
              <Text style={styles.productSubHeading}>
                Reviews
                <Text style={{ fontWeight: "300" }}>
                  {" "}
                  ({reviewList ? reviewList.length : 0})
                </Text>
              </Text>
              {reviewList ? (
                <>
                  <ReviewCard
                    name={reviewList[0].name}
                    imgSrc={reviewList[0].imgSrc}
                    review={reviewList[0].review}
                    rating={reviewList[0].rating}
                  />
                  <TouchableOpacity
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      marginBottom: 5,
                      padding: 10,
                      justifyContent: "center",
                      backgroundColor: "#C4C4C4",
                    }}
                    onPress={() =>
                      navigation.navigate("Reviews", {
                        id: productItem.id,
                      })
                    }
                  >
                    <Text style={{ fontSize: 18, fontWeight: "600" }}>
                      {" "}
                      View More
                    </Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={{ marginVertical: 10 }}>No Reviews Yet...</Text>
                </>
              )}

              <TouchableOpacity
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  marginBottom: 50,
                  padding: 10,
                  justifyContent: "center",
                  backgroundColor: "#C4C4C4",
                }}
                onPress={() =>
                  navigation.navigate("AddAReview", {
                    reviewList: reviewList,
                    id: productItem.id,
                  })
                }
              >
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  {" "}
                  Add A New Review
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#999999" />
        </View>
      )}
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
  productSubHeading: {
    fontSize: 16,
    fontWeight: "600",
    // marginHorizontal: 10,
    marginTop: 20,
  },
  productDetails: {
    // marginHorizontal: 10,
    marginTop: 10,
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
    textAlign: "center",
    textTransform: "uppercase",
  },
});
