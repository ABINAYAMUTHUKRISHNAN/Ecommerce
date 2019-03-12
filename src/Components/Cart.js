// import React, { Component } from "react";
// import { Button, Icon, Col, Divider, Card } from "antd";
// import ShopContext from "../context/shop-context";
// import Head from "./Head";
// export default class Cart extends Component {
//   static contextType = ShopContext;
//   componentDidMount() {
//     console.log(this.context);
//   }
//   render() {
//     const { Meta } = Card;

//     return (
//       //   <div>
//       //     {this.context.cart.length <= 0 && <p>No Item in the Cart!</p>}
//       //     <ul>
//       //       {this.context.cart.map(cartItem => (
//       //         <li key={cartItem.id}>
//       //           <div>
//       //             <strong>{cartItem.title}</strong> - ${cartItem.price} (
//       //             {cartItem.quantity})
//       //           </div>
//       //           <div>
//       //             <button
//       //               onClick={this.context.removeProductFromCart.bind(
//       //                 this,
//       //                 cartItem.id
//       //               )}
//       //             >
//       //               Remove from Cart
//       //             </button>
//       //           </div>
//       //         </li>
//       //       ))}
//       //     </ul>
//       <React.Fragment>
//         <Head
//           cartItemNumber={this.context.cart.reduce((count, curItem) => {
//             return count + curItem.quantity;
//           }, 0)}
//         />
//         <main className="cart">
//           {this.context.cart.length <= 0 && <p>No Item in the Cart!</p>}
//           {this.context.cart.map(cartItem => (
//             <Card
//               key={cartItem.id}
//               style={{ width: 1050, height: "fit-content" }}
//             >
//               <Col span={3}>
//                 <img src={cartItem.pic} width="100" />
//               </Col>
//               <Col span={6}>
//                 <Meta
//                   title={cartItem.title}
//                   description={cartItem.price}
//                   style={{ width: 200 }}
//                 />
//               </Col>
//               <div className="font">
//                 <Col span={1} />
//                 <Col span={4}>15-02-2019 at 8.30am</Col>
//                 <Col span={1}>
//                   <Divider type="vertical" />
//                 </Col>
//                 <Col span={2}>
//                   <Icon type="clock-circle" />
//                   10.00am
//                 </Col>
//                 <Col span={2}>
//                   <Icon type="clock-circle" />
//                   5.00pm
//                 </Col>
//                 <Col span={2}>$500.00</Col>
//                 <Col span={1}>
//                   <Divider type="vertical" />
//                 </Col>
//                 <div>
//                   <Col span={2}>
//                     <Button
//                       onClick={this.context.removeProductFromCart.bind(
//                         this,
//                         cartItem.id
//                       )}
//                     >
//                       Remove from Cart
//                     </Button>
//                   </Col>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </main>
//       </React.Fragment>
//     );
//   }
// }

import React, { Component } from "react";
import ShopContext from "../context/shop-context";
import Head from "./Head";
import { Button, Icon, Col, Divider, Card } from "antd";
// import "./Cart.css";
const { Meta } = Card;

class CartPage extends Component {
  static contextType = ShopContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      <React.Fragment>
        <Head
          cartItemNumber={this.context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        />
        <main className="cart">
          {this.context.cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.context.cart.map(cartItem => (
              //   <li key={cartItem.id}>
              //     <div>
              //       <strong>{cartItem.title}</strong> - ${cartItem.price} (
              //       {cartItem.quantity})
              //     </div>
              //     <div>
              //       <button
              //         onClick={this.context.removeProductFromCart.bind(
              //           this,
              //           cartItem.id
              //         )}
              //       >
              //         Remove from Cart
              //       </button>
              //     </div>
              //   </li>

              <Card
                key={cartItem.id}
                style={{ width: 1050, height: "fit-content" }}
              >
                <Col span={3}>
                  <img src={cartItem.pic} width="100" />
                </Col>
                <Col span={6}>
                  <Meta
                    title={cartItem.title}
                    description={cartItem.price}
                    style={{ width: 200 }}
                  />
                </Col>
                <div className="font">
                  <Col span={1} />
                  <Col span={4}>15-02-2019 at 8.30am</Col>
                  <Col span={1}>
                    <Divider type="vertical" />
                  </Col>
                  <Col span={2}>
                    <Icon type="clock-circle" />
                    10.00am
                  </Col>
                  <Col span={2}>
                    <Icon type="clock-circle" />
                    5.00pm
                  </Col>
                  <Col span={2}>$500.00</Col>
                  <Col span={1}>
                    <Divider type="vertical" />
                  </Col>
                  <div>
                    <Col span={2}>
                      <Button
                        onClick={this.context.removeProductFromCart.bind(
                          this,
                          cartItem.id
                        )}
                      >
                        Remove from Cart
                      </Button>
                    </Col>
                  </div>
                </div>
              </Card>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}
export default CartPage;
