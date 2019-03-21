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
  ],
  cart: [],
  login: false,
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
  checkStatus: success => {}
});
