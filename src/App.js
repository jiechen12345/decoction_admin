import React, { Component } from "react";
import { message, Button } from 'antd';

export default class App extends Component {
  handleClick =() =>{
    message.success('This is a success message');
  }
  render() {
    return (
      <Button type="primary" onClick={this.handleClick}>
        Primary
      </Button>
    );
  }
}
