import React from 'react';

const Security = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="text-[#2196f3]">Seguridad y Cumplimiento</span>
        </h2>
      </div>
      
      <div className="flex items-start gap-2 p-4">
        <button className="text-gray-500 mt-1">
          -
        </button>
        <div className="w-full">
          <div className="mt-2 bg-white p-4 border border-gray-200">
            <div className="text-[#003785] space-y-6">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🛡️</span>
                <div>
                  <strong className="font-semibold">Protección de Datos Médicos:</strong> Toda la información de nuestros pacientes está cifrada y protegida conforme a la normativa <strong>HIPAA y GDPR</strong>.
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">🩺</span>
                <div>
                  <strong className="font-semibold">Protocolos de Seguridad:</strong>
                  <ul className="list-disc pl-8 mt-2 space-y-2 text-gray-700">
                    <li>✔ Desinfección y control de acceso en todas nuestras instalaciones.</li>
                    <li>✔ Personal capacitado en medidas de bioseguridad.</li>
                    <li>✔ Historias clínicas electrónicas con acceso restringido solo para médicos autorizados.</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">📜</span>
                <div>
                  Cumplimos con los más altos estándares en salud y ética profesional.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;