import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import Footer from './Footer';
import './index.scss';

export default class UserLayout extends Component {
  render() {
    return (
      <Layout className="user-layout">
        <div className="layer-mask" />
        <div className="user-content">
          {this.props.children}
        </div>
        <Footer />
      </Layout>
    );
  }
}
