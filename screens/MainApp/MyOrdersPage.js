import {
  FlatList,
  Image,
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

const MyOrders = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Orders</Text>
      <View style={{ flex: 1 }}>
        {myOrderList.length > 0 ? (
          <FlatList
            nestedScrollEnabled
            style={{ marginBottom: 20, flex: 1, marginTop: 10 }}
            keyExtractor={(item) => item.id}
            data={myOrderList}
            renderItem={({ item }) => (
              <ProductLongCard
                title={item.title}
                price={item.price}
                size={item.size}
                inStock={item.inStock}
                image={item.image}
                rating={item.rating}
                navigation={navigation}
                showDeleteButton={false}
                showAddToCartButton={false}
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
              <AntDesign name="shoppingcart" size={48} color="black" />
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
              <ProductSmallCard
                title={item.title}
                image={item.image}
                navigation={navigation}
              />
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
