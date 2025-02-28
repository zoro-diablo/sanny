import React from 'react';

const ServiceCard = ({ number, title, description, imageSrc }) => (
  <div className='bg-[#19181b] text-white p-6 rounded-3xl shadow-md flex flex-col transform hover:scale-[1.02] transition-transform duration-300'>
    <div className='flex-1'>
      <div className='text-lg font-light mb-4 text-white/80 border w-fit px-2 rounded-full'>
        {number}
      </div>
      <h3 className='text-xl font-semibold mb-4'>{title}</h3>
      <p className='text-gray-300 mb-4'>{description}</p>
    </div>
    <div className='w-full h-[200px] overflow-hidden rounded-b-2xl'>
      <img
        src={imageSrc}
        alt={title}
        className='w-full h-full object-cover'
      />
    </div>
  </div>
);

const Services = () => {
  return (
    <section className='text-white py-[8%] px-4'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl font-semibold mb-10 text-left ml-6'>
          We are suitable for in place of Services
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <ServiceCard
            number='1'
            title='Enterprise Leaders'
            description='We architect and optimize AI ecosystems for global enterprises, ensuring seamless automation, operational efficiency, and data-driven decision-making at scale. Our solutions enhance productivity, minimize risk, and drive measurable business impact.'
            imageSrc='https://images.unsplash.com/photo-1717501219905-2711c58ab655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpfGVufDB8fDB8fHwy'
          />
          <ServiceCard
            number='2'
            title='Scaling AI Products'
            description='For companies looking to refine and scale their AI-driven products, we deliver advanced model optimization, seamless integrations, and performance enhancements that unlock new levels of efficiency and user engagement.'
            imageSrc='https://images.unsplash.com/photo-1696258686454-60082b2c33e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWl8ZW58MHx8MHx8fDI%3D'
          />
          <ServiceCard
            number='3'
            title='AI-First Innovators'
            description='From concept to deployment, we help visionary leaders build transformative AI solutions. Our expertise in AI strategy, infrastructure, and execution ensures a competitive edge in a rapidly evolving landscape.'
            imageSrc='https://images.unsplash.com/photo-1711831521065-e546a5aca68e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpfGVufDB8fDB8fHwy'
          />
        </div>
      </div>
    </section>
  );
};

export default Services;