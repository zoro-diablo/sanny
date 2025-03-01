import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SwipeCarousel = () => {
  const slides = [
    {
      name: 'Melissa Lewis',
      title: 'CEO of Kinder Bench',
      message:
        'The Sunny team has changed our internal productivity for the better. We use automation for everything from childcare to ordering food for lunches.',
      botReply: 'It was a pleasure to help 😊',
      image: 'https://via.placeholder.com/400x300',
      profileImage: 'https://via.placeholder.com/50',
    },
    {
      name: 'John Doe',
      title: 'CTO of TechCorp',
      message:
        'Sunny’s automation tools revolutionized our workflow. Highly recommend!',
      botReply: 'Glad to hear that! 😄',
      image: 'https://via.placeholder.com/400x300',
      profileImage: 'https://via.placeholder.com/50',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  // Handle slide navigation
  const paginate = (newDirection) => {
    const newIndex = (currentIndex + newDirection + slides.length) % slides.length;
    setCurrentIndex(newIndex);
    setPage([newIndex, newDirection]);
  };

  // Auto-play functionality
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      paginate(1); // Move to the next slide
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoPlayInterval);
  }, [currentIndex]);

  // Variants for slide animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // Swipe threshold (minimum drag distance to trigger slide change)
  const swipeThreshold = 100; // Pixels

  // Handle drag end to determine slide change
  const handleDragEnd = (e, { offset }) => {
    const swipeDistance = offset.x;
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance < 0) {
        paginate(1); // Dragged left -> next slide
      } else {
        paginate(-1); // Dragged right -> previous slide
      }
    }
  };

  return (
    <div className='flex flex-col px-[16%] justify-center my-[5%] gap-5'>
      <div className='mb-12'>
        <h2 className='text-3xl font-semibold tracking-tight'>Team</h2>
        <p className='text-md sm:text-xl mt-4 max-w-md leading-7 font-light text-white/80'>
          Each member of our team has a strong tech knowledge, with our
          principal focus on the triumph of our customers' businesses
        </p>
      </div>
      <div className='w-full max-w-6xl overflow-hidden'>
        {/* Carousel Container */}
        <div className='relative h-[500px]'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }} // Limits drag to horizontal bounds
              dragElastic={0.2} // Reduced elasticity for a snappier feel
              onDragEnd={handleDragEnd}
              className='absolute w-full h-full cursor-grab active:cursor-grabbing'
            >
              <div className='relative bg-white rounded-4xl py-20 shadow-lg overflow-hidden h-[500px]'>
                <div className='flex flex-col h-full md:flex-row'>
                  <div className='w-full md:w-1/2 p-4'>
                    <img
                      src={slides[currentIndex].image}
                      alt={`${slides[currentIndex].name}`}
                      className='w-full h-full rounded-lg object-cover'
                    />
                  </div>
                  <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <div className='bg-gray-200 p-4 rounded-lg mb-4 max-w-xs self-end'>
                      <p className='text-gray-800'>{slides[currentIndex].message}</p>
                      <p className='text-sm text-gray-600 mt-2'>
                        {slides[currentIndex].name}
                      </p>
                    </div>
                    <div className='bg-blue-100 p-4 rounded-lg max-w-xs self-start'>
                      <p className='text-blue-800'>{slides[currentIndex].botReply}</p>
                      <p className='text-sm text-blue-600 mt-2'>Sunny</p>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-4 left-4 flex items-center space-x-2'>
                  <img
                    src={slides[currentIndex].profileImage}
                    alt={`${slides[currentIndex].name} Profile`}
                    className='w-10 h-10 rounded-full object-cover'
                  />
                  <div>
                    <p className='text-gray-800 font-semibold'>
                      {slides[currentIndex].name}
                    </p>
                    <p className='text-gray-600 text-sm'>{slides[currentIndex].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className='flex justify-center mt-4 space-x-2'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const direction = index > currentIndex ? 1 : -1;
                setCurrentIndex(index);
                setPage([index, direction]);
              }}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwipeCarousel;