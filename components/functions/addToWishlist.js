import { useState } from "react";
import { showMessage } from "react-native-flash-message";

function AddToWishlist(item, wishList, setWishList, domain, email) {
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
    setWishList([...wishList, { id: item.id }]);
    newList = [...wishList, { id: item.id }];
    let body = JSON.stringify({
      wish_list: { products: newList },
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

export default AddToWishlist;
