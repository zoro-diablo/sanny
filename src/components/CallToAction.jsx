import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { IoMdContact } from 'react-icons/io';

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  const SpringModal = ({ isOpen, setIsOpen }) => {
    const [formData, setFormData] = useState({
      firstname: '',
      email: '',
      contactno: '',
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^\+?[0-9]{7,15}$/;

      if (!formData.email || !emailPattern.test(formData.email)) {
        setStatus('Invalid email address');
        return;
      }
      if (!formData.contactno || !phonePattern.test(formData.contactno)) {
        setStatus('Invalid phone number');
        return;
      }

      setStatus('Submitting...');

      const googleFormEndpoint =
        'https://docs.google.com/forms/d/e/1FAIpQLSdVxXUIc7aEOUfpC4IUdXAp3lxziCS13RPsFj3z9QJfeDOXBg/formResponse';

      const body = new URLSearchParams();
      body.append('entry.538181747', formData.firstname);
      body.append('entry.910439913', formData.email);
      body.append('entry.25111992', formData.contactno);

      try {
        await fetch(googleFormEndpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body,
        });
        setStatus('Success! Your response has been submitted.');
        setFormData({ firstname: '', email: '', contactno: '' });
        setTimeout(() => {
          setIsOpen(false);
          setStatus(null);
        }, 2000);
      } catch (error) {
        setStatus('Failed to submit. Please try again.');
      }
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer no-scrollbar"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#daea20] text-white p-6 rounded-4xl w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/30 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-black grid place-items-center mx-auto">
                 <IoMdContact />

                </div>
                <h3 className="text-3xl font-bold text-center mb-2 text-black">
                  Contact Us
                </h3>
                <p className="text-center mb-6 text-black/50">
                  We’d love to hear from you! Please fill out the form below.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="firstname" className="block text-sm font-medium mb-1 text-black">
                      Name
                    </label>
                    <input
                      id="firstname"
                      placeholder="John"
                      type="text"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                      className="w-full p-2 rounded  text-black focus:ring-white focus:border-white focus:outline-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-black">
                      Email Address
                    </label>
                    <input
                      id="email"
                      placeholder="example@domain.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 rounded text-black focus:ring-white focus:border-white focus:outline-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contactno" className="block text-sm font-medium mb-1 text-black">
                      Contact Number
                    </label>
                    <input
                      id="contactno"
                      placeholder="+1234567890"
                      type="text"
                      value={formData.contactno}
                      onChange={handleChange}
                      required
                      className="w-full p-2 rounded text-black focus:ring-white focus:border-white focus:outline-white"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="bg-transparent hover:bg-white hover:text-black hover border-2 cursor-pointer border-white/70 transition-colors text-white font-semibold w-full py-2 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-white hover:scale-102 hover:opacity-90 transition-opacity text-black cursor-pointer font-semibold w-full py-2 rounded"
                    >
                      Submit
                    </button>
                  </div>

                  {status && (
                    <p className="mt-4 text-sm text-center text-white">
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <section className="bg-black text-white py-[20%] sm:py-[6%] md:py-[8%]">
      <div className="px-[12%] sm:px-[8%] md:px-[12%] lg:px-[16%] flex flex-col">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3 md:mb-4 text-left">
            Still not sure?
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-gray-300 max-w-sm sm:max-w-md md:max-w-lg">
            Contact us to learn more about Sanny AI Automation Agency and figure out how your team can change the way they work with AI.
          </p>
        </div>

        <div className="mb-4 sm:mb-5 md:mb-6">
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-white text-black text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold w-full py-[18%] sm:py-[14%] md:py-[10%] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] hover:bg-gray-200 tracking-tight cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            Book call
          </button>
        </div>

        <p className="text-sm sm:text-base md:text-md font-light text-white/80 text-center">
          or mail us at <span className='underline cursor-pointer'>hey@genfox.ai</span>
        </p>
      </div>
      
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default CallToAction;