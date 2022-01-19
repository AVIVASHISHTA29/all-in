import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MultiSelect from "react-native-multiple-select";
import { AntDesign } from "@expo/vector-icons";
import { Switch, TextInput } from "react-native-gesture-handler";
import { useContext, useState } from "react";
import { Context } from "../../components/globalContext/globalContext";

export default function AddProducts({ navigation, route, props }) {
  const globalContext = useContext(Context);
  const { setIsLoggedIn, appSettings, domain, userObj, setUserObj, setToken } =
    globalContext;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [inStock, setInStock] = useState(false);
  const [imgURL, setImgURL] = useState("");
  const [error, setError] = useState("");
  const toggleSwitch = () => setInStock((previousState) => !previousState);

  //   const sizesList = [
  //     {
  //       id: "1",
  //       name: "Xs",
  //     },
  //     {
  //       id: "2",
  //       name: "Sm",
  //     },
  //     {
  //       id: "3",
  //       name: "M",
  //     },
  //     {
  //       id: "4",
  //       name: "L",
  //     },
  //     {
  //       id: "5",
  //       name: "Xl",
  //     },
  //   ];

  //   const selectedItems = [];

  //   onSelectedItemsChange = (selectedItems) => {
  //     this.setState({ selectedItems });
  //   };

  function handleAddProduct() {
    setError("");
    if (confirmPassword != password) {
      setError("Passwords do not match!");
    } else if (
      email == "" ||
      firstName == "" ||
      lastName == "" ||
      password == ""
    ) {
      setError("All Fields Are Required!");
    } else {
      let body = JSON.stringify({
        username: email.toLowerCase(),
        email: email.toLowerCase(),
        first_name: firstName,
        last_name: lastName,
        password: password,
      });

      fetch(`${domain}/api/v1.0/user/create-user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            setError("User already exists");
            throw res.json();
          }
        })
        .then((json) => {
          setUserObj(json);
          setToken(json.token);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.mainHeading}>Add Products</Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
              marginBottom: 0,
            }}
          >
            <AntDesign name="shoppingcart" size={48} color="black" />
          </View>

          <Text style={[styles.subHeading, { marginTop: 20 }]}>
            Add product details accordingly
          </Text>
          <View>
            <TextInput
              value={title}
              onChangeText={(text) => setTitle(text)}
              textContentType="name"
              style={styles.input}
              placeholder="Product Title"
            />
            <TextInput
              multiline
              numberOfLines={10}
              value={description}
              onChangeText={(text) => setDescription(text)}
              textContentType="name"
              style={[
                styles.input,
                { minHeight: 100, paddingTop: 10, maxHeight: 250 },
              ]}
              placeholder="Product description"
            />
            <TextInput
              value={imgURL}
              onChangeText={(text) => setImgURL(text)}
              textContentType="name"
              style={styles.input}
              placeholder="Img URL"
            />
            <TextInput
              value={size}
              onChangeText={(text) => setSize(text)}
              textContentType="name"
              style={styles.input}
              placeholder="Size"
            />
            {/* <View
              style={[
                styles.input,
                {
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  borderWidth: 0,
                },
              ]}
            >
              <Text style={{ fontSize: 18, marginRight: 5 }}>Size</Text>
              <MultiSelect
                hideTags
                items={sizesList}
                uniqueKey="id"
                ref={(component) => {
                  this.multiSelect = component;
                }}
                onSelectedItemsChange={this.onSelectedItemsChange}
                selectedItems={selectedItems}
                selectText="Pick Items"
                searchInputPlaceholderText="Search Items..."
                onChangeInput={(text) => console.log(text)}
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: "#CCC" }}
                submitButtonColor="#CCC"
                submitButtonText="Submit"
              />
            </View> */}

            <View
              style={[
                styles.input,
                { flexDirection: "row", justifyContent: "flex-start" },
              ]}
            >
              <Text style={{ fontSize: 18, marginRight: 5 }}>₹</Text>
              <TextInput
                style={{ fontSize: 18, flex: 1 }}
                value={price}
                keyboardType="number-pad"
                onChangeText={(text) => setPrice(text)}
                placeholder="Price"
              />
            </View>
            <View
              style={[
                styles.input,
                {
                  borderWidth: 0,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={{ fontSize: 18, marginRight: 15 }}>In Stock</Text>
              <Switch
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={inStock}
              />
            </View>
          </View>
          <Text style={styles.error}>{error}</Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity
              style={styles.floatingButton}
              onPress={handleAddProduct}
            >
              <AntDesign name="plus" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  mainHeading: {
    fontSize: 32,
    fontFamily: "Roboto-Black",
    textAlign: "center",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#999",
    textAlign: "center",
  },
  input: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    fontWeight: "900",
    padding: 12,
    paddingLeft: 15,
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 2,
    width: "100%",
  },
  floatingButton: {
    borderWidth: 5,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "relative",
    height: 60,
    backgroundColor: "#000",
    borderRadius: 100,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
