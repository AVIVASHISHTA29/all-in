import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductLongCard from "../../components/ProductComponents/productLongCard";
import ProductSmallCard from "../../components/ProductComponents/productSmallCard";

const MyCart = ({ navigation }) => {
  const productList = [
    {
      id: "1",
      title: "Product Title",
      price: "2200",
      size: "M",
      inStock: true,
      image: require("../../assets/images/shoe.png"),
    },
    {
      id: "2",
      title: "Product Title 2",
      price: "2500",
      size: "M",
      inStock: true,
      image: require("../../assets/images/shirt.png"),
    },
    {
      id: "3",
      title: "Product Title 3",
      price: "2200",
      size: "Xl",
      inStock: false,
      image: require("../../assets/images/pants.png"),
    },
    {
      id: "4",
      title: "Product Title 4",
      price: "2200",
      size: "M",
      inStock: true,
      image: require("../../assets/images/shoe.png"),
    },
    {
      id: "5",
      title: "Product Title 5",
      price: "2200",
      size: "M",
      inStock: false,
      image: require("../../assets/images/pants.png"),
    },
    {
      id: "6",
      title: "Product Title 6",
      price: "2200",
      size: "M",
      inStock: true,
      image: require("../../assets/images/tank.png"),
    },
    {
      id: "7",
      title: "Product Title 7",
      price: "2200",
      size: "Sm",
      inStock: false,
      image: require("../../assets/images/shirt.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Orders</Text>
      <View style={{ flex: 1 }}>
        <FlatList
          nestedScrollEnabled
          style={{ marginBottom: 20, flex: 1 }}
          keyExtractor={(item) => item.id}
          data={productList}
          renderItem={({ item }) => (
            <ProductLongCard
              title={item.title}
              price={item.price}
              size={item.size}
              inStock={item.inStock}
              image={item.image}
            />
          )}
        />
        <View style={{ flex: 0.4 }}>
          <Text style={styles.subHeading}>You Also Bought</Text>
          <FlatList
            nestedScrollEnabled
            horizontal={true}
            style={{ marginBottom: 0, flex: 1 }}
            keyExtractor={(item) => item.id}
            data={productList}
            renderItem={({ item }) => (
              <ProductSmallCard title={item.title} image={item.image} />
            )}
          />
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
