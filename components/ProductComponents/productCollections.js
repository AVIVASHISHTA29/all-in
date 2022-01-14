import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Star from "react-native-star-view";

export default function ProductCollection(props) {
  const openProduct = (title, img) => {};

  const collectionList = [
    {
      id: "1",
      title: "Product Title",
      image: require("../../assets/images/default.png"),
      price: "2200",
      size: "Sm",
      rating: 4,
      inStock: false,
    },
    {
      id: "2",
      title: "Product Title 2",
      image: require("../../assets/images/default.png"),
      price: "2500",
      size: "Sm",
      rating: 3.5,
      inStock: true,
    },
    {
      id: "3",
      title: "Product Title 3",
      image: require("../../assets/images/default.png"),
      price: "1500",
      size: "M",
      rating: 4.5,
      inStock: false,
    },
    {
      id: "4",
      title: "Product Title 4",
      image: require("../../assets/images/default.png"),
      price: "1200",
      size: "Xl",
      rating: 2.5,
      inStock: false,
    },
    {
      id: "5",
      title: "Product Title 5",
      image: require("../../assets/images/default.png"),
      price: "2250",
      size: "M",
      rating: 3.5,
      inStock: true,
    },
    {
      id: "6",
      title: "Product Title 6",
      image: require("../../assets/images/default.png"),
      price: "2550",
      size: "L",
      rating: 3.5,
      inStock: false,
    },
    {
      id: "7",
      title: "Product Title 7",
      image: require("../../assets/images/default.png"),
      price: "3200",
      size: "L",
      rating: 4.5,
      inStock: true,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fall Collection</Text>
      <FlatList
        style={{ marginBottom: 120 }}
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
            <View>
              <Image
                resizeMode="contain"
                source={item.image}
                style={{
                  width: 100,
                  height: 220,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>₹{item.price}</Text>
              <Star score={item.rating} style={styles.starStyle} />
              <View
                style={{ flex: 0.5, flexDirection: "row", marginBottom: 0 }}
              >
                <TouchableOpacity style={styles.btn2}>
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/icons/share.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/icons/TopBarIcons/saved.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
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
