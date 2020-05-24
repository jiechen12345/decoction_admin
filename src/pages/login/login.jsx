import React, { Component } from "react";
import { Form, Input, Button, Icon, message } from "antd";
import { Redirect } from "react-router-dom";

import "./login.less";
// import logo from '../../assets/images/logo.png'
import { reqLogin } from "../../api";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";

const Item = Form.Item;

class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { username, password } = values;

        console.warn("send ajax...", username, " | ", password);

        const result = await reqLogin(username, password); // {status: 0, data: user}  {status: 1, msg: 'xxx'}
        console.log("success", result);
        if (result.code === 0) {
          message.success("login in...");

          // save user
          const user = result.data;
          memoryUtils.user = user; // save in  memory
          storageUtils.saveUser(user); // save in  storage
          this.props.history.replace("/");
        } else {
          message.error(result.msg);
        }
      } else {
        console.warn("login fail");
      }
    });
    // const form = this.props.form;
    // const values = form.getFieldsValue();
    // console.log("handleSubmit() ", values);
  };

  validatePwd = (rule, value, callback) => {
    // console.log("validatePwd()", rule, value);
    if (!value) {
      callback("請輸入密碼");
    } else if (value.length < 4) {
      callback("密碼不能小於四位");
    } else if (value.length > 12) {
      callback("密碼不能大於12位");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback("密碼須為英文、數字或底線");
    } else {
      callback();
    }
  };
  render() {
    if (memoryUtils.user._id) {
      return <Redirect to={"/admin"}></Redirect>;
    }

    const form = this.props.form;
    const { getFieldDecorator } = form;
    return (
      <div className="login">
        <header className="login-header">
          {/* <img src={logo} alt=""></img> */}
        </header>
        <section className="login-content">
          <h2>登入</h2>
          <Form
            onSubmit={this.handleSubmit}
            name="normal_login"
            className="login-form"
          >
            <Item>
              {/* 第一個參數是id 第二的是驗證 */}
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "請輸入用戶名稱",
                  },
                  { min: 4, message: "名稱最少四個字" },
                  { max: 12, message: "最多十二個字" },
                  {
                    pattern: /^[a-zA-Z0-9_]+$/,
                    message: "用戶名稱須為英文、數字或底線",
                  },
                ],
                initialValue: "admin",
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="User Name"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    validator: this.validatePwd,
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
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
