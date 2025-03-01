import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-black text-white py-[20%] sm:py-[6%] md:py-[8%]">
      <div className="px-[12%] sm:px-[8%] md:px-[12%] lg:px-[16%] flex flex-col">
        {/* Heading and description */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3 md:mb-4 text-left">
            Still not sure?
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-gray-300 max-w-sm sm:max-w-md md:max-w-lg">
            Contact us to learn more about Sanny AI Automation Agency and figure out how your team can change the way they work with AI.
          </p>
        </div>

        {/* Call-to-action button */}
        <div className="mb-4 sm:mb-5 md:mb-6">
          <button className="bg-white text-black text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold w-full py-[18%] sm:py-[14%] md:py-[10%] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] hover:bg-gray-200 tracking-tight cursor-pointer transition-transform duration-300 hover:scale-105">
            Book call
          </button>
        </div>

        {/* Additional text */}
        <p className="text-sm sm:text-base md:text-md font-light text-white/80 text-center">
          or mail us at <span className='underline cursor-pointer'>hey@genfox.ai</span>
        </p>
      </div>
    </section>
  );
};

export default CallToAction;