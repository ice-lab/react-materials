import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './index.module.scss';

export default function BlankLayout(props) {
  return (
    <div className={styles.blankLayout}>
      <div className={styles.blankLayoutContent}>
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}
