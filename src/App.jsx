import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Pricing from './pages/Pricing';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import BlogList from './pages/BlogList';
import BlogDetails from './pages/BlogDetails';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import Careers from './pages/Careers';
import OrderForm from './pages/OrderForm';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

function App() {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetails />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog/:slug" element={<BlogDetails />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="refund" element={<Refund />} />
        <Route path="careers" element={<Careers />} />
        <Route path="order" element={<OrderForm />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
