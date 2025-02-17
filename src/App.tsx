import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Security from './components/Security/Security';
import Testimonials from './components/Testimonials/Testimonials';



function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <Security />
      <Testimonials />
     
    </div>
  );
}

export default App;