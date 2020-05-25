import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";
import "./index.less";
import memoryUtils from "../../utils/memoryUtils";
import { Menu, Button, Icon } from "antd";
import logo from "../../assert/images/logo.png";
import menuList from "../../config/menuConfig";

const { SubMenu } = Menu;

class LeftNav extends Component {
  getMenuNodes = (menuList) => {
    const path = this.props.location.pathname;

    return menuList.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      } else {
        //預設開啟選中的sub router
        const cItem = item.children.find(
          (cItem) => path.indexOf(cItem.key) === 0
        );
        if (cItem) {
          this.openKey = item.key;
        }
        return (
          <SubMenu
            style={{ backgroundColor: "rgb(34, 73, 39)" }}
            key={item.key}
            title={item.title}
            icon={item.icon}
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        );
      }
    });
  };

  /*
  componentWillMount '第一次'執行render前
  通常為render準備資料，而且通常不會利用其執行非同步的程式，因為等到跑完了render也結束了
   */
  componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList);
  }

  render() {
    let path = this.props.location.pathname;
    console.log("render()", path);
    const openKey = this.openKey;

    return (
      <div theme="light" className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo" />
        </Link>

        <Menu
          theme="dark"
          style={{ backgroundColor: "rgb(34, 73, 39)" }}
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
          mode="inline"
        >
          {this.menuNodes}
        </Menu>
      </div>
    );
  }
}
//withRouter 包装非路由組件, 返回一个新的组件
// 新的组件向非路由组件傳遞3个參數: history/location/match
export default withRouter(LeftNav);
