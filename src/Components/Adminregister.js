import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, Layout, Tabs } from "antd";
import { Redirect } from "react-router";
import Admin from "./Admin";

class Adminregister extends Component {
  constructor() {
    super();
    this.state = {
      success: false
    };
  }
  registerSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
      if (values) {
        this.setState({
          success: true
        });
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
        <Form onSubmit={this.registerSubmit} style={{ maxwidth: "300px" }}>
          <Form.Item>
            <h1
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                marginBottom: -9,
                marginTop: 0
              }}
            >
              REGISTER
            </h1>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                onChange={this.handlechange("user")}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("mailid", {
              rules: [{ required: true, message: "Please input your mail ID!" }]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="E-mail ID"
                onChange={this.handlechange("mail")}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
                onChange={this.handlechange("password")}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Confirm Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              REGISTER
            </Button>
          </Form.Item>
        </Form>
        {this.state.success && window.location.reload()}
      </div>
    );
  }
}

export const Registertab = Form.create({ name: "normal_register" })(
  Adminregister
);
