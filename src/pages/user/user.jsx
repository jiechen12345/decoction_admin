import React, { Component } from "react";
import { Card, Table, Button, Icon, message, Modal } from "antd";

import LinkButton from "../../components/link-button";
// import {reqCategorys, reqUpdateCategory, reqAddCategory} from '../../api'
// import AddForm from './add-form'
// import UpdateForm from './update-form'

/*
商品分类路由
 */
export default class Category extends Component {
  render() {
    const title = "title";
    const extra = (
      <Button type="primary">
        <Icon type="plus" />
        新增
      </Button>
    );
    const dataSource = [
      {
        "parentId": "0",
        "_id": "1",
        "name": "敏盛醫院",
        "address": "桃園市經國路",
      },
      {
        "parentId": "0",
        "_id": "2",
        "name": "良祐診所",
        "address": "桃園市南平路",
      },
    ];
    const columns = [
      {
        title: "院所名稱",
        width:'20%',
        dataIndex: "name",
      },
      {
        title: "地址",
        width:'40%',
        dataIndex: "address",
      },
      {
        title: '操作',
        dataIndext: '',
        key:'',
        render:()=>(<span>
          <LinkButton>修改</LinkButton>
          <LinkButton>所屬醫師</LinkButton>
        </span>)
      },
    ];
    return (
      <Card title={title} extra={extra}>
        <Table
          bordered
          rowKey="_id"
          // loading={loading}
          dataSource={dataSource}
          columns={columns}
          pagination={{ defaultPageSize: 5, showQuickJumper: true }}
        />

        <Modal
          title="添加分类"
          // visible={showStatus === 1}
          // onOk={this.addCategory}
          // onCancel={this.handleCancel}
        >
          {/* <AddForm
            categorys={categorys}
            parentId={parentId}
            setForm={(form) => {this.form = form}}
          /> */}
        </Modal>

        <Modal
          title="更新分类"
          // visible={showStatus === 2}
          // onOk={this.updateCategory}
          // onCancel={this.handleCancel}
        >
          {/* <UpdateForm
            categoryName={category.name}
            setForm={(form) => {this.form = form}}
          /> */}
        </Modal>
      </Card>
    );
  }
}
