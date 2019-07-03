import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFound from '../../components/NotFound';
import './index.scss';

export default function BasicLayout({ children }) {
  return (
    <Layout className="basic-layout">
      <Header />
      <NavBar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </Layout>
  );
}
