import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import memoryUtils from "../../utils/memoryUtils";
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";
import { Layout } from "antd";

const { Footer, Sider, Content } = Layout

export default class Admin extends Component {
  
  render() {
    const user = memoryUtils.user;
    if (!user._id) {
      return <Redirect to="/login"></Redirect>;
    }

    return (
      <Layout style={{ minHeight: "100%" }}>
        <Sider>
          <LeftNav style={{  backgroundColor: "#fff" }}/>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{ margin: 20, backgroundColor: "#fff" }}>
           
          </Content>
          <Footer style={{ textAlign: "center", color: "#cccccc" }}>
            -------------Jay------------
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
