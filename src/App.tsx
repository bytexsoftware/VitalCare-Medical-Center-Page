import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import PricingPlans from './components/PricingPlans/PricingPlans';
import Security from './components/Security/Security';
import Testimonials from './components/Testimonials/Testimonials';
import ServiciosMedicos from './components/ServiciosMedicos/ServiciosMedicos';
import PreguntasFrecuentes from './components/PreguntasFrecuentes/PreguntasFrecuentes';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <AboutUs />
      <ServiciosMedicos />
      <Security />
      <PricingPlans />
      <PreguntasFrecuentes />
      <Testimonials />     
      <Footer />
    </div>
  );
}


export default App;