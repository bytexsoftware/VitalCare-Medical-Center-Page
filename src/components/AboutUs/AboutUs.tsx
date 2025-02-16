import React from 'react';
import { Users, Stethoscope, ShieldCheck, BrainCircuit } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 shadow-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#003785] mb-12">Sobre Nosotros</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Misión */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-2xl transition-all">
            <Stethoscope className="text-[#2196f3] w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2196f3] mb-3">Nuestra Misión</h3>
            <p className="text-gray-700">
              Brindar atención médica integral con altos estándares de calidad, combinando tecnología avanzada con un enfoque humano y personalizado.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-2xl transition-all">
            <BrainCircuit className="text-[#2196f3] w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2196f3] mb-3">Nuestra Visión</h3>
            <p className="text-gray-700">
              Ser el centro de referencia en salud y bienestar, destacándonos por la excelencia en la atención y el compromiso con nuestros pacientes.
            </p>
          </div>

          {/* Equipo */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-2xl transition-all">
            <Users className="text-[#2196f3] w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2196f3] mb-3">Nuestro Equipo</h3>
            <p className="text-gray-700">
              Contamos con más de <strong>50 especialistas</strong> en diversas áreas médicas, comprometidos con el diagnóstico preciso y tratamientos efectivos.
            </p>
          </div>

          {/* Tecnología */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-2xl transition-all">
            <ShieldCheck className="text-[#2196f3] w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2196f3] mb-3">Tecnología de Vanguardia</h3>
            <p className="text-gray-700">
              Desde <strong>diagnósticos digitales</strong> hasta <strong>telemedicina</strong>, utilizamos herramientas innovadoras para mejorar la experiencia de nuestros pacientes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
