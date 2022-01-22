function getWishList(setWishList, domain, userObj) {
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
      setWishList(json[0].wish_list.products);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("Getting and setting wish list...");
}

export default getWishList;
