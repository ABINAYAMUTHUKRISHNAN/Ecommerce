import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./actions";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Essential Cotton-blend",
      price: "$100.00 USD",
      pic:
        "https://i.pinimg.com/originals/7a/90/be/7a90be9e37ec38da9bf22f076ffa4fbb.png"
    },
    {
      id: "p2",
      title: "Essential Cotton-blend",
      price: "$100.00 USD",
      pic:
        "https://i.pinimg.com/originals/fe/83/a6/fe83a6e980d5abb526b097d7dead00ab.png"
    }
  ],
  cart: []
};

const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
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

      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export default shopReducer;
