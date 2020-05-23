import React, { Component } from "react";
import { Form, Input, Button, Icon } from "antd";
import "./login.less";
import logo from "./images/logo.png";

const Item = Form.Item;
class Login extends Component {
  handleSubmit = (event) => {};

  render() {
    const form = this.props.form;
    const { getFieldDecorator } = form;
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt=""></img>
        </header>
        <section className="login-content">
          <h2>登入</h2>
          <Form
            onSubmit={this.handleSubmit}
            name="normal_login"
            className="login-form"
          >
            <Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="UserName"
              />
            </Item>
            <Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            </Item>

            <Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    );
  }
}
const WrapLogin = Form.create()(Login);
export default WrapLogin;
