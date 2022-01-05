import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ProductSmallCard({ image, title }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        resizeMode="contain"
        source={image}
        style={{ width: 70, height: 70 }}
      />
      <Text style={styles.title}>{title}</Text>
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
