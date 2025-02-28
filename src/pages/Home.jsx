import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Toad from '../components/Toad';
import Features from '../components/Features';
import Services from '../components/Services';
import SuccessStories from '../components/SuccessStories';
import TeamSection from '../components/TeamSection';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Toad />
      <HowItWorks />
      <Features />
      <Services />
      <SuccessStories />
      <TeamSection />
      {/* <Services />
      <Services /> */}
    </div>
  );
};
export default Home;
