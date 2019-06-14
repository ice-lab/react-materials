import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default () => {
  return (
    <div style={styles.container}>
      <Link to="/" className="logoLink" >
        LOGO
      </Link>
    </div>
  );
};


