import React, { Component } from 'react';
import { Button } from '@alifd/next';
import './index.modules.scss'

export default class PlatformLanding extends Component {
  static displayName = 'PlatformLanding';

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
          <h2 className="stylestitle">
            在人工智能将替代一切的未来<br />唯有内容的创作无可替代
          </h2>
          <div className="stylesbuttons">
            <Button
              className="stylessecondaryButton"
              type="normal"
              component="a"
              href="your-url"
            >
              开通
            </Button>
            <Button
              className="stylesprimaryButton"
              type="primary"
              component="a"
              href="your-url"
            >
              登录
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
