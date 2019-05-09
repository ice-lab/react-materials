import React, { Component } from 'react';
import './index.modules.scss'

export default class RightContentDisplay extends Component {
  static displayName = 'RightContentDisplay';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="right-content-display" className="stylescontainer">
        <div className="right-content-display-content" className="stylescontent">
          <div className="stylescol">
            <img
              src={require('./images/TB1MgyDjsLJ8KJjy0FnXXcFDpXa-618-1046.png')}
              alt="img"
              className="stylesimage"
            />
          </div>
          <div className="stylescol">
            <h2 className="stylestitle">功能描述</h2>
            <p className="stylesdescription">
              功能描述的文案，功能描述的文案功能描述的文案功能描述的文案
            </p>
          </div>
        </div>
      </div>
    );
  }
}
