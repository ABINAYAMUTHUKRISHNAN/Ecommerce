import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import Head from "./Head";
import Contents from "./Contents";
import Headslider from "./Headslider";
import End from "./End";
class Mainpage extends Component {
  render() {
    const { Header, Content, Footer } = Layout;

    return (
      <Layout breakpoint="lg">
        <Headslider />
        <Contents />
        <End />
      </Layout>
    );
  }
}
export default Mainpage;
