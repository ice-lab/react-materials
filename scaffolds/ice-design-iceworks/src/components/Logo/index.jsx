import React, { Component } from "react";
import styles from "./index.module.scss";

const LIGHT = require("./images/TB1KmB6nntYBeNjy1XdXXXXyVXa-224-60.png");
const DARK = require("./images/TB1saOBbYGYBuNjy0FoXXciBFXa-218-58.png");

export default class Logo extends Component {
  render() {
    const { isDark } = this.props;
    const logo = isDark ? DARK : LIGHT;
    return (
      <div className={styles.logo}>
        <a href="/" className={styles.logoa}>
          <img src={logo} alt="logo" className={styles.logoimg} />
        </a>
      </div>
    );
  }
}
