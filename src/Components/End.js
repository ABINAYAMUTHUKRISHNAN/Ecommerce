import React, { Component } from "react";
import { Layout, Row, Col, Icon, Input, Button } from "antd";

class End extends Component {
  render() {
    const { Footer } = Layout;

    return (
      <Footer style={{ height: "auto", backgroundColor: "#525363" }}>
        <Col xs={24} lg={8} span={6} className="icons">
          <p style={{ color: "#fff", fontfamily: "-webkit-pictograph" }}>
            Modex
          </p>
          <div style={{ margin: 50 }}>
            <span style={{ padding: 10 }}>
              <Icon type="facebook" />
            </span>
            <span style={{ padding: 10 }}>
              <Icon type="twitter" />
            </span>
            <span style={{ padding: 10 }}>
              <Icon type="behance" />
            </span>
            <span style={{ padding: 10 }}>
              <Icon type="dribbble" />
            </span>
            <span style={{ padding: 10 }}>
              <Icon type="linkedin" />
            </span>
          </div>
        </Col>
        <Col
          xs={24}
          lg={8}
          span={12}
          style={{ color: "#fff", fontFamily: "Calibri", fontSize: "17px" }}
        >
          <Row>
            <div>
              MEN <span style={{ padding: 10 }} /> WOMEN
              <span style={{ padding: 10 }} /> LOOKBOOK
              <span style={{ padding: 10 }} /> SALE
              <span style={{ padding: 10 }} /> BLOG
            </div>
          </Row>
          <Row style={{ padding: 10 }}>
            <br />
            {/* <span style={{ margin: -95 }} /> */}
            <div style={{ textAlign: "center" }}>SUBSCRIBE TO NEWS</div>
            <br />
            <Col span={16}>
              <Input placeholder="Email address" />
            </Col>
            {/* <span style={{ padding: 1 }} /> */}
            <Col span={8} style={{ paddingLeft: 3 }}>
              <Button style={{ width: 100 }}>Submit</Button>
            </Col>
          </Row>
        </Col>
        <Col
          xs={24}
          lg={8}
          span={6}
          style={{ color: "#fff", fontFamily: "Calibri", fontSize: "17px" }}
        >
          <Row>CONTACT US</Row>
          <Row style={{ padding: 10 }}>
            San Francisco, California 400 Castro St,
            <br /> Sanfrancisco, CA <br />
            (+1) 686 868 9999
          </Row>
          <Row style={{ padding: 10 }}>
            <img
              src="https://i.dlpng.com/static/png/125471_preview.png"
              width="170px"
              height="30px"
            />
          </Row>
        </Col>
      </Footer>
    );
  }
}
export default End;
