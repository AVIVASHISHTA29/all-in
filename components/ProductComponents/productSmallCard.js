import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ProductSmallCard(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.navigation.navigate("Product", {
          title: props.title,
          price: props.price,
          inStock: props.inStock,
          imgUrl: props.imgUrl,
          rating: props.rating,
        });
      }}
    >
      <Image
        resizeMode="contain"
        source={{ uri: props.image }}
        style={{ width: 70, height: 70 }}
      />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default ProductSmallCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 10,
    marginVertical: 10,
    // marginTop: 10,
  },
  container: {
    flex: 1,
    margin: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F7F7",
  },
});
