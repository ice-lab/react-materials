import React from 'react';
import Layout from '@icedesign/layout';

export default props => (
  <Layout style={{ minHeight: '100vh' }} className="ice-blank-layout">
    { props.children }
  </Layout>
);
