import React, { Component } from "react";
import "./index.modules.scss";

export default class PlatformIntro2 extends Component {
  static displayName = "PlatformIntro2";

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="styleswrapper">
        <div className="stylesbody">
          <h2 className="stylestitle">高效的内容创作工具</h2>
          <p className="stylestext">
            聚集全网最新鲜的创意，直击用户需求
            <br />
            海量优质素材，快速锁定优质商品、图片、视频
            <br />
            发布前内容质量诊断，内容编辑更高效
          </p>
        </div>
        <img
          src={require("./images/TB1DzIrRVXXXXckXFXXXXXXXXXX-1740-800.png")}
          alt=""
          className="stylesimage"
        />
      </div>
    );
  }
}

