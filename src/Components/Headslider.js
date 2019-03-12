import React, { Component } from "react";
import { Carousel, Row, Col } from "antd";

class Headslider extends Component {
  render() {
    return (
      <Row>
        <Col xs={24} lg={24}>
          <Carousel autoplay>
            <div>
              <img
                src="https://iso.500px.com/wp-content/uploads/2015/06/coulsoncover.jpeg"
                width="100%"
                height="675px"
              />
            </div>
            <div>
              <img
                src="https://i.ytimg.com/vi/7xWxpunlZ2w/maxresdefault.jpg"
                width="100%"
                height="675px"
              />
            </div>
            <div>
              <img
                src="https://amadeus.com/images/en/people/corporate-travellers/young-businessman-on-the-phone-with-laptop-and-taking-a-coffee-in-an-airport-or-a-bar.jpg"
                width="100%"
                height="675px"
              />
            </div>
            <div>
              <img
                src="https://mybataz.com/wp-content/uploads/2018/05/e1366056429507.59ae91192befe-1.jpg"
                width="100%"
                height="650px"
              />
            </div>
          </Carousel>
        </Col>
      </Row>
    );
  }
}
export default Headslider;
