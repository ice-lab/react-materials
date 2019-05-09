import React, { Component } from "react";
import IceImg from "@icedesign/img";
import "./SingleItem.scss";

export default class SingleItem extends Component {
  static displayName = "SingleItem";

  render() {
    const {
      style,
      className = "",
      active,
      title,
      image,
      price,
      extra
    } = this.props;
    return (
      <div
        className={`${className} single-item`}
        style={{
          ...style,
          backgroundColor: active ? "#f4f4f4" : undefined
        }}
      >
        <IceImg
          src={image}
          width={149}
          height={149}
          className="iceimg"
        />
        <div className="title">{title}</div>
        <div className="price">{price}</div>
        <div className="extra">{extra}</div>
      </div>
    );
  }
}
