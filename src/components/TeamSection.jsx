import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rich Purnell',
      title: 'CEO',
      image: 'https://images.unsplash.com/photo-1579038773867-044c48829161?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNlbyUyMG1hbGV8ZW58MHx8MHx8fDI%3D',
    },
    {
      id: 2,
      name: 'Beth Johanssen',
      title: 'CTO',
      image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2VvfGVufDB8fDB8fHwy',
    },
    {
      id: 3,
      name: 'Chris Beck',
      title: 'Head of Data Engineering',
      image: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNlb3xlbnwwfHwwfHx8Mg%3D%3D',
    },
  ];

  return (
    <section className='py-20'>
      <div className='max-w-5xl mx-auto px-[2%]'>
        {/* Header Section */}
        <div className='mb-12'>
          <h2 className='text-3xl font-semibold tracking-tight'>Team</h2>
          <p className='text-xl mt-4 max-w-md leading-7 font-light text-white/80'>
            Each member of our team has a strong tech knowledge, with our
            principal focus on the triumph of our customers' businesses
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className='group relative w-full max-w-[320px] mx-auto'
            >
              <img
                src={member.image}
                alt={member.name}
                className='w-full h-80 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105'
              />
              <div className='mt-4 text-center'>
                <h2 className='text-lg font-semibold text-white mb-2'>
                  {member.name}
                </h2>
                <p className='text-sm text-white/80'>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;