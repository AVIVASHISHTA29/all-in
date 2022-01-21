import { showMessage } from "react-native-flash-message";

function AddToWishlist(item, wishList, setWishList) {
  showMessage({
    message: "Added To Your Wish List",
    description: "This item was successfully added to your wish list!",
    type: "success",
  });
  setWishList([...wishList, item]);
}

export default AddToWishlist;
