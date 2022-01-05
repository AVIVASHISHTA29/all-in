import { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";

export default function SearchBarComponent() {
  const updateSearch = (search) => {
    setSearch(search);
  };
  const [search, setSearch] = useState("");
  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        inputContainerStyle={{
          backgroundColor: "#F7F7F7",
          paddingTop: 5,
          paddingBottom: 5,
          marginLeft: 10,
          marginRight: 10,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
      />
    </View>
  );
}
