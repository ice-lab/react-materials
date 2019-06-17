import React, { Component } from 'react';
import './index.module.scss';

const LIGHT =
  require('./images/TB1KmB6nntYBeNjy1XdXXXXyVXa-224-60.png');
const DARK =
  require('./images/TB1saOBbYGYBuNjy0FoXXciBFXa-218-58.png');

export default class Logo extends Component {
  render() {
    const { isDark } = this.props;
    const logo = isDark ? DARK : LIGHT;
    return (
      <div
        className="logo div"
      >
        <a href="/" className="position">
          <img src={logo} width="129" height="35" alt="logo" />
        </a>
      </div>
    );
  }
}
