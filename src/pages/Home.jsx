import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PortfolioPreview from '../components/home/PortfolioPreview';
import PricingPreview from '../components/home/PricingPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQPreview from '../components/home/FAQPreview';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <PricingPreview />
      <TestimonialsSection />
      <FAQPreview />
      <CallToAction />
    </>
  );
};

export default Home;
