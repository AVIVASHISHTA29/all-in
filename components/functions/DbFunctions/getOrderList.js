function getOrderList(setOrderList, domain, userObj) {
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
      setOrderList(json[0].my_orders.products);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("Getting and setting order list...");
}

export default getOrderList;
