function getCartList(setCartList, domain, userObj) {
  fetch(`${domain}/api/v1.0/user/user-data/${userObj.email}`, {
    method: "GET",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res.json();
      }
    })
    .then((json) => {
      setCartList(json[0].my_cart.products);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("Getting and setting cart list...");
}

export default getCartList;
