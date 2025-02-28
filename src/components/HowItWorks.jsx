import React from 'react';

const HowItWorks = () => {
  return (
    <div className=" text-white py-8 sm:py-10 px-4 sm:px-8 md:px-[10%] lg:px-[16%] font-sans">
      <h1 className="text-2xl sm:text-3xl mb-6 sm:mb-8 font-medium text-center sm:text-left">How it works?</h1>
      <div className="text-left space-y-4 sm:space-y-6">
        {/* Step 1 - Light Card */}
        <div className="bg-white text-black p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-4xl shadow-lg w-full sm:w-[48%] sm:inline-block sm:mr-[1%] mb-2 sm:mb-[6px] align-top h-auto min-h-[350px] sm:h-[400px]">
          <div className="text-base sm:text-lg font-semibold mb-28 sm:mb-40 border w-fit rounded-full px-2">Step 1</div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Subscribe</h2>
          <p className="text-base sm:text-lg font-light leading-6">
            If our services is a good fit, start your subscription. Access your project board, and we’ll reach out the same day for an introductory discussion.{' '}
            <a href="#plans" className="underline">
              Plans & Pricing ↓
            </a>
          </p>
        </div>

        {/* Step 2 - Dark Card */}
        <div className="bg-[#19181b] text-white p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-4xl shadow-lg w-full sm:w-[48%] sm:inline-block mb-2 sm:mb-[12px] align-top h-auto min-h-[350px] sm:h-[400px]">
          <div className="text-base sm:text-lg font-semibold mb-28 sm:mb-40 border w-fit rounded-full px-2">Step 2</div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Share your vision</h2>
          <p className="text-base sm:text-lg font-light leading-6">
            Once we have your vision, we’ll analyse your goals, business requirements and constraints, break the project into bite-sized tasks, and start implementing.
          </p>
        </div>

        {/* Step 3 - Light Card */}
        <div className="bg-[#19181b] text-white p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-4xl shadow-lg w-full sm:w-[48%] sm:inline-block sm:mr-[1%] mb-2 sm:mb-[6px] align-top h-auto min-h-[350px] sm:h-[400px]">
          <div className="text-base sm:text-lg font-semibold mb-28 sm:mb-40 border w-fit rounded-full px-2">Step 3</div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Continuous results</h2>
          <p className="text-base sm:text-lg font-light leading-6">
            Our team effectively solves your tasks and implements AI as a strategic asset, ensuring it becomes an integral part of your company’s workflow.
          </p>
        </div>

        {/* Step 4 - Dark Card - Special with extra height and circle */}
        <div className="bg-[#19181b] text-white p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-4xl shadow-lg w-full sm:w-[48%] sm:inline-block mb-2 sm:mb-[6px] align-top flex flex-col h-auto min-h-[450px] sm:h-[550px]">
          <div className="text-base sm:text-lg font-semibold mb-14 sm:mb-14 border w-fit rounded-full px-2">Step 4</div>
          <div className="w-32 sm:w-44 h-32 sm:h-44 rounded-full border mx-auto opacity-20 self-center mb-8 sm:mb-16"></div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Enjoy the growth</h2>
          <p className="text-base sm:text-lg font-light leading-6 mb-4">
            Our results drive your business growth, which is our main goal. We offer detailed instructions, training and tech support as long as you need to maximize our work’s value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;