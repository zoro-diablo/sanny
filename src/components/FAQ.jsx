import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {faqs} from '../utils/content'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);



  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    visible: { 
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const iconVariants = {
    plus: { 
      rotate: 0,
      transition: { duration: 0.3 }
    },
    minus: { 
      rotate: 45,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className='text-white py-[8%]'>
      <div className='px-[16%]'>
        {/* Header */}
        <div className='mb-8'>
          <h2 className='text-3xl font-medium mb-4'>FAQ</h2>
          <p className='text-white/80 max-w-lg font-light text-lg'>
            Do you have more questions? We have prepared some answers for you.
            But if you need more, just
            <span className='text-white underline cursor-pointer whitespace-nowrap'>
              {' '}
              Book a call{' '}
            </span>
            or mail us at{' '}
            <span className='text-white underline cursor-pointer'>
              hey@genfox.ai
            </span>
          </p>
        </div>

        {/* FAQ Items */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='bg-[#19181b] rounded-lg overflow-hidden cursor-pointer'
              onClick={() => toggleFAQ(index)}
            >
              <div className='flex items-center justify-between px-4 py-6'>
                <h3 
                  className={`text-lg transition-all duration-300 ${
                    openIndex === index ? 'font-medium' : 'font-light'
                  }`}
                >
                  {faq.question}
                </h3>
                <motion.span
                  className='text-white/80 text-3xl font-light'
                  variants={iconVariants}
                  animate={openIndex === index ? 'minus' : 'plus'}
                >
                  +
                </motion.span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className='p-4 text-white/80 text-lg font-light'
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;