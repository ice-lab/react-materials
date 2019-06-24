import React from 'react';
import Layout from '@icedesign/layout';
import Footer from './components/Footer';
import './index.scss';

export default function UserLayout(props) {
  return (
    <Layout className="user-layout">
      <div className="header">
        <a href="#" className="meta">
          <span className="title">LOGO</span>
        </a>
        <p className="desc">让前端开发简单而友好</p>
      </div>
      {props.children}
      <Footer />
    </Layout>
  );
}
