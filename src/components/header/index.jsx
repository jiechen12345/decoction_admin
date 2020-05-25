import React, {Component} from 'react'
import memoryUtils from "../../utils/memoryUtils";
import './index.less'

/*
左侧导航的组件
 */
export default class Header extends Component {
  render() {
    const username = memoryUtils.user.username
    return (
      <div className="header">
        <div className="header-top">
          <span>Hi, {username}</span>
        </div>
        <div className="header-bottom">
        <div className="header-bottom-left">123</div>
        <div className="header-bottom-right">
            <span>header-bottom-right</span>
          </div>
        </div>
      </div>
    )
  }
}

