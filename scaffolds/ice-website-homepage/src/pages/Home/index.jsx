import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LandingIntroBanner from './components/LandingIntroBanner';
import IceworksInfo from './components/IceworksInfo';
import DesignLanguage from './components/DesignLanguage';
import Materials from './components/Materials';
import BrandList from './components/BrandList';

export default function Home() {
  return (
    <div
      className="home-page"
      style={{
        background: '#fff',
      }}
    >
      <Header />
      <LandingIntroBanner />
      <div id="iceworks">
        <IceworksInfo />
      </div>
      <div id="design">
        <DesignLanguage />
      </div>
      <div id="material">
        <Materials />
      </div>
      <div id="brandlist">
        <BrandList />
      </div>
      <Footer />
    </div>
  );
}
