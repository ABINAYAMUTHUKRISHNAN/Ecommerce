import React from "react";

export default React.createContext({
  products: [
    {
      id: "p1",
      title: "Essential Cotton-blend",
      price: "$100.00 USD",
      pic:
        "https://i.pinimg.com/originals/7a/90/be/7a90be9e37ec38da9bf22f076ffa4fbb.png"
    }
    // { id: "p2", title: "Harry Potter 3", price: 9.99 },
    // { id: "p3", title: "Used plastic bottle", price: 0.99 },
    // { id: "p4", title: "Half-dried plant", price: 2.99 }
  ],
  cart: [],
  addProductToCart: product => {
    //console.log(product);
  },
  removeProductFromCart: productId => {}
});
