import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h3 className="text-lg font-bold">Vital Medical Center</h3>
                    <p className="mt-2 text-gray-400">Cuidando tu salud con profesionalismo y calidez.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold">Contacto</h3>
                    <p className="mt-2 text-gray-400">📍 Av. Salud #123, Ciudad Bienestar</p>
                    <p className="text-gray-400">📞 (123) 456-7890</p>
                    <p className="text-gray-400">✉️ contacto@vitalmedical.com</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold">Síguenos</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} Vital Medical Center. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
