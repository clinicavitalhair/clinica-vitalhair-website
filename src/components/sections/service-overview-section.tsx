
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Droplets, Microscope, Stethoscope } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Sparkles className="h-10 w-10 mb-4" />,
    title: "Trasplante Capilar Técnica FUE",
    description: "La técnica FUE (Extracción de Unidades Foliculares) es un procedimiento mínimamente invasivo que permite restaurar el cabello de forma natural y sin cicatrices lineales. Ideal para resultados permanentes y estéticos.",
  },
  {
    icon: <Droplets className="h-10 w-10 mb-4" />,
    title: "Mesoterapia Capilar",
    description: "Tratamiento revitalizante que consiste en microinyecciones de vitaminas, minerales y otros nutrientes directamente en el cuero cabelludo para fortalecer el cabello, frenar la caída y estimular el crecimiento.",
  },
  {
    icon: <Microscope className="h-10 w-10 mb-4" />,
    title: "Diagnóstico Capilar Avanzado",
    description: "Análisis exhaustivo del cuero cabelludo y folículos pilosos para determinar la causa de la pérdida de cabello y diseñar el tratamiento más efectivo y personalizado.",
  },
  {
    icon: <Stethoscope className="h-10 w-10 mb-4" />,
    title: "Seguimiento Personalizado",
    description: "Acompañamiento continuo post-tratamiento para asegurar la correcta evolución, optimizar los resultados y resolver cualquier duda durante el proceso de recuperación.",
  },
];

export default function ServiceOverviewSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Tu Camino hacia la Restauración Capilar
          </h2>
          <p className="mt-4 text-xl text-foreground/90 max-w-2xl mx-auto">
            Descubre nuestros tratamientos especializados, diseñados para ofrecerte soluciones efectivas y resultados naturales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group flex flex-col bg-background shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out rounded-lg">
              <CardHeader className="items-center text-center">
                {React.cloneElement(service.icon, {
                  className: "h-10 w-10 mb-4 text-primary/90 group-hover:text-primary group-hover:scale-105 transition-all duration-300 ease-out"
                })}
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center text-foreground/90 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-primary mb-4">Precios y Presupuesto</h3>
          <p className="text-lg text-foreground/90 mb-6 max-w-xl mx-auto">
            Cada tratamiento es único. Contáctanos para una evaluación gratuita y un presupuesto personalizado adaptado a tus necesidades.
          </p>
          <Button asChild size="lg" className="border-2 border-secondary bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg rounded-lg transition-all duration-300 ease-in-out">
            <Link href="#contact">Solicita Tu Presupuesto</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
