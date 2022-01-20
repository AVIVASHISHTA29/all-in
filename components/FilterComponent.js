import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";

export default function FilterComponent() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
