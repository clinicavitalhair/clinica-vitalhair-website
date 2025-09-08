
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function QuickEvaluationSection() {
  return (
    <section id="quick-evaluation" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
          Descubre Tu Solución Capilar Ideal
        </h2>
        <p className="mt-4 text-xl text-foreground/90 max-w-2xl mx-auto mb-8">
          ¿No estás seguro de qué tratamiento es el adecuado para ti? Responde unas sencillas preguntas y obtén una evaluación preliminar gratuita y sin compromiso.
        </p>
        <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md hover:shadow-lg rounded-lg transition-all duration-300 ease-in-out text-lg py-4">
          <Link href="#contact">Obtén Tu Evaluación Gratuita</Link>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          Esta evaluación es orientativa. Para un diagnóstico completo, por favor agenda una consulta.
        </p>
      </div>
    </section>
  );
}
