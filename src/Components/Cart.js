import React, { Component } from "react";
import Head from "./Head";
import { Button, Icon, Col, Divider, Card } from "antd";
import { connect } from "react-redux";
import { removeProductFromCart } from "../store/actions";
const { Meta } = Card;

class CartPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Head cartItemNumber={this.props.cartItemCount} />
        <main className="cart">
          {this.props.cartItems.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.props.cartItems.map(cartItem => (
              <Card
                key={cartItem.id}
                style={{ width: 1100, height: "fit-content", margin: 20 }}
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
                  <Col span={4}>Quantity({cartItem.quantity})</Col>
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
                        onClick={this.props.removeProductFromCart.bind(
                          this,
                          cartItem.id
                        )}
                      >
                        Remove
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
const mapStateToProps = state => {
  return {
    cartItems: state.cart,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProductFromCart: id => dispatch(removeProductFromCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
