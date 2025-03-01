import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { cards } from '../utils/content';

const ScrollSection = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const cardHeight = 600;
  const totalCardsHeight = cardHeight * cards.length;
  const marginBottom = 0;
  const totalScrollDistance =
    totalCardsHeight + marginBottom * (cards.length - 1);

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -totalScrollDistance]),
    { stiffness: 300, damping: 30 }
  );

  const cardColors = ['#ffffff', '#daea22', '#19181b'];

  return (
    <div
      ref={sectionRef}
      className='relative w-full max-w-5xl mx-auto my-[10%] sm:my-0  sm:h-[280vh]'
    >
      {/* Left Sticky Heading */}
      <div
        className='text-center mb-10 sm:mb-0 px-10 sm:px-4 
        sm:px-6 
        md:absolute md:left-0 md:top-0 md:h-[calc(100vh-80px)] md:w-1/2 md:text-white md:flex md:items-center md:justify-center md:p-6 md:z-10 md:sticky md:top-10
        lg:p-8
        xl:p-10'
      >
        <div className='text-left'>
          <h1 className='text-3xl font-medium'>Services We Provide</h1>
          <h1 className='text-md text-white md:text-white/80 font-medium mb-4 hidden'>
            Powering the future of AI-driven enterprises
          </h1>
          <p className='text-white md:text-white/80 font-light'>
            Because we can solve the challenges that other companies can’t reach
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div className='w-full px-4 sm:px-6 md:w-1/2 md:ml-[50%] md:h-[400vh] lg:px-8 xl:px-10'>
        {/* Mobile Grid Layout */}
        <div className='grid grid-cols-1 gap-6 md:hidden'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='w-full p-10 rounded-4xl shadow-md flex flex-col justify-between mb-10'
              style={{
                backgroundColor: cardColors[index] || '#ffffff',
                color: index === 2 ? '#ffffff' : '#000000',
              }}
            >
              <h2 className='text-2xl font-semibold mb-4'>{card.title}</h2>
              <p className='text-left font-light text-lg'>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Desktop Scrollable Cards */}
        <div
          ref={scrollRef}
          className='hidden md:block h-[400vh] overflow-y-auto scroll-smooth snap-y snap-mandatory'
          style={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
          }}
        >
          <motion.div
            style={{ y, position: 'relative' }}
            className='flex flex-col items-center justify-start h-full'
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className='w-full p-10 rounded-4xl shadow-md snap-start flex flex-col justify-between mb-10'
                style={{
                  height: `${cardHeight}px`,
                  backgroundColor: cardColors[index] || '#ffffff',
                  color: index === 2 ? '#ffffff' : '#000000',
                }}
              >
                <h2 className='text-2xl font-semibold mb-4'>{card.title}</h2>
                <p className='text-left font-light text-lg'>
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
