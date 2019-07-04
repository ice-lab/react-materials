import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import IntroBanner from './components/IntroBanner';
import AblityItems from './components/AblityItems';
import IntroTab from './components/IntroTab';
import CardItems from './components/CardItems';
import SlideBanner from './components/SlideBanner';

export default function Home() {
  return (
    <div style={styles.container}>
      <Header />
      <IntroBanner />
      <AblityItems />
      <IntroTab />
      <CardItems />
      <SlideBanner />
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    minWidth: '1280px',
  },
};
