import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ReviewCard() {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 500,
          backgroundColor: "#E0E0E0",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          resizeMode="contain"
          source={require("../assets/images/head.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Name Of The Person</Text>
        <Text style={{ marginHorizontal: 10, marginBottom: 10 }}>
          Review of the App, How is it, etc, etc, loved it. 10/10 Would
          Recommend.
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ReviewCard;

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
    marginVertical: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F7F7F7",
  },
});
