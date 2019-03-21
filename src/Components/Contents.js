import React, { Component } from "react";
import { Layout, Row, Card, Divider, Col, Button, Icon } from "antd";
import Slider from "./Slider";
import Scroll from "./Scroll";
import Head from "./Head";
import ShopContext from "../context/shop-context";
const { Content } = Layout;
const { Meta } = Card;

class Contents extends Component {
  render() {
    const { Footer, Content } = Layout;
    return (
      <ShopContext.Consumer>
        {context => (
          <React.Fragment>
            <Head
              cartItemNumber={context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
              }, 0)}
            />
            <Layout>
              <Content style={{ height: 700 }}>
                <div>
                  <Row
                    style={{
                      height: "130%",
                      padding: "10px",
                      backgroundColor: "#fff"
                    }}
                  >
                    <Col xs={12} lg={6} className="headcontmid" span={6}>
                      <img
                        src="https://www.materialui.co/materialIcons/maps/local_shipping_black_192x192.png"
                        width="25%"
                        height="60px"
                      />
                      <br />
                      Free Shipping
                      <br /> Orders over $599
                    </Col>

                    <Col xs={12} lg={6} className="headcontmid" span={6}>
                      <img
                        src="https://static.thenounproject.com/png/15533-200.png"
                        width="25%"
                        height="60px"
                      />
                      <br />
                      30 Days Return <br />
                      If goods have problem
                    </Col>

                    <Col xs={12} lg={6} className="headcontmid" span={6}>
                      <img
                        src="https://freeiconshop.com/wp-content/uploads/edd/creditcard-outline.png"
                        width="25%"
                        height="60px"
                      />
                      <br />
                      Secure Payment <br />
                      100% secure payment
                    </Col>

                    <Col xs={12} lg={6} className="headcontmid" span={6}>
                      <img
                        src="http://www.myiconfinder.com/uploads/iconsets/256-256-5644a46a81b2b9ab1557a2d7064680f5-user.png"
                        width="25%"
                        height="60px"
                      />
                      <br />
                      24h Support <br />
                      Dedicated Support
                    </Col>
                  </Row>
                </div>
                <br />
                <Row>
                  <Col xs={12} lg={6} span={6} className="column">
                    {context.products.map(product => (
                      <Card
                        key={product.id}
                        style={{ width: "100%" }}
                        cover={<img src={product.pic} />}
                      >
                        <Meta
                          title={product.title}
                          description={product.price}
                        />
                        <br />
                        <Button
                          
                          onClick={context.addProductToCart.bind(this, product)}
                          style={{ width: "100%" }}
                        >
                          Add to Cart
                        </Button>
                      </Card>
                    ))}
                  </Col>
                  <Col xs={12} lg={6} span={6}>
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <img src="https://i.pinimg.com/originals/fe/83/a6/fe83a6e980d5abb526b097d7dead00ab.png" />
                      }
                    >
                      <Meta
                        title="Essential Cotton-blend"
                        description="$100.00 USD"
                      />
                      <br />
                      <Button style={{ width: "100%" }}>Add to Cart</Button>
                    </Card>
                  </Col>
                  <Col xs={12} lg={6} span={6}>
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <img src="http://cdn.shopify.com/s/files/1/2239/5849/products/DynamicImageHandler_f01c3e8c-9f57-48b7-86d3-6c2c7489ba05_1024x1024.png?v=1503003231" />
                      }
                    >
                      <Meta
                        title="Essential Cotton-blend"
                        description="$100.00 USD"
                      />
                      <br />
                      <Button style={{ width: "100%" }}>Add to Cart</Button>
                    </Card>
                  </Col>
                  <Col xs={12} lg={6} span={6}>
                    <Card
                      style={{
                        width: "100%"
                      }}
                      cover={
                        <img src="https://campusstore.usu.edu/images/product/medium/44976.png" />
                      }
                    >
                      <Meta title="Jerk For Winter" description="$200.00 USD" />
                      <br />
                      <Button style={{ width: "100%" }}>Add to Cart</Button>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} lg={8} span={8}>
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <img src="https://ae01.alicdn.com/kf/HTB1vtwYfS8YBeNkSnb4q6yevFXah/2018-Luxury-Men-Wedding-Suit-Male-Blazers-Slim-Fit-Plaid-Suits-Jacket-Costume-Business-Formal-Party.jpg" />
                      }
                    >
                      <Meta
                        title="Essential Cotton-blend"
                        description="$100.00 USD"
                      />
                      <br />
                      <Button style={{ width: "100%" }}>Add to Cart</Button>
                    </Card>
                  </Col>
                  <Col xs={8} lg={8} span={8}>
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <img src="http://www.votebukhari.ca/images/cate_13/640/2018-New-Arrival-Business-men-blazer-Casual-Wedding-Blazer-Men-lattice-Formal-jacket-Popular-Design-Men-Plaid-Dress-Suit-Jackets-vzu0.jpg" />
                      }
                    >
                      <Meta
                        title="Essential Cotton-blend"
                        description="$100.00 USD"
                      />
                      <br />
                      <Button style={{ width: "100%" }}>Add to Cart</Button>
                    </Card>
                  </Col>
                  <Col xs={8} lg={8} span={8}>
                    <Card
                      cover={
                        <img src="https://png.pngtree.com/element_origin_min_pic/16/10/26/1c3394c74f4057c2e527b8a63cb93c44.jpg" />
                      }
                    >
                      <Meta
                        title="Essential Cotton-blend"
                        description="$100.00 USD"
                      />
                      <br />
                      <Button style={{ width: "100%" }}>Add to Cart</Button>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={6} span={6}>
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <img src="https://s-media-cache-ak0.pinimg.com/originals/63/29/c6/6329c65ff9bf73af0e62201d78ef8d42.png" />
                      }
                    >
                      <Meta
                        title="Essential Cotton-blend"
                        description="$100.00 USD"
                      />
                      <br />
                      <Button style={{ width: "100%" }}>Add to Cart</Button>
                    </Card>
                  </Col>
                  <Col xs={12} lg={6} span={6}>
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <img src="https://i.pinimg.com/originals/87/98/b9/8798b92eac845c8e2ada00282311fbfe.png" />
                      }
                    >
                      <Meta
                        title="Essential Cotton-blend"
                        description="$100.00 USD"
                      />
                      <br />
                      <Button style={{ width: "100%" }}>Add to Cart</Button>
                    </Card>
                  </Col>
                  <Col xs={12} lg={6} span={6}>
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <img src="https://i.pinimg.com/originals/fa/0d/e2/fa0de25bb1fe543d73e14f7d099b1e42.png" />
                      }
                    >
                      <Meta
                        title="Essential Cotton-blend"
                        description="$100.00 USD"
                      />
                      <br />
                      <Button style={{ width: "100%" }}>Add to Cart</Button>
                    </Card>
                  </Col>
                  <Col xs={12} lg={6} span={6}>
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <img src="https://4.bp.blogspot.com/-TIWnY6CcfTs/WmgLTwF3jdI/AAAAAAAAAfU/kK9-L1reRfIpiL5Yf7APzcWc60Ny-yviwCLcBGAs/s1600/1493326339341661734.png" />
                      }
                    >
                      <Meta
                        title="Essential Cotton-blend"
                        description="$100.00 USD"
                      />
                      <br />
                      <Button style={{ width: "100%" }}>Add to Cart</Button>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Button type="default" width="50px">
                    <Icon type="sync" />L O A D M O R E
                  </Button>
                </Row>
                <Row style={{ padding: 15 }}>
                  <Slider />
                </Row>
                <Row>
                  <Col xs={24} lg={12} span={12}>
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <img src="http://boutiquespakistan.com/images/banner.png" />
                      }
                    />
                  </Col>
                  <Col xs={24} lg={12} span={12}>
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <img src="http://www.boutiquespakistan.com/images/banner3.png" />
                      }
                    />
                  </Col>
                </Row>
                <Scroll />
              </Content>
            </Layout>
            )}
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    );
  }
}
export default Contents;
