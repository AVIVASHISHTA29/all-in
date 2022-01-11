import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import RightNavButtons from "../components/rightNavButtons";
import HomePage from "../screens/MainApp/HomePage";
import Profile from "../screens/MainApp/Profile";
import Wishlist from "../screens/MainApp/Wishlist";
import ProductPage from "../screens/ProductPages/productPage";
import MyOrders from "../screens/MainApp/MyOrdersPage";
import MyCart from "../screens/MainApp/MyCart";
import { Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { Context } from "../components/globalContext/globalContext";

const Drawer = createDrawerNavigator();

function DrawerTab() {
  const globalContext = useContext(Context);
  const { setIsLoggedIn } = globalContext;
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "#000",
        drawerStyle: { color: "#000" },
        headerTitleStyle: { display: "none" },
        drawerActiveBackgroundColor: "#fff",
        drawerActiveColor: "#000",
        drawerActiveTintColor: "#000",
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => setIsLoggedIn(false)} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomePage}
        options={{
          headerRight: () => <RightNavButtons />,
        }}
      />
      <Drawer.Screen
        name="My Orders"
        component={MyOrders}
        options={{
          headerRight: () => <RightNavButtons />,
        }}
      />
      <Drawer.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerRight: () => <RightNavButtons />,
        }}
      />
      <Drawer.Screen
        name="My Cart"
        component={MyCart}
        options={{
          headerRight: () => <RightNavButtons />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => <RightNavButtons />,
        }}
      />

      {/* <Drawer.Screen
        name="Product Page"
        component={ProductPage}
        options={{
          headerRight: () => <RightNavButtons />,
        }}
      /> */}
    </Drawer.Navigator>
  );
}

export default DrawerTab;
