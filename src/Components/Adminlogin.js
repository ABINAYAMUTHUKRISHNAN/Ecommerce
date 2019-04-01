import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, Checkbox, Layout } from "antd";
import { Redirect } from "react-router";
import Mainpage from "./Mainpage";
import { Link } from "react-router-dom";

class Adminlogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      success: false
    };
  }

  loginSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values, this.state);
      }
    });
  };

  handlechange = name => event => {
    this.setState({
      [name]: event.target.value.trim()
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { Content } = Layout;
    return (
      <div>
        <Form onSubmit={this.loginSubmit} style={{ maxwidth: "300px" }}>
          <Form.Item>
            <h1
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                marginBottom: -9,
                marginTop: 0
              }}
            >
              LOGIN
            </h1>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("userNamelogin", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                name="user"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                onChange={this.handlechange("user")}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("passwordlogin", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                name="passwd"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Password"
                onChange={this.handlechange("passwd")}
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              <Link to="/Mainpage">Log in</Link>
            </Button>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a style={{ float: "right" }} href="">
              Forgot password
            </a>
          </Form.Item>
        </Form>
        {this.state.success && <Redirect push to="/Mainpage" />}
      </div>
    );
  }
}
export const Logintab = Form.create({ name: "normal_login" })(Adminlogin);
