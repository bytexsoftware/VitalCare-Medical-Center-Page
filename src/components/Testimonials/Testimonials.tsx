import React from 'react';
import testimonio1 from '../../assets/images/testimonio1.png'; // Ajusta la ruta según la estructura de carpetas
import testimonio2 from '../../assets/images/testimonio2.png'; // Ajusta la ruta según la estructura de carpetas
import testimonio3 from '../../assets/images/testimonio3.png'; // Ajusta la ruta según la estructura de carpetas

const Testimonials = () => {
  const testimonials = [
    { 
      text: "La atención en VitalCare fue excepcional. Me sentí seguro y bien cuidado en todo momento.", 
      author: "Carlos M.", 
      image: testimonio1 
    },
    { 
      text: "Gracias a su equipo de especialistas, pude recibir un diagnóstico rápido y preciso.", 
      author: "Mariana G.", 
      image: testimonio2 
    },
    { 
      text: "El servicio de telemedicina es una maravilla. Pude consultar a un doctor sin salir de casa.", 
      author: "Andrea R.", 
      image: testimonio3 
    }
  ];

  return (
    <div className="bg-gray-100 py-20 px-6 shadow-lg">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center">
          <span className="text-[#2196f3]">Testimonios</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 flex flex-col items-center hover:scale-105 hover:bg-gray-100 transition duration-300 ease-in-out">
            <img src={testimonial.image} alt={`Testimonio de ${testimonial.author}`} className="w-32 h-32 object-cover rounded-full mb-4" style={{ objectFit: 'cover' }} />
            <div className="text-center px-6 py-4">
              <p className="font-semibold text-gray-700 text-xl mb-2">{testimonial.author}</p>
              <p className="text-gray-700 text-base italic">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
          Comparte tu experiencia
        </button>
      </div>
    </div>
  );
};

export default Testimonials;