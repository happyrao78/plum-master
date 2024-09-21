import React from 'react';
import TypeEffect from './TypeEffect';

const Hero = () => {
  return (
    <section
      className="landing-section relative overflow-x-hidden pb-40 pt-14 sm:pt-20 lg:pt-32 bg-grid h-[100vh]"
      id="home"
    >
      <div className="z-[-30] absolute inset-0"></div>
      <div className="flex flex-col items-center gap-10">
        <div className="flex items-center justify-center m-6 p-6 w-full">
          {/* <h1 className="text-5xl sm:text-6xl px-2 s:px-4 text-center text-gray-50 lg:text-7xl xl:text-5xl font-bold sm:max-w-4xl uppercase bg-gradient-text bg-clip-text text-transparent">
            Insurance is daunting
          </h1> */}
          <TypeEffect />
        </div>
          <button className='text-white bg-[#FF4052] rounded py-2 px-4'><a href="#game">Play a Game</a></button>
        {/* <div className="flex items-center justify-center p-1">
          <p className="text-sm s:text-base font-light px-4 s:px-8 text-center text-gray-100 sm:text-xl max-w-2xl lg:max-w-4xl">
            AALA is an AI-powered system that combines insurance policies,
            gamification, and advanced analytics. It promotes safer driving
            behavior by monitoring factors like speed, acceleration, braking,
            and traffic rule adherence. By incentivizing and encouraging
            fitness, AALA aims to enhance driver accountability and fitness.
          </p>
        </div> */}
        
      </div>
    </section>
  );
};

export default Hero;
