import React from 'react';
import { ReactComponent as ImageContainer } from '../asset/ImageContainer.svg'

const HeroSection = () => {
  return (
    <section className="bg-blue-900 py-20">
      <div className="container m-auto max-w-screen-xl flex justify-center items-center flex-row ">
        <div className='flex flex-col gap-8 items-start justify-center '>
        <h1 className="text-6xl font-bold text-white ">Get More Done with whitepace</h1>
        <p className="text-white text-[18px] ">
        Project management software that enables your teams to collaborate, plan,analyze and manage everyday tasks
        </p>
        <button className="bg-[#4F9CF9] w-[219px] max-h-[63px] text-white pt-3 py-3 rounded-lg hover:bg-blue-600">
        Try Whitepace free
        </button>
        </div>
        <div>
           <ImageContainer/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


