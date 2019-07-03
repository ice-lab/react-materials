import React from 'react';
import Header from '../../components/Header';
import PlatformIntro from './components/PlatformIntro';
import PlatformToolsIntro from './components/PlatformToolsIntro';
import PlatformJoinus from './components/PlatformJoinus';
import PlatformLanding from './components/PlatformLanding';
import PlatformBlackIntro from './components/PlatformBlackIntro';

export default () => (
  <div className="home-page" style={{ background: '#fff' }}>
    <Header />
    <PlatformLanding />
    <div id="tools">
      <PlatformToolsIntro />
    </div>
    <div id="fans">
      <PlatformIntro />
    </div>
    <div id="business">
      <PlatformBlackIntro />
    </div>
    <div id="join">
      <PlatformJoinus />
    </div>
  </div>
);
