'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqData = [
  {
    id: "faq-1",
    question: "¿Qué es la técnica FUE ZAFIRO?",
    answer: "La técnica FUE ZAFIRO utiliza cuchillas de zafiro para crear microincisiones más precisas, lo que resulta en una cicatrización más rápida, menor inflamación y resultados más naturales. Es la técnica más avanzada disponible actualmente."
  },
  {
    id: "faq-2", 
    question: "¿Cuánto tiempo dura el procedimiento?",
    answer: "El tiempo varía según el número de folículos a trasplantar, pero generalmente oscila entre 6 y 8 horas. Se realiza con anestesia local y es completamente ambulatorio, por lo que puedes irte a casa el mismo día."
  },
  {
    id: "faq-3",
    question: "¿Cuándo se ven los resultados?",
    answer: "Los primeros resultados se aprecian a partir del tercer mes, pero el resultado final se obtiene entre los 12 y 18 meses después del trasplante. Es importante tener paciencia, ya que el cabello crece de forma natural y gradual."
  },
  {
    id: "faq-4",
    question: "¿El trasplante capilar es permanente?",
    answer: "Sí, los folículos trasplantados mantienen las características de la zona donante y no se ven afectados por la alopecia androgenética, por lo que el resultado es permanente. Es una inversión de por vida en tu imagen."
  },
  {
    id: "faq-5",
    question: "¿Qué cuidados post-operatorios son necesarios?",
    answer: "Proporcionamos instrucciones detalladas y seguimiento personalizado. Los cuidados incluyen evitar ejercicio intenso los primeros días, protección solar y uso de productos específicos que recomendamos. Nuestro equipo te acompañará en todo el proceso."
  },
  {
    id: "faq-6",
    question: "¿Hay algún límite de edad para el trasplante?",
    answer: "No hay un límite de edad específico, pero evaluamos cada caso individualmente. Lo importante es tener una zona donante adecuada y expectativas realistas. Durante la consulta gratuita evaluamos tu caso específico."
  },
  {
    id: "faq-7",
    question: "¿El procedimiento es doloroso?",
    answer: "El procedimiento se realiza con anestesia local, por lo que no sentirás dolor durante la intervención. Después puede haber molestias leves que se controlan fácilmente con analgésicos comunes. La mayoría de pacientes se sorprenden de lo cómodo que es."
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-primary/30 py-1 px-4 rounded-lg text-primary bg-accent/30 text-sm font-medium">
              Preguntas Frecuentes
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight tracking-tight">
            Resolvemos Tus Dudas
          </h2>
          <p className="text-lg text-foreground/90 mt-5">
            Las preguntas más comunes sobre nuestros tratamientos capilares y el proceso de trasplante.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={faq.id} 
                  className="border border-gray-200 rounded-lg px-6 py-2 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-brand-gold transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-foreground/80 mb-6">
            ¿Tienes más preguntas? Estamos aquí para ayudarte.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-brand-gold text-white font-semibold rounded-full hover:bg-brand-gold/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Consulta Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  )
}
