import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    { question: "¿Cómo puedo agendar una cita en Vital Medical Center?", answer: "Puedes agendar una cita llamando a nuestro centro al (123) 456-7890 o a través de nuestro sitio web en la sección de citas." },
    { question: "¿Cuáles son los horarios de atención?", answer: "Estamos abiertos de lunes a viernes de 8:00 AM a 6:00 PM y los sábados de 9:00 AM a 1:00 PM." },
    { question: "¿Aceptan seguros médicos?", answer: "Sí, aceptamos una amplia variedad de seguros médicos. Te recomendamos consultar con nuestro equipo para verificar la cobertura." },
    { question: "¿Qué especialidades médicas ofrecen?", answer: "Contamos con especialistas en medicina general, pediatría, cardiología, dermatología, ginecología y muchas más áreas." },
    { question: "¿Dónde está ubicado Vital Medical Center?", answer: "Nos encontramos en la Av. Salud #123, Ciudad Bienestar. Puedes ver nuestra ubicación en Google Maps en nuestra página web." },
];

const PreguntasFrecuentes: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Preguntas Frecuentes - Vital Medical Center</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b pb-2">
                        <button
                            className="flex justify-between items-center w-full text-left font-medium text-lg p-3 hover:bg-gray-100 rounded-md"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                        </button>
                        {activeIndex === index && (
                            <p className="p-3 text-gray-700">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreguntasFrecuentes;

