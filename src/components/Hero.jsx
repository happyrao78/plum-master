import React from 'react';
import TypeEffect from './TypeEffect';
import Cards from "../assets/cards.svg"
import img1 from "../assets/image.png"  
import img2 from "../assets/image2.png"

const Hero = () => {
  return (
    <section
      className="landing-section relative overflow-x-hidden pb-40 pt-14 sm:pt-20 lg:pt-32 bg-grid h-[100vh] mt-32"
      id="home"
    >
      <div className="z-[-30] absolute inset-0"></div>
      
      <div className="flex flex-col items-center gap-15">
      {/* <img src={img1} alt="cards" className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6" /> */}
      
      
      <TypeEffect />
        

      </div>
    </section>
  );
};

export default Hero;
