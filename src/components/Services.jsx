import React from 'react';

const ServiceCard = ({ number, title, description }) => (
  <div className=' text-white p-6 rounded-lg shadow-md'>
    <div className='text-lg font-light mb-4 text-white/80 border w-fit  px-2 rounded-full'>
      {number}
    </div>
    <h3 className='text-xl font-semibold mb-4'>{title}</h3>
    <p className='text-gray-300'>{description}</p>
  </div>
);

const Services = () => {
  return (
    <section className=' text-white py-[8%] px-4'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl font-semibold mb-10 text-left ml-6'>
          We are suitable for in place of Services
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          <ServiceCard
            number='1'
            title='Enterprise Leaders'
            description='We architect and optimize AI ecosystems for global enterprises, ensuring seamless automation, operational efficiency, and data-driven decision-making at scale. Our solutions enhance productivity, minimize risk, and drive measurable business impact.'
          />
          <ServiceCard
            number='2'
            title=' Scaling AI Products'
            description='For companies looking to refine and scale their AI-driven products, we deliver advanced model optimization, seamless integrations, and performance enhancements that unlock new levels of efficiency and user engagement.'
          />
          <ServiceCard
            number='3'
            title='AI-First Innovators'
            description='From concept to deployment, we help visionary leaders build transformative AI solutions. Our expertise in AI strategy, infrastructure, and execution ensures a competitive edge in a rapidly evolving landscape.'
          />
          {/* <ServiceCard
            number='4'
            title='AI automation consulting'
            description='Looking to find the best solution for your needs? We offer tailored consultations to provide custom solutions that align with your specific processes and industry requirements.'
          />
          <ServiceCard
            number='5'
            title='Generative AI integration'
            description='No more wasting hours on content creation – whether it’s copy, images, videos, or voiceovers. We streamline the process, enabling you to produce content up to 27X faster.'
          />
          <ServiceCard
            number='6'
            title='Ongoing Maintenance and Support'
            description='We don’t stop at project delivery. As your partners, we provide continuous improvements, scalability options, and ongoing support to ensure your project grows alongside your business.'
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
