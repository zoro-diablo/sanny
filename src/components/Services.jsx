import React from 'react';

const ServiceCard = ({ number, title, description }) => (
  <div className=" text-white p-6 rounded-lg shadow-md">
    <div className="text-lg font-light mb-4 text-white/80 border w-fit  px-2 rounded-full">{number}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section className=" text-white py-[15%] px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-left ml-6">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <ServiceCard 
            number="1" 
            title="Business process automation" 
            description="Let AI handle repetitive tasks and workflows. Improve efficiency, minimize errors, and free up time for strategic work, ultimately driving cost savings."
          />
          <ServiceCard 
            number="2" 
            title="Integrate AI into your company's data" 
            description="Our AI automation services empower you to leverage data-driven automation, generate actionable insights, and use predictive analytics to support informed decision-making."
          />
          <ServiceCard 
            number="3" 
            title="AI-powered apps development" 
            description="We develop apps that deliver personalized, real-time insights and transform user experiences, including AI chatbots, image recognition for augmented reality, and predictive analytics for top-tier recommendations."
          />
          <ServiceCard 
            number="4" 
            title="AI automation consulting" 
            description="Looking to find the best solution for your needs? We offer tailored consultations to provide custom solutions that align with your specific processes and industry requirements."
          />
          <ServiceCard 
            number="5" 
            title="Generative AI integration" 
            description="No more wasting hours on content creation – whether it’s copy, images, videos, or voiceovers. We streamline the process, enabling you to produce content up to 27X faster."
          />
          <ServiceCard 
            number="6" 
            title="Ongoing Maintenance and Support" 
            description="We don’t stop at project delivery. As your partners, we provide continuous improvements, scalability options, and ongoing support to ensure your project grows alongside your business."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;