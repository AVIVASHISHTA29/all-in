import { showMessage } from "react-native-flash-message";

function AddToCart(item, cartList, setCartList) {
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
  }
}

export default AddToCart;
