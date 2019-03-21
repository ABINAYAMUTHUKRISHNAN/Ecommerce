import React, { Component } from "react";
import Mainpage from "../Components/Mainpage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ShopContext from "./shop-context";
import Contents from "../Components/Contents";
class GlobalState extends Component {
  state = {
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
    success: false
  };

  checkStatus = success => {
    console.log(success);
  };

  addProductToCart = product => {
    console.log("Adding product", product);
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setTimeout(() => {
      this.setState({ cart: updatedCart });
    }, 700);
  };

  removeProductFromCart = productId => {
    console.log("Removing product with id: " + productId);
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setTimeout(() => {
      this.setState({ cart: updatedCart });
    }, 700);
  };

  render() {
    return (
      <div>
        <ShopContext.Provider
          value={{
            products: this.state.products,
            cart: this.state.cart,
            addProductToCart: this.addProductToCart,
            removeProductFromCart: this.removeProductFromCart,
            login: this.state.login
          }}
        >
          {this.props.children}
        </ShopContext.Provider>
      </div>
    );
  }
}

export default GlobalState;
