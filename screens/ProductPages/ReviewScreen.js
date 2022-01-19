import React, { useContext } from "react";
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

export default function ReviewScreen() {
  const globalContext = useContext(Context);
  const { reviewList } = globalContext;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Reviews ({reviewList.length})</Text>
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
