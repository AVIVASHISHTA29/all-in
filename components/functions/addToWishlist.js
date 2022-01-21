import { useState } from "react";
import { showMessage } from "react-native-flash-message";

function AddToWishlist(item, wishList, setWishList) {
  if (wishList.indexOf(item) !== -1) {
    showMessage({
      message: "Item Already Added!",
      description: "This item already exists in your wish list!",
      type: "danger",
    });
  } else {
    showMessage({
      message: "Added To Your Wish List",
      description: "This item was successfully added to your wish list!",
      type: "success",
    });
    setWishList([...wishList, item]);
  }
}

export default AddToWishlist;
