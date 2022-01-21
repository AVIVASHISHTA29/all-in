import { showMessage } from "react-native-flash-message";

function AddToCart(item, cartList, setCartList) {
  showMessage({
    message: "Added To Your Cart",
    description:
      "This item was successfully added to your cart! Happy Shopping !",
    type: "success",
  });
  setCartList([...cartList, item]);
}

export default AddToCart;
