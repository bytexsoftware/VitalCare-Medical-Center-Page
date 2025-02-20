import React from 'react';

const BlogSection: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#003785] mb-20">📰 Nuestro Blog</h2>

                {/* Contenedor de tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Tarjeta 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <div className="text-6xl">📢</div>
                        <h2 className="text-xl font-bold mt-4">Noticias Médicas</h2>
                        <p className="text-gray-600 mt-2 text-sm">
                            Mantente informado con las últimas noticias en el mundo de la salud y la medicina.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-gray-200 rounded-md">Leer Más</button>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <div className="text-6xl">💡</div>
                        <h2 className="text-xl font-bold mt-4">Consejos de Salud</h2>
                        <p className="text-gray-600 mt-2 text-sm">
                            Descubre hábitos saludables y recomendaciones para mejorar tu bienestar diario.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-gray-200 rounded-md">Leer Más</button>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <div className="text-6xl">📊</div>
                        <h2 className="text-xl font-bold mt-4">Investigaciones Recientes</h2>
                        <p className="text-gray-600 mt-2 text-sm">
                            Explora estudios científicos y avances médicos innovadores en el sector.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-gray-200 rounded-md">Leer Más</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;