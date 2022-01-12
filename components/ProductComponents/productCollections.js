import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function ProductCollection(props) {
  const openProduct = () => {
    props.navigation.navigate("Product");
  };

  const productList = [
    {
      id: "1",
      title: "Product Title",
      image: require("../../assets/images/default.png"),
    },
    {
      id: "2",
      title: "Product Title 2",
      image: require("../../assets/images/default.png"),
    },
    {
      id: "3",
      title: "Product Title 3",
      image: require("../../assets/images/default.png"),
    },
    {
      id: "4",
      title: "Product Title 4",
      image: require("../../assets/images/default.png"),
    },
    {
      id: "5",
      title: "Product Title 5",
      image: require("../../assets/images/default.png"),
    },
    {
      id: "6",
      title: "Product Title 6",
      image: require("../../assets/images/default.png"),
    },
    {
      id: "7",
      title: "Product Title 7",
      image: require("../../assets/images/default.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fall Collection</Text>
      <FlatList
        style={{ marginBottom: 120 }}
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={productList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={openProduct}
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
                  marginTop: 20,
                }}
              />
              <Text style={styles.title}>{item.title}</Text>
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
    height: 280,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#E5E5E54A",
  },
});
