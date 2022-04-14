import React from 'react';
import BigHero from '../components/BigHero';
import QuickIntro from '../components/QuickIntro';
import WhySnubes from '../components/WhySnubes';
import Testimony from '../components/Testimonies';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <div className="home-section">
      <BigHero />
      <QuickIntro />
      <WhySnubes />
      <Testimony />
      <FAQ />
    </div>
  );
};

export default Home;
