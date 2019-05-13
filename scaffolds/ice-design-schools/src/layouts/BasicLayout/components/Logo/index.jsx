import React, { PureComponent } from '_react@16.8.6@react';
import { Link } from '_react-router-dom@4.3.1@react-router-dom';

export default class Logo extends PureComponent {
  render() {
    return (
      <Link to="/" style={{ ...styles.logoStyle, ...this.props.style }}>
        学校管理系统
      </Link>
    );
  }
}

const styles = {
  logoStyle: {
    display: 'block',
    maxWidth: '180px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '20px',
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};
