import { showMessage } from "react-native-flash-message";

function AddToCart(item, cartList, setCartList, domain, email) {
  if (cartList.indexOf(item) !== -1) {
    showMessage({
      message: "Item Already Added!",
      description: "This item already exists in your wish list!",
      type: "danger",
    });
  } else {
    showMessage({
      message: "Added To Your Cart",
      description:
        "This item was successfully added to your cart! Happy Shopping !",
      type: "success",
    });
    setCartList([...cartList, item]);
    newList = [...cartList, item];
    let body = JSON.stringify({
      my_cart: { products: newList },
    });

    fetch(`${domain}/api/v1.0/user/user-data/${email}/`, {
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
  }
}

export default AddToCart;
