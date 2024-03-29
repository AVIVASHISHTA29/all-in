import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import RightNavButtons from "../components/rightNavButtons";
import HomePage from "../screens/MainApp/HomePage";
import Profile from "../screens/MainApp/Profile/Profile";
import Wishlist from "../screens/MainApp/Wishlist";
import ProductPage from "../screens/ProductPages/productPage";
import MyOrders from "../screens/MainApp/MyOrdersPage";
import MyCart from "../screens/MainApp/MyCart";
import { Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { Context } from "../components/globalContext/globalContext";
import ProductStack from "./productStack";
import topBarStack from "./topBarStack";
import { StackActions } from "@react-navigation/routers";
import AddProducts from "../screens/AdminPages/addProducts";

const Drawer = createDrawerNavigator();

function DrawerTab({ navigation }) {
  const globalContext = useContext(Context);
  const { setIsLoggedIn } = globalContext;
  const isAdmin = true;
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
        initialRouteName={"HomePage"}
        children={ProductStack}
        options={{
          headerRight: () => <RightNavButtons navigation={navigation} />,
        }}
      />
      <Drawer.Screen
        name="My Orders"
        component={MyOrders}
        options={{
          headerRight: () => <RightNavButtons navigation={navigation} />,
        }}
      />
      <Drawer.Screen
        name="My Cart"
        component={MyCart}
        options={{
          headerRight: () => <RightNavButtons navigation={navigation} />,
        }}
      />
      {isAdmin ? (
        <>
          <Drawer.Screen
            name="Add Product"
            component={AddProducts}
            options={{
              headerRight: () => <RightNavButtons navigation={navigation} />,
            }}
          />
        </>
      ) : (
        <></>
      )}

      {/* 
      <Drawer.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerRight: () => <RightNavButtons navigation={navigation} />,
        }}
      />
      
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => <RightNavButtons navigation={navigation} />,
        }}
      />
      
      <Drawer.Screen
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
