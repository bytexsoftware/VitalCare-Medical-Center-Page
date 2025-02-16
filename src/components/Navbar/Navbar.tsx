import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gray-100 shadow-md">
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/src/assets/images/Logo.png"
            alt="Vital Care Medical Center"
            className="h-12 w-auto" // Ajusta el tamaño del logo aquí
          />
          <span className="ml-4 text-[#003785] text-xl font-bold">
            VitalCare Medical Center
          </span>
        </div>

        {/* Botones */}
        <div className="hidden md:flex space-x-4">
          <button className="border-2 border-[#2196f3] text-[#2196f3] px-6 py-2 rounded-full hover:bg-[#2196f3] hover:text-white transition-colors">
            Log In
          </button>
          <button className="border-2 border-[#2196f3] text-[#2196f3] px-6 py-2 rounded-full hover:bg-[#2196f3] hover:text-white transition-colors">
            Servicios
          </button>
          <button className="border-2 border-[#2196f3] text-[#2196f3] px-6 py-2 rounded-full hover:bg-[#2196f3] hover:text-white transition-colors">
            Contacto
          </button>
        </div>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button className="text-[#2196f3] focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
