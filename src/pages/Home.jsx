import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Toad from '../components/Toad';
import Features from '../components/Features';
import Services from '../components/Services';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Toad />
      <HowItWorks />
      <Features />
      <Services />
      <Services />
      <Services />
    </div>
  );
};
export default Home;
