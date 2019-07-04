import React from 'react';
import Layout from '@icedesign/layout';

import Footer from './Footer';
import './index.scss';

export default (props) => {
  return (
    <Layout className="user-layout">
      <div className="layer-mask" />
      <div className="user-content">
        {props.children}
      </div>
      <Footer />
    </Layout>
  );
};
