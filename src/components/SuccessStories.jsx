import React from 'react';

const SuccessStories = () => {
  return (
    <div className='pb-16 px-[6%] font-sans max-w-6xl mx-auto'>
      {/* Header Section */}
      <div className=' mb-12'>
        <h2 className='text-3xl font-semibold tracking-tight'>
          Success Stories
        </h2>
        <p className='text-xl mt-4 max-w-md leading-7 font-light text-white/80'>
          Some of our best success stories. We invest significant resources and
          effort in our clients' projects because we want them to succeed.
        </p>
      </div>

      {/* Stories Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        {/* Story 1 */}
        <div className='bg-[#19181b] rounded-3xl shadow-lg overflow-hidden flex flex-col sm:flex-row transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer'>
          <div className='p-8 flex-1'>
            <h3 className='text-lg font-semibold mb-2'>Kinder Bench</h3>
            <p className='font-light text-lg text-white/80 mb-4'>
              AI automation of childcare for a kindergarten
            </p>
            <hr className='border-gray-600 my-4' />
            <p className='text-xl font-bold'>~48%</p>
            <p className='text-md text-white/80 font-light mt-1'>
              Time and resource <br /> savings
            </p>
          </div>
          <div className='sm:w-[200px] overflow-hidden'>
            <img
              src='https://plus.unsplash.com/premium_photo-1687128298370-f806e7c47fca?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Kinder Bench'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* Story 2 - Updated with Story 1's styles */}
        <div className='bg-[#19181b] rounded-3xl shadow-lg overflow-hidden flex flex-col sm:flex-row transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer'>
          <div className='p-8 flex-1'>
            <h3 className='text-lg font-semibold mb-2'>
              SPICE® AI
            </h3>
            <p className='font-light text-lg text-white/80 mb-4'>
              Development of AI generation functions for startup
            </p>
            <hr className='border-gray-600 my-4' />
            <p className='text-xl font-bold'>~27%</p>
            <p className='text-md text-white/80 font-light mt-1'>
              Time and resource <br /> savings
            </p>
          </div>
          <div className='sm:w-[200px] overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='SPICE AI'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;