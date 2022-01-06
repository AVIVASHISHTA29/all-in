import { createDrawerNavigator } from "@react-navigation/drawer";
import RightNavButtons from "../components/rightNavButtons";
import HomePage from "../screens/MainApp/HomePage";
import Profile from "../screens/MainApp/Profile";
import Wishlist from "../screens/MainApp/Wishlist";
import ProductPage from "../screens/ProductPages/productPage";
import MyOrders from "../screens/MainApp/MyOrdersPage";

const Drawer = createDrawerNavigator();

const DrawerTab = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "#000",
        drawerStyle: { color: "#000" },
        headerTitleStyle: { display: "none" },
        drawerActiveBackgroundColor: "#fff",
        drawerActiveColor: "#000",
        drawerActiveTintColor: "#000",
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
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => <RightNavButtons />,
        }}
      />
      <Drawer.Screen
        name="Product Page"
        component={ProductPage}
        options={{
          headerRight: () => <RightNavButtons />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerTab;
