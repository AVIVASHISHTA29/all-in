import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Star from "react-native-star-view";
function ReviewCard(props) {
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
          marginTop: 10,
        }}
      >
        <Image
          resizeMode="contain"
          source={props.imgSrc}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{props.name}</Text>
        <Star
          score={props.rating ? props.rating : 3.5}
          style={styles.starStyle}
        />
        <Text style={{ marginHorizontal: 10, marginBottom: 10 }}>
          {props.review}
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
    marginVertical: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "#F7F7F7",
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    marginTop: 0,
  },
});
