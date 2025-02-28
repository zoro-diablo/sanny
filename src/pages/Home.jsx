import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Toad from '../components/Toad';
import Features from '../components/Features';
import Services from '../components/Services';
import SuccessStories from '../components/SuccessStories';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Toad />
      <HowItWorks />
      <Features />
      <Services />
      <SuccessStories />
      {/* <Services />
      <Services /> */}
    </div>
  );
};
export default Home;
