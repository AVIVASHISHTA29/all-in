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

export default function AddAReview({ route }) {
  const [reviewList, setReviewList] = useState(route.params.reviewList);

  const globalContext = useContext(Context);
  const { userObj, domain } = globalContext;
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  function addReview() {
    showMessage({
      message: "Review Added",
      description: "Your review was successfully added to the product!",
      type: "success",
    });
    if (reviewList) {
      setReviewList([
        ...reviewList,
        {
          id: reviewList ? reviewList.length + 1 : 0,
          name: userObj.first_name + " " + userObj.last_name,
          review: review,
          imgSrc: require("../../assets/images/default.png"),
          rating: rating,
        },
      ]);

      newList = [
        ...reviewList,
        {
          id: reviewList ? reviewList.length + 1 : 0,
          name: userObj.first_name + " " + userObj.last_name,
          review: review,
          imgSrc: require("../../assets/images/default.png"),
          rating: rating,
        },
      ];
    } else {
      setReviewList([
        {
          id: reviewList ? reviewList.length + 1 : 0,
          name: userObj.first_name + " " + userObj.last_name,
          review: review,
          imgSrc: require("../../assets/images/default.png"),
          rating: rating,
        },
      ]);

      newList = [
        {
          id: reviewList ? reviewList.length + 1 : 0,
          name: userObj.first_name + " " + userObj.last_name,
          review: review,
          imgSrc: require("../../assets/images/default.png"),
          rating: rating,
        },
      ];
    }

    let body = JSON.stringify({
      reviews: { data: newList },
    });

    fetch(`${domain}/api/v1.0/user/product-data/${route.params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("User review coudn't be updated");
          throw res.json();
        }
      })
      .then((json) => {
        // setUserObj(json);
        // setToken(json.token);
        // setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });

    setReview("");
    setRating(0);
  }

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
        <Star score={rating ? rating : 0} style={styles.starStyle} />
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
            onPress={addReview}
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
