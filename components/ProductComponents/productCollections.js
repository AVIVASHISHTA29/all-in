import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Star from "react-native-star-view";
import { showMessage } from "react-native-flash-message";
import shareProduct from "../functions/Share/sharingProducts";
import { useContext } from "react";
import { Context } from "../globalContext/globalContext";
import { Ionicons } from "@expo/vector-icons";
export default function ProductCollection(props) {
  const globalContext = useContext(Context);
  const { wishList, setWishList, cartList, setCartList } = globalContext;
  const collectionList = [
    {
      id: "31",
      title: "Shoe 1",
      price: "2200",
      size: "M",
      inStock: true,
      rating: 3,
      image: require("../../assets/images/shoe.png"),
    },
    {
      id: "32",
      title: "Shirt 1",
      price: "2500",
      size: "M",
      rating: 4.5,
      inStock: true,
      image: require("../../assets/images/shirt.png"),
    },
    {
      id: "33",
      title: "Trousers 3",
      price: "2200",
      size: "Xl",
      rating: 4,
      inStock: false,
      image: require("../../assets/images/pants.png"),
    },
    {
      id: "34",
      title: "Product Title 4",
      price: "2200",
      size: "M",
      rating: 4.5,
      inStock: true,
      image: require("../../assets/images/shoe.png"),
    },
    {
      id: "35",
      title: "Product Title 5",
      price: "2200",
      size: "M",
      rating: 1.5,
      inStock: false,
      image: require("../../assets/images/pants.png"),
    },
    {
      id: "36",
      title: "Tank 6",
      price: "2200",
      size: "M",
      rating: 2.5,
      inStock: true,
      image: require("../../assets/images/tank.png"),
    },
    {
      id: "37",
      title: "Shirt 7",
      price: "2200",
      size: "Sm",
      rating: 4,
      inStock: false,
      image: require("../../assets/images/shirt.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.heading}>Fall Collection</Text>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ marginBottom: 120, marginTop: 10 }}
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={collectionList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() => {
              props.navigation.navigate("Product", {
                title: item.title,
                img: item.image,
                price: item.price,
                rating: item.rating,
                inStockBool: item.inStock,
              });
            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                resizeMode="contain"
                source={item.image}
                style={{
                  width: 100,
                  height: 150,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>₹{item.price}</Text>
              <Star score={item.rating} style={styles.starStyle} />
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
                    showMessage({
                      message: "Added To Your Wish List",
                      description:
                        "This item was successfully added to your wish list!",
                      type: "success",
                    });
                    setWishList([
                      ...wishList,
                      {
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        size: item.size,
                        rating: item.rating,
                        inStock: item.inStock,
                        image: item.image,
                      },
                    ]);
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
                    showMessage({
                      message: "Added To Your Cart",
                      description:
                        "This item was successfully added to your cart! Happy Shopping !",
                      type: "success",
                    });
                    setCartList([
                      ...cartList,
                      {
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        size: item.size,
                        rating: item.rating,
                        inStock: item.inStock,
                        image: item.image,
                      },
                    ]);
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
