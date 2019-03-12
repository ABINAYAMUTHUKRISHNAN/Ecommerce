import React, { Component } from "react";
import { Layout, Avatar, Row, Col, Menu, Icon, Badge, Carousel } from "antd";
import { NavLink } from "react-router-dom";
class Head extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    const { Header, Content, Footer } = Layout;

    return (
      <Layout>
        <Header style={{ backgroundColor: "#ffffff00" }}>
          <Row>
            <Col span={2}>
              <img
                src="https://files.gamebanana.com/img/ico/sprays/linkinpark.png"
                width="50px"
                height="50px"
              />
            </Col>
            <Col span={22}>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                sm={24}
              >
                <SubMenu
                  title={
                    <span className="submenu-title-wrapper">
                      HOME
                      <span style={{ padding: 5 }} />
                      <Icon type="down" />
                    </span>
                  }
                >
                  <MenuItemGroup>
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="shop">SHOP</Menu.Item>
                <Menu.Item key="portfolio">PORTFOLIO</Menu.Item>
                <Menu.Item key="page">PAGE</Menu.Item>
                <Menu.Item key="blog">BLOG</Menu.Item>
                <Menu.Item key="elements">ELEMENTS</Menu.Item>
                <Menu.Item key="login">LOGIN</Menu.Item>
                <Menu.Item key="signup">SIGN UP</Menu.Item>
                <Menu.Item>
                  <NavLink to="/Cart">
                    <Badge
                      count={this.props.cartItemNumber}
                      style={{
                        fontSize: "15px",
                        backgroundColor: "#ffffff00",
                        color: "#999",
                        boxShadow: "0 0 0 1px #d9d9d9 inset"
                      }}
                    >
                      <Icon type="shopping-cart" style={{ fontSize: "20px" }} />
                    </Badge>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="alipay">
                  <Icon type="search" style={{ fontSize: "20px" }} />
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
      </Layout>
    );
  }
}
export default Head;

// import React from "react";
// import { NavLink } from "react-router-dom";

// // import "./MainNavigation.css";

// const Head = props => (
//   <header className="main-navigation">
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/">Products</NavLink>
//         </li>
//         <li>
//           <NavLink to="/cart">Cart ({props.cartItemNumber})</NavLink>
//         </li>
//       </ul>
//     </nav>
//   </header>
// );

// export default Head;
