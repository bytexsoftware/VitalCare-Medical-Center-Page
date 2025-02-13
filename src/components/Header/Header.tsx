import React from 'react';
import { ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto del encabezado */}
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-[#2196f3]">Cuidamos de tu Salud</span>
              <br />
              <span className="text-[#003785]">Con Dedicación y Excelencia</span>
            </h1>
            <p className="text-[#003785] text-lg mb-6 leading-relaxed">
              En <strong>Vital Care Medical Center</strong>, nos dedicamos a proporcionar atención médica de primera calidad con un equipo de profesionales altamente calificados. Tu bienestar es nuestra prioridad.
            </p>
            <ul className="text-[#003785] text-lg mb-8 space-y-4">
              <li>📅 <strong>Agenda tu cita hoy mismo y cuida tu salud con los mejores profesionales.</strong></li>
              <li>📍 Ubicados en el corazón de la ciudad, ofrecemos servicios médicos integrales en un ambiente moderno y acogedor.</li>
              <li>🩺 <strong>Tu salud en manos expertas.</strong></li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#2196f3] text-white px-8 py-3 rounded-full hover:bg-[#1976d2] transition-colors flex items-center">
                Conoce Nuestros Servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-[#2196f3] text-[#2196f3] px-8 py-3 rounded-full hover:bg-[#2196f3] hover:text-white transition-colors">
                Agendar Consulta
              </button>
            </div>
          </div>

          {/* Imagen del encabezado */}
          <div className="relative flex justify-center">
            <img
              src="/src/assets/images/medicos7.jpg"
              alt="Equipo médico profesional"
              className="rounded-lg shadow-2xl w-full max-w-md md:max-w-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;