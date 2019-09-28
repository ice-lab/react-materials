import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.scss';

export default function BlankLayout({ children }) {
  return (
    <div className="blank-layout">
      <div className="blank-layout-content">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
