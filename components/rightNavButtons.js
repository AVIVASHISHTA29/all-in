import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RightNavButtons() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 90,
        marginRight: 20,
      }}
    >
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          source={require("../assets/icons/TopBarIcons/saved.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          source={require("../assets/icons/TopBarIcons/cart.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          source={require("../assets/icons/TopBarIcons/person.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
}
