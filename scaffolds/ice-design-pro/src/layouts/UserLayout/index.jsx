import React, { Suspense } from 'react';
import Layout from '@icedesign/layout';
import PageLoading from '@/components/PageLoading';
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
      <Suspense fallback={<PageLoading />}>
        {props.children}
      </Suspense>
      <Footer />
    </Layout>
  );
}
