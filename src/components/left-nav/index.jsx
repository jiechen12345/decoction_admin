import React, {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'
import './index.less'
import memoryUtils from "../../utils/memoryUtils";
import {Menu, Icon} from 'antd';
// import logo from '../../assert/images/logo.png'



export default class LeftNav extends Component {

  render() {
    return (
      //todo:研究怎麼改顏色會者圖片
      <div className="left-nav">
         <Link to='/' className="left-nav-header">
          {/* <img src={logo} alt="logo"/> */}
          <h1>home</h1>
        </Link>
      </div>
    )
  }
}

