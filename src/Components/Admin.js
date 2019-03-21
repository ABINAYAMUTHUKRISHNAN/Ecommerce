import React, { Component } from "react";
import "antd/dist/antd.css";
import { Tabs, Layout } from "antd";
import { Registertab } from "./Adminregister";
import { Logintab } from "./Adminlogin";

function callback(key) {
  console.log(key);
}
class Admin extends Component {
  render() {
    const TabPane = Tabs.TabPane;
    const { Content } = Layout;
    return (
      <Layout
        className="login"
        style={{ padding: "160px 450px 100px 450px", height: 750 }}
      >
        <Content
          className="cont"
          style={{
            padding: "50px 50px 10px 50px",
            height: "fitcontent",
            backgroundColor: "#fff",
            opacity: 0.9
          }}
        >
          <Tabs onChange={callback}>
            <TabPane tab="LOGIN" key="1">
              <Logintab />
            </TabPane>
            <TabPane tab="REGISTER" key="2">
              <Registertab />
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    );
  }
}
export default Admin;
