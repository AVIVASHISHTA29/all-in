import { useState } from "react";
import { myWishList, myRecommendations } from "../../data/data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductLongCard from "../../components/ProductComponents/productLongCard";
import ProductSmallCard from "../../components/ProductComponents/productSmallCard";

const Wishlist = ({ navigation }) => {
  const list = myWishList;
  const [wishList, setWishList] = useState(list);

  const deleteItemWish = (id) => {
    setWishList((wishList) => {
      return wishList.filter((item) => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Wishlist</Text>
      <View style={{ flex: 1 }}>
        <FlatList
          nestedScrollEnabled
          style={{ marginBottom: 20, flex: 1, marginTop: 10 }}
          keyExtractor={(item) => item.id}
          data={wishList}
          renderItem={({ item }) => (
            <ProductLongCard
              id={item.id}
              title={item.title}
              price={item.price}
              size={item.size}
              inStock={item.inStock}
              image={item.image}
              rating={item.rating}
              navigation={navigation}
              deleteItem={deleteItemWish}
              showDeleteButton={true}
              showAddToCartButton={true}
            />
          )}
        />
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
                id={item.id}
                title={item.title}
                price={item.price}
                size={item.size}
                inStock={item.inStock}
                image={item.image}
                rating={item.rating}
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

export default Wishlist;
