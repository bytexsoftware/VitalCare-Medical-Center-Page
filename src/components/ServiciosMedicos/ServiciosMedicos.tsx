import React from 'react';

const ServiciosMedicos: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#003785] mb-20">🩺 SERVICIOS MEDICOS - VITAL MEDICAL CENTER</h2>

                {/* Contenedor de tarjetas */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    {/* Tarjeta 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md w-64 md:w-72">
                        <h2 className="text-xl font-bold">🩺 Consulta General</h2>
                        <h3 className="text-lg font-semibold mt-4">Evaluación Médica Completa</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Brindamos diagnósticos precisos y planes de tratamiento personalizados para mejorar tu salud.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-gray-200 rounded-md">Más Información</button>
                    </div>

                    {/* Tarjeta 2 (Más grande) */}
                    <div className="bg-white p-8 rounded-lg shadow-lg w-72 md:w-80 scale-110">
                        <h2 className="text-xl font-bold">🚑 Emergencias 24/7</h2>
                        <h3 className="text-lg font-semibold mt-4">Atención Rápida y Profesional</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Nuestro equipo de urgencias está listo para atender cualquier emergencia médica en todo momento.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-gray-200 rounded-md">Más Información</button>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md w-64 md:w-72">
                        <h2 className="text-xl font-bold">🧪 Laboratorio Clínico</h2>
                        <h3 className="text-lg font-semibold mt-4">Análisis Rápidos y Confiables</h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Ofrecemos pruebas de laboratorio con resultados precisos para garantizar diagnósticos efectivos.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-gray-200 rounded-md">Más Información</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiciosMedicos;
