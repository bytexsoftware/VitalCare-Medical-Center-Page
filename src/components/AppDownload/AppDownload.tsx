import React from 'react';
import { ArrowDownToLine } from 'lucide-react';
import appMockup from '../../assets/images/app-mockup.svg';

const AppDownload = () => {
  return (
    <div className="w-full bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Texto e información */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-600">
              Descarga nuestra App
            </h2>
            <p className="text-xl text-gray-700">
              ¡Tu salud al alcance de tu mano!
            </p>
            <p className="text-gray-600">
              Gestiona tus citas, consulta tu historial médico y accede a video consultas desde nuestra app móvil.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <ArrowDownToLine size={20} />
                Google Play
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <ArrowDownToLine size={20} />
                App Store
              </a>
            </div>
          </div>
          
          {/* Mockup del teléfono */}
          <div className="relative">
            <div className="bg-white p-4 rounded-3xl shadow-xl max-w-[300px] mx-auto">
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">
                <img 
                  src={appMockup}
                  alt="VitaCare App Preview" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;