import React, { Component } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import { Row, Col } from "antd";
export default class Scroll extends Component {
  render() {
    const child = { width: `30em`, height: `150px` };
    const parent = { height: `100px` };
    return (
      <div style={parent}>
        <HorizontalScroll>
          <div style={child}>
            <img
              src="https://www.fawazalhokairfashion.com/wp-content/uploads/2012/11/zara.png"
              width="150px"
              height="100px"
            />
          </div>
          <div style={child}>
            <img
              src="https://www.skipperbar.co.za/wp-content/uploads/2016/05/levis-logo-blk02.png"
              width="150px"
              height="100px"
            />
          </div>
          <div style={child}>
            <img
              src="https://artech-xsr3y7wcl8blrtgt.stackpathdns.com/media/2016/03/Adidas-Golf-Supplier-logo-Archech-Promotional-Products-apparel-clothing-150x150.png"
              width="150px"
              height="100px"
            />
          </div>
          <div style={child}>
            <img
              src="https://www.iafstore.com/imgp/logo/458.png"
              width="150px"
              height="100px"
            />
          </div>
          <div style={child}>
            <div style={child}>
              <img
                src="https://listsdiary.com/wp-content/uploads/2016/02/Raymonds-150x150.png"
                width="150px"
                height="100px"
              />
            </div>
          </div>
          <div style={child}>
            <img
              src="https://i1.wp.com/www.decentdeals.com.au/wp-content/uploads/Van-Heusen.png?resize=150%2C150&ssl=1"
              width="150px"
              height="100px"
            />
          </div>
          <div style={child}>
            <img
              src="https://cdn.essensedesigns.com/wp-content/themes/esen/img/brands/square/essense-of-australia.png"
              width="150px"
              height="100px"
            />
          </div>
          <div style={child}>
            <img
              src="https://s3.amazonaws.com/scout-and-mollys/wp-content/uploads/2018/04/ada1-150x150.png"
              width="150px"
              height="100px"
            />
          </div>
          <div style={child}>
            <img
              src="https://image3.mouthshut.com/images/imagesp/l/925070493s.jpg"
              width="150px"
              height="100px"
            />
          </div>
          <div style={child}>
            <img
              src="https://image3.mouthshut.com/images/imagesp/925828168s.png"
              width="150px"
              height="100px"
            />
          </div>
        </HorizontalScroll>
      </div>
    );
  }
}
