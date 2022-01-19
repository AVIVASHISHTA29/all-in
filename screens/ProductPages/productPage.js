import { useContext, useState } from "react";
import {
  Button,
  Image,
  Keyboard,
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
import { myWishList, reviewList } from "../../data/data";
import Wishlist from "../MainApp/Wishlist";
import { Context } from "../../components/globalContext/globalContext";

export default function ProductPage({ route, navigation }) {
  const globalContext = useContext(Context);
  const { wishList, setWishList, cartList, setCartList } = globalContext;

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
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.productHeading}>
            {route.params.title
              ? route.params.title
              : "All-In Essentials Half Sleeves Tshirt"}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Star
              score={route.params.rating ? route.params.rating : 3.5}
              style={styles.starStyle}
            />
            <Text style={{ marginBottom: 10 }}>
              {route.params.rating ? route.params.rating : 3.5}
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
            <Image
              resizeMode="contain"
              source={
                route.params.img
                  ? route.params.img
                  : require("../../assets/images/default.png")
              }
              style={{
                height: 300,
                width: 200,
              }}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <View>
              <Text style={styles.price}>
                ₹{route.params.price ? route.params.price : 2500}
              </Text>
              <Text
                style={(styles.price, { marginHorizontal: 10, fontSize: 16 })}
              >
                {route.params.inStockBool ? "In Stock" : "Out Of Stock"}
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
                showMessage({
                  message: "Added To Your Wish List",
                  description:
                    "This item was successfully added to your wish list!",
                  type: "success",
                });
                setWishList([
                  ...wishList,
                  {
                    id: route.params.id,
                    title: route.params.title,
                    price: route.params.price,
                    size: route.params.size,
                    rating: route.params.rating,
                    inStock: route.params.inStockBool,
                    image: route.params.img,
                  },
                ]);
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
                showMessage({
                  message: "Added To Your Cart",
                  description:
                    "This item was successfully added to your cart! Happy Shopping !",
                  type: "success",
                });

                setCartList([
                  ...cartList,
                  {
                    id: route.params.id,
                    title: route.params.title,
                    price: route.params.price,
                    size: route.params.size,
                    rating: route.params.rating,
                    inStock: route.params.inStockBool,
                    image: route.params.img,
                  },
                ]);
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
              pharetra, tortor cum molestie habitant viverra eu, nunc gravida.
              Ut suspendisse urna tortor lacus. Risus tortor phasellus arcu,
              malesuada pulvinar donec quis non pretium.
            </Text>
            <Text style={styles.productSubHeading}>
              Reviews
              <Text style={{ fontWeight: "300" }}> ({reviewList.length})</Text>
            </Text>
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
              onPress={() => navigation.navigate("Reviews")}
            >
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {" "}
                View More
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                textAlign: "center",
                alignItems: "center",
                marginBottom: 50,
                padding: 10,
                justifyContent: "center",
                backgroundColor: "#C4C4C4",
              }}
              onPress={() => navigation.navigate("AddAReview")}
            >
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {" "}
                Add A New Review
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    // width: 25,
    // height: 25,
    textAlign: "center",
  },
});
