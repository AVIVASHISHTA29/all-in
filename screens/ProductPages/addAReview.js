import React, { useContext, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Slider from "@react-native-community/slider";
import Star from "react-native-star-view";
import { AntDesign } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";
import { Context } from "../../components/globalContext/globalContext";

export default function AddAReview() {
  const globalContext = useContext(Context);
  const { reviewList, setReviewList } = globalContext;
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Add A Review</Text>
        <Text style={[styles.subHeading, { textAlign: "left", marginTop: 20 }]}>
          Rating {rating}
        </Text>
        <Slider
          style={{ width: "100%", height: 40 }}
          value={rating}
          minimumValue={0}
          maximumValue={5}
          step={0.5}
          minimumTrackTintColor="#000"
          maximumTrackTintColor="#999"
          onValueChange={(value) => {
            setRating(value);
          }}
        />
        <Star score={rating ? rating : 3.5} style={styles.starStyle} />
        <TextInput
          multiline
          numberOfLines={10}
          value={review}
          onChangeText={(text) => setReview(text)}
          textContentType="name"
          style={[
            styles.input,
            { minHeight: 150, paddingTop: 10, maxHeight: 250 },
          ]}
          placeholder="Product Review"
        />
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={[styles.floatingButton, { marginTop: 20 }]}
            onPress={() => {
              showMessage({
                message: "Review Added",
                description:
                  "Your review was successfully added to the product!",
                type: "success",
              });
              setReviewList([
                ...reviewList,
                {
                  id: "101" + review.length.toString,
                  name: "Testing Name",
                  review: review,
                  imgSrc: require("../../assets/images/logo.png"),
                  rating: rating,
                },
              ]);
              setReview("");
              setRating(0);
            }}
          >
            <AntDesign name="plus" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
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
    color: "#999",
    textAlign: "center",
  },
  starStyle: {
    width: 200,
    height: 40,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
  input: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    fontWeight: "900",
    padding: 12,
    paddingLeft: 15,
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 2,
    width: "100%",
  },
  floatingButton: {
    borderWidth: 5,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "relative",
    height: 60,
    backgroundColor: "#000",
    borderRadius: 100,
  },
});
