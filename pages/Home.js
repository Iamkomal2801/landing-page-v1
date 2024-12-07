import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pricing from '../components/Pricing';

const Home = () => {
  return (
    <div>
     <Header/>
     <HeroSection/>
     <Pricing/>
     <Footer/>
    </div>
  );
};

export default Home;
