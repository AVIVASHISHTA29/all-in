import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context } from "../../components/globalContext/globalContext";
import ReviewCard from "../../components/ReviewCard";

export default function ReviewScreen({ route }) {
  const globalContext = useContext(Context);
  const { domain } = globalContext;
  const [reviewList, setReviewList] = useState();

  useEffect(() => {
    fetch(`${domain}/api/v1.0/user/product-data/${route.params.id}`, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res.json();
        }
      })
      .then((json) => {
        setReviewList(json.reviews.data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("Getting and setting product data...");
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Reviews ({reviewList ? reviewList.length : 0})
      </Text>
      <FlatList
        style={{ marginBottom: 0, marginTop: 10 }}
        keyExtractor={(item) => item.id}
        data={reviewList}
        renderItem={({ item }) => (
          <ReviewCard
            name={item.name}
            imgSrc={item.imgSrc}
            rating={item.rating}
            review={item.review}
          />
        )}
      />
    </SafeAreaView>
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
});
