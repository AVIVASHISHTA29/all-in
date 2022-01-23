import { useCallback, useContext, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Context } from "../../../components/globalContext/globalContext";
import ProductLongCard from "../../../components/ProductComponents/productLongCard";
import ProductSmallCard from "../../../components/ProductComponents/productSmallCard";
import { myRecommendations } from "../../../data/data.js";
import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";

import CheckoutFloatingDiv from "../../../components/CheckoutFloatingDiv";
import { ScrollViewBase } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const Profile = ({ navigation }) => {
  const globalContext = useContext(Context);
  const { cartList, setCartList, userObj, setUserObj, domain } = globalContext;

  function getUserData() {
    fetch(`${domain}/api/v1.0/user/user-data/${userObj.email}`, {
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
        setUserObj(json[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    getUserData();
    setRefreshing(false);
  }, [refreshing]);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={[styles.heading, { textAlign: "center" }]}>
        {userObj.first_name + " " + userObj.last_name}
      </Text>

      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 500,
            backgroundColor: "#E0E0E0",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../../assets/images/default.png")}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              textAlign: "center",
              color: "#999",
            }}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
        <Text style={[styles.subHeading, { textAlign: "left", marginTop: 10 }]}>
          Delivery Address
        </Text>
        <View style={styles.addressContainer}>
          <View style={{ width: "90%" }}>
            <Text
              style={[
                styles.subHeading,
                { textAlign: "left", fontSize: 16, color: "#333" },
              ]}
            >
              {userObj.address ? userObj.address : "Please Enter Your Address"}
            </Text>
          </View>
          <View
            style={{
              borderRadius: 100,
              borderWidth: 2,
              borderColor: "#000",
              padding: 5,
              backgroundColor: "#fff",
            }}
          >
            <Ionicons name="ios-location-outline" size={24} color="black" />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomePage");
        }}
      >
        <View style={styles.addressContainer}>
          <View>
            <Text
              style={[
                styles.subHeading,
                { textAlign: "left", fontSize: 16, color: "#333" },
              ]}
            >
              Home Page
            </Text>
          </View>
          <View
            style={{
              borderRadius: 100,
              borderWidth: 2,
              borderColor: "#000",
              padding: 5,
              backgroundColor: "#fff",
            }}
          >
            <AntDesign name="home" size={24} color="#000" />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Wishlist");
        }}
      >
        <View style={styles.addressContainer}>
          <View>
            <Text
              style={[
                styles.subHeading,
                { textAlign: "left", fontSize: 16, color: "#333" },
              ]}
            >
              Your Wishlist
            </Text>
          </View>
          <View
            style={{
              borderRadius: 100,
              borderWidth: 2,
              borderColor: "#000",
              padding: 5,
              backgroundColor: "#fff",
            }}
          >
            <Feather name="bookmark" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("My Orders");
        }}
      >
        <View style={styles.addressContainer}>
          <View>
            <Text
              style={[
                styles.subHeading,
                { textAlign: "left", fontSize: 16, color: "#333" },
              ]}
            >
              Your Orders
            </Text>
          </View>
          <View
            style={{
              borderRadius: 100,
              borderWidth: 2,
              borderColor: "#000",
              padding: 5,
              backgroundColor: "#fff",
            }}
          >
            <AntDesign name="shoppingcart" size={24} color="#000" />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flex: 0.5, marginTop: 10 }}>
        <CheckoutFloatingDiv navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  heading: {
    fontSize: 32,
    fontFamily: "Roboto-Bold",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 10,
  },
  addressContainer: {
    borderWidth: 2,
    borderColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Profile;
