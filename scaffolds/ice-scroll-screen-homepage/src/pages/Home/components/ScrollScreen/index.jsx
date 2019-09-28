import React from 'react';
import Banner from '../Banner';
import AboutGeek from '../AboutGeek';
import Workshop from '../Workshop';
import Events from '../Events';
import Sponsorship from '../Sponsorship';
import styles from './index.module.scss';

export default () => (
  <div style={styles.container}>
    <div id="page1" className={styles.section}>
      <Banner />
    </div>
    <div id="page2" className={styles.section}>
      <AboutGeek />
    </div>
    <div id="page3" className={styles.section}>
      <Events />
    </div>
    <div id="page4" className={styles.section}>
      <Workshop />
    </div>
    <div id="page5" className={styles.section}>
      <Sponsorship />
    </div>
  </div>
);
