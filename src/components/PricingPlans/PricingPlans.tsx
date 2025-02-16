import React from 'react';
import { CreditCard, HeartPulse, Briefcase, Users } from 'lucide-react';

const PricingPlans: React.FC = () => {
  return (
    <section className="relative bg-gray-100 py-20 px-6">
      
      
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#003785] mb-12">Tarifas y Planes de Atención</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Ofrecemos diferentes opciones para garantizar acceso a la mejor atención médica.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Consulta General */}
          <div className="bg-white shadow-xl p-6 rounded-lg text-center hover:scale-105 transition-transform">
            <CreditCard className="text-[#2196f3] w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2196f3] mb-3">Consulta General</h3>
            <p className="text-gray-700">$50.000 COP</p>
          </div>

          {/* Consulta Especializada */}
          <div className="bg-white shadow-xl p-6 rounded-lg text-center hover:scale-105 transition-transform">
            <HeartPulse className="text-[#2196f3] w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2196f3] mb-3">Consulta Especializada</h3>
            <p className="text-gray-700">$90.000 COP</p>
          </div>

          {/* Chequeo Médico Completo */}
          <div className="bg-white shadow-xl p-6 rounded-lg text-center hover:scale-105 transition-transform">
            <Users className="text-[#2196f3] w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2196f3] mb-3">Chequeo Médico Completo</h3>
            <p className="text-gray-700">$150.000 COP</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[#003785] mt-12 mb-6">Planes de Salud</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Plan Familiar */}
          <div className="bg-white shadow-xl p-6 rounded-lg text-center hover:scale-105 transition-transform">
            <Users className="text-[#2196f3] w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2196f3] mb-3">Plan Familiar</h3>
            <p className="text-gray-700">Desde $250.000 COP</p>
          </div>

          {/* Plan Empresarial */}
          <div className="bg-white shadow-xl p-6 rounded-lg text-center hover:scale-105 transition-transform">
            <Briefcase className="text-[#2196f3] w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2196f3] mb-3">Plan Empresarial</h3>
            <p className="text-gray-700">Descuentos para empleados</p>
          </div>
        </div>

        <button className="mt-10 bg-[#2196f3] text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-[#1976d2] transition-all">
          Consultar tarifas completas
        </button>
      </div>
    </section>
  );
};

export default PricingPlans;