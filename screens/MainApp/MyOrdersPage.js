import {
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { myOrderList, myRecommendations } from "../../data/data.js";
import ProductLongCard from "../../components/ProductComponents/productLongCard";
import ProductSmallCard from "../../components/ProductComponents/productSmallCard";
import { AntDesign } from "@expo/vector-icons";
import { useCallback, useContext, useEffect, useState } from "react";
import getOrderList from "../../components/functions/DbFunctions/getOrderList.js";
import { Context } from "../../components/globalContext/globalContext.js";

const MyOrders = ({ navigation }) => {
  const globalContext = useContext(Context);
  const { orderList, setOrderList, domain, userObj } = globalContext;

  useEffect(() => {
    getOrderList(setOrderList, domain, userObj);
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    getOrderList(setOrderList, domain, userObj);
    setRefreshing(false);
  }, [refreshing]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Orders</Text>
      <View style={{ flex: 1 }}>
        {orderList.length > 0 ? (
          <FlatList
            nestedScrollEnabled
            style={{ marginBottom: 20, flex: 1, marginTop: 10 }}
            keyExtractor={(item) => item.id}
            data={orderList}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({ item }) => (
              <ProductLongCard
                id={item.id}
                quantity={item.quantity}
                navigation={navigation}
                showDeleteButton={false}
                showAddToCartButton={false}
                isCheckOut={true}
              />
            )}
          />
        ) : (
          <View
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
              <AntDesign name="clockcircleo" size={48} color="black" />
            </View>
            <Text
              style={[
                styles.subHeading,
                { marginTop: 20, color: "#000", textAlign: "center" },
              ]}
            >
              Your Order List is Empty
            </Text>
          </View>
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

export default MyOrders;
