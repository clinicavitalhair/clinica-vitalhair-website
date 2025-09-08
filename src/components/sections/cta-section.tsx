
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-alabaster"> {/* Updated background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            ¿Listo para Transformar Tu Apariencia y Confianza?
          </h2>
          <p className="mt-4 text-xl text-foreground/90 max-w-2xl mx-auto">
            Da el primer paso hacia tu nueva imagen. Tu camino hacia un cabello más lleno y una mayor seguridad comienza con una simple consulta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Agenda Tu Consulta Gratuita Hoy</h3>
              <p className="text-lg text-foreground/90 mb-6">
                Descubre tu plan personalizado. Nuestro equipo de expertos está listo para evaluar tu caso y recomendarte la mejor solución.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md hover:shadow-lg rounded-lg w-full sm:w-auto text-lg py-4 transition-all duration-300 ease-in-out">
                <Link href="#contact-form-block">Solicitar Consulta Ahora</Link>
              </Button>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Detalles de Contacto</h3>
              <ul className="space-y-3 text-lg text-foreground/90">
                <li className="flex items-center group">
                  <Phone className="h-5 w-5 mr-3 text-secondary/80 group-hover:text-primary transition-colors duration-300" />
                  <a href="tel:+34000000000" className="hover:text-primary transition-colors duration-300">+34 000 000 000</a>
                </li>
                <li className="flex items-center group">
                  <Mail className="h-5 w-5 mr-3 text-secondary/80 group-hover:text-primary transition-colors duration-300" />
                  <a href="mailto:info@clinicavitalhair.com" className="hover:text-primary transition-colors duration-300">info@clinicavitalhair.com</a>
                </li>
                <li className="flex items-start group"> {/* Applied group here for potential future hover on li */}
                  <MapPin className="h-5 w-5 mr-3 text-secondary/80 group-hover:text-primary transition-colors duration-300 mt-1 shrink-0" />
                  <span className="group-hover:text-primary transition-colors duration-300">Calle Ficticia 123, Barcelona, España</span>
                </li>
              </ul>
            </div>
          </div>

          <div id="contact-form-block">
            <ContactForm />
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/34000000000" // Replace with actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50 flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
}
