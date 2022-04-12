import React from 'react';
import BigHero from '../components/BigHero';
import Testimony from '../components/Testimony';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <div className="home-section">
      <BigHero />
      <Testimony />
      <FAQ />
    </div>
  );
};

export default Home;
