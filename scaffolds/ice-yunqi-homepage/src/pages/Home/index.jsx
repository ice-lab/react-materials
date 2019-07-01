import React from 'react';
import Banner from './components/Banner';
import Tickets from './components/Tickets';
import GreatVideo from './components/GreatVideo';
import FrontierContent from './components/FrontierContent';
import Exhibition from './components/Exhibition';
import Events from './components/Events';
import Speakers from './components/Speakers';
import Address from './components/Address';
import About from './components/About';
import Sponsor from './components/Sponsor';

export default function Home() {
  return (
    <div>
      <Banner />
      <Tickets />
      <GreatVideo />
      <FrontierContent />
      <Exhibition />
      <Events />
      <Speakers />
      <Address />
      <About />
      <Sponsor />
    </div>
  );
}

Home.displayName = 'Home';
