import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Modal } from "antd";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
import nlDateUtil from "../../utils/nlDateUtil";
import menuList from "../../config/menuConfig";
import LinkButton from '../link-button'
import "./index.less";
class Header extends Component {
  state = {
    nlDate: nlDateUtil.solarday(new Date()),
  };

  getTitle = () => {
    const path = this.props.location.pathname;
    let title;
    menuList.forEach((item) => {
      if (item.key === path) {
        title = item.title;
      } else if (item.children) {
        const childrenItem = item.children.find((cItem) => cItem.key === path);
        if (childrenItem) {
          title = childrenItem.title;
        }
      }
    });
    return title;
  };
  getTime = () => {
    this.intervalId = setInterval(() => {
      const nlDate = nlDateUtil.solarday(new Date());
      this.setState = { nlDate };
    }, 1000);
  };

  logout = () => {
    Modal.confirm({
      content: "確定登出?",
      onOk: () => {
        storageUtils.removeUser();
        memoryUtils.user = {};
        this.props.history.replace("/login");
      },
    });
  };

  componentDidMount() {
    this.getTime();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { nlDate } = this.state;
    const username = memoryUtils.user.username;
    const title = this.getTitle();
    return (
      <div className="header">
        <div className="header-top">
          <span style={{ color: "#24292E" }}>Hi, {username}</span>
          <LinkButton onClick={this.logout}>登出</LinkButton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">
            <span>{title}</span>
          </div>
          <div className="header-bottom-right">
            <span style={{ color: "#F32C49" }}>農 : {nlDate}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
