
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import PricingPlans from './components/PricingPlans/PricingPlans';
import Security from './components/Security/Security';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <AboutUs />
      <PricingPlans />
      <Security />
    </div>
  );
}

export default App;