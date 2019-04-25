import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './img-icon.scss';

export default class DynamicIcon extends Component {
  static displayName = 'DynamicIcon';

  static propTypes = {
    /**
     * 指定显示哪种图标
     */
    type: PropTypes.string,
    /**
     * 指定自定义图标的 url
     */
    url: PropTypes.string,
    /**
     * 指定图标大小
     */
    size: PropTypes.oneOf([
      'xxs',
      'xs',
      'small',
      'medium',
      'large',
      'xl',
      'xxl',
      'xxxl',
    ]),
  };

  static defaultProps = {
    type: 'image',
    size: 'medium',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { className, size, type, url, ...others } = this.props;
    let classes;
    
    if (url) {
      classes = cx({
        [`ice-img-icon-stable-${size}`]: !!size,
        [className]: !!className,
      });
      return <i className="ice-icon-stable"><img {...others} className={classes} src={url}/></i>
    } else {
      classes = cx({
        [`ice-icon-stable-${size}`]: !!size,
        ['ice-icon-stable']: true,
        [`ice-icon-stable-${type}`]: !!type,
        [className]: !!className,
      });
      return <i {...others} className={classes} />;
    }
  }
}
