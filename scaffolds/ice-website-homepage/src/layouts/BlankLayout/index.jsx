import React from 'react';
import Layout from '@icedesign/layout';

export default function BlankLayout({ children }) {
  return (
    <Layout style={{ minHeight: '100vh' }} className="ice-blank-layout">
      {children}
    </Layout>
  );
}
