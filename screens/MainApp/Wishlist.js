import { useCallback, useContext, useEffect, useState } from "react";
import { myWishList, myRecommendations } from "../../data/data";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductLongCard from "../../components/ProductComponents/productLongCard";
import ProductSmallCard from "../../components/ProductComponents/productSmallCard";
import { Context } from "../../components/globalContext/globalContext";
import { Feather, AntDesign } from "@expo/vector-icons";
import getWishList from "../../components/functions/DbFunctions/updateWishList";

const Wishlist = ({ navigation }) => {
  const globalContext = useContext(Context);
  const { wishList, setWishList, domain, userObj } = globalContext;

  const deleteItemWish = (id) => {
    setWishList((wishList) => {
      return wishList.filter((item) => item.id != id);
    });
    newList = wishList.filter((item) => item.id != id);
    let body = JSON.stringify({
      wish_list: { products: newList },
    });

    fetch(`${domain}/api/v1.0/user/user-data/${userObj.email}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("User data coudn't be updated");
          throw res.json();
        }
      })
      .then((json) => {
        // setUserObj(json);
        // setToken(json.token);
        // setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWishList(setWishList, domain, userObj);
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    getWishList(setWishList, domain, userObj);
    setRefreshing(false);
  }, [refreshing]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Wishlist</Text>
      <View style={{ flex: 1 }}>
        {wishList ? (
          wishList.length > 0 ? (
            <FlatList
              nestedScrollEnabled
              style={{ marginBottom: 20, flex: 1, marginTop: 10 }}
              keyExtractor={(item) => item.id}
              data={wishList}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              renderItem={({ item }) => (
                <ProductLongCard
                  id={item.id}
                  navigation={navigation}
                  deleteItem={deleteItemWish}
                  showDeleteButton={true}
                  showAddToCartButton={true}
                />
              )}
            />
          ) : (
            <TouchableOpacity
              onPress={() => {
                getWishList(setWishList, domain, userObj);
              }}
              style={{
                textAlign: "center",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                margin: 20,
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <View style={{}}>
                <Feather name="bookmark" size={48} color="black" />
              </View>
              <Text
                style={[
                  styles.subHeading,
                  { marginTop: 20, color: "#000", textAlign: "center" },
                ]}
              >
                Your Wishlist is Empty
              </Text>
              <AntDesign
                name="reload1"
                size={20}
                color="black"
                style={{ marginTop: 20 }}
              />
            </TouchableOpacity>
          )
        ) : (
          <TouchableOpacity
            onPress={() => {
              getWishList(setWishList, domain, userObj);
            }}
            style={{
              textAlign: "center",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <View style={{}}>
              <Feather name="bookmark" size={48} color="black" />
            </View>
            <Text
              style={[
                styles.subHeading,
                { marginTop: 20, color: "#000", textAlign: "center" },
              ]}
            >
              Your Wishlist is Empty
            </Text>
            <AntDesign
              name="reload1"
              size={20}
              color="black"
              style={{ marginTop: 20 }}
            />
          </TouchableOpacity>
        )}

        <View style={{ flex: 0.4 }}>
          <Text style={styles.subHeading}>You May Also Like</Text>
          <FlatList
            nestedScrollEnabled
            horizontal={true}
            style={{ marginBottom: 0, flex: 1 }}
            keyExtractor={(item) => item.id}
            data={myRecommendations}
            renderItem={({ item }) => (
              <ProductSmallCard productItem={item} navigation={navigation} />
            )}
          />
        </View>
      </View>
    </View>
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
});

export default Wishlist;
