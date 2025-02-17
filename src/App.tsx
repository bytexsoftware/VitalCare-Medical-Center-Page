
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import PricingPlans from './components/PricingPlans/PricingPlans';
import Security from './components/Security/Security';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <AboutUs />
      <Security />
      <PricingPlans />
      <Testimonials />
      <Contact />
    </div>
  );
}


export default App;