import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="relative bg-gray-100 py-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Tarjeta de Información de Contacto */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-[#003785] mb-6 text-center">Contacto y Soporte</h2>
          <div className="space-y-4 text-gray-700">
            
            <p className="flex items-center">
              <MapPin className="text-[#2196f3] w-6 h-6 mr-3" />
              <strong>Dirección:</strong> Carrera 15 #45-10, Bogotá, Colombia
            </p>
            
            <p className="flex items-center">
              <Phone className="text-[#2196f3] w-6 h-6 mr-3" />
              <strong>Teléfono:</strong> +57 320 456 7890
            </p>
            
            <p className="flex items-center">
              <Mail className="text-[#2196f3] w-6 h-6 mr-3" />
              <strong>Email:</strong> <a href="mailto:contacto@vitalcare.com" className="text-[#2196f3] hover:underline">contacto@vitalcare.com</a>
            </p>
            
            <p className="flex items-center">
              <MessageCircle className="text-[#2196f3] w-6 h-6 mr-3" />
              <strong>Soporte en Vivo:</strong> Chatea con un asesor de 8:00 a.m. a 8:00 p.m.
            </p>

            {/* Horario de Atención */}
            <div className="flex items-start">
              <Clock className="text-[#2196f3] w-6 h-6 mr-3 mt-1" />
              <div>
                <strong>Horario de Atención:</strong>
                <p className="mt-1">
                  🕗 Lunes a Viernes: 7:00 a.m. - 9:00 p.m.<br />
                  🕗 Sábados: 8:00 a.m. - 5:00 p.m.<br />
                  🕗 Domingos y festivos: Atención de urgencias 24/7
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-[#003785] mb-6 text-center">Envíanos un Mensaje</h3>
          <form className="space-y-4">
            
            <input type="text" placeholder="Nombre Completo" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2196f3]" />
            
            <input type="email" placeholder="Correo Electrónico" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2196f3]" />
            
            <textarea placeholder="Escribe tu mensaje..." rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2196f3]"></textarea>
            
            <button className="w-full bg-[#2196f3] text-white px-6 py-3 rounded-lg hover:bg-[#1976d2] transition-colors flex items-center justify-center">
              Enviar Mensaje <Send className="ml-2 w-5 h-5" />
            </button>
          
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
