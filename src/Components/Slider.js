import React, { Component } from "react";
import { Carousel } from "antd";

class Slider extends Component {
  render() {
    return (
      <Carousel autoplay>
        <div>
          <img
            src="http://newstrack.com/wp-content/uploads/sites/2/2018/06/kangana.jpg"
            width="100%"
            height="500px"
          />
        </div>
        <div>
          <img
            src="http://img.eshakti.com/bannerimages/banner11-5-12-1.jpg"
            width="100%"
            height="500px"
          />
        </div>
        <div>
          <img
            src="http://mercattomundi.com/wp-content/uploads/2017/03/header-confec%C3%A7%C3%A3o-en.jpg"
            width="100%"
            height="500px"
          />
        </div>
        <div>
          <img
            src="https://www.yydevelopment.com/wp-content/uploads/2018/04/cheap-outlet-deals-twitter-banner-design.jpg"
            width="100%"
            height="500px"
          />
        </div>
      </Carousel>
    );
  }
}
export default Slider;
