import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RightNavButtons() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 80,
        // height: 100,
        marginRight: 20,
        // padding: 10,
      }}
    >
      <TouchableOpacity>
        <Image
          source={require("../assets/icons/TopBarIcons/saved.png")}
          style={{ width: 17, height: 17 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../assets/icons/TopBarIcons/cart.png")}
          style={{ width: 17, height: 17 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../assets/icons/TopBarIcons/person.png")}
          style={{ width: 17, height: 17 }}
        />
      </TouchableOpacity>
    </View>
  );
}
