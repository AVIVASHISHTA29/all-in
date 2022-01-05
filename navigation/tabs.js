// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import HomePage from "../screens/MainApp/HomePage";
// import Chats from "../screens/MainApp/Wishlist";
// import Profile from "../screens/MainApp/Profile";
// import Search from "../screens/MainApp/Search";

// const Tab = createBottomTabNavigator();

// const Tabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Home") {
//             iconName = "home";
//           } else if (route.name === "Search") {
//             iconName = "search";
//           } else if (route.name === "Chats") {
//             iconName = "chatbubbles";
//           } else if (route.name === "Profile") {
//             iconName = "person-circle";
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={28} color={color} />;
//         },
//         tabBarActiveTintColor: "black",
//         tabBarInactiveTintColor: "gray",
//         tabBarShowLabel: false,
//       })}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomePage}
//         options={{
//           title: "All-In",
//           headerTitleAlign: "left",
//           headerStyle: {
//             backgroundColor: "#fff",
//           },
//           headerTintColor: "#fff",
//           headerTitleStyle: {
//             fontSize: 24,
//             // fontStyle: "Roboto-Black",
//             fontWeight: "bold",
//             color: "#000",
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={Search}
//         options={{
//           title: "Search",
//           headerTitleAlign: "left",
//           headerStyle: {
//             backgroundColor: "#fff",
//           },
//           headerTintColor: "#fff",
//           headerTitleStyle: {
//             fontSize: 24,
//             // fontStyle: "Roboto-Black",
//             fontWeight: "bold",
//             color: "#000",
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Chats"
//         component={Chats}
//         options={{
//           title: "Chats",
//           headerTitleAlign: "left",
//           headerStyle: {
//             backgroundColor: "#fff",
//           },
//           headerTintColor: "#fff",
//           headerTitleStyle: {
//             fontSize: 24,
//             // fontStyle: "Roboto-Black",
//             fontWeight: "bold",
//             color: "#000",
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           title: "Profile",
//           headerTitleAlign: "left",
//           headerStyle: {
//             backgroundColor: "#fff",
//           },
//           headerTintColor: "#fff",
//           headerTitleStyle: {
//             fontSize: 24,
//             // fontStyle: "Roboto-Black",
//             fontWeight: "bold",
//             color: "#000",
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default Tabs;
