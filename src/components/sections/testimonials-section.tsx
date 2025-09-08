
'use client';

import type { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";


const testimonials = [
  {
    name: "Carlos M.",
    ageLocation: "42, Barcelona",
    text: "¡Increíble transformación! La Dra. Moreira y su equipo son excepcionales. Recuperé mi confianza y el resultado es súper natural.",
    image: "https://placehold.co/100x100.png?text=CM",
    dataAiHint: "person avatar"
  },
  {
    name: "Laura P.",
    ageLocation: "35, Girona",
    text: "El trato fue maravilloso y el seguimiento postoperatorio impecable. Recomiendo Clínica Vital Hair al 100%.",
    image: "https://placehold.co/100x100.png?text=LP",
    dataAiHint: "person avatar"
  },
  {
    name: "Javier S.",
    ageLocation: "50, Tarragona",
    text: "Después de mucho investigar, elegí esta clínica y no podría estar más contento. Profesionalidad y resultados visibles.",
    image: "https://placehold.co/100x100.png?text=JS",
    dataAiHint: "person avatar"
  },
  {
    name: "Elena G.",
    ageLocation: "38, Lleida",
    text: "Desde la primera consulta sentí que estaba en buenas manos. El resultado ha superado mis expectativas. ¡Gracias!",
    image: "https://placehold.co/100x100.png?text=EG",
    dataAiHint: "person avatar"
  },
  {
    name: "Miguel R.",
    ageLocation: "45, Badalona",
    text: "Muy profesionales y atentos a cada detalle. El proceso fue claro y los resultados son fantásticos. Totalmente recomendado.",
    image: "https://placehold.co/100x100.png?text=MR",
    dataAiHint: "person avatar"
  },
  {
    name: "Sofía V.",
    ageLocation: "29, Sabadell",
    text: "Tenía muchas dudas y el equipo me explicó todo con paciencia. Estoy feliz con mi nueva imagen y la naturalidad del trasplante.",
    image: "https://placehold.co/100x100.png?text=SV",
    dataAiHint: "person avatar"
  },
  {
    name: "David K.",
    ageLocation: "39, Madrid",
    text: "Servicio de primera y resultados que hablan por sí mismos. La clínica es moderna y el personal muy atento.",
    image: "https://placehold.co/100x100.png?text=DK",
    dataAiHint: "person avatar"
  },
  {
    name: "Isabel C.",
    ageLocation: "47, Valencia",
    text: "La mesoterapia capilar ha hecho maravillas. Noto mi cabello más fuerte y con más volumen. ¡Muy contenta!",
    image: "https://placehold.co/100x100.png?text=IC",
    dataAiHint: "person avatar"
  },
  {
    name: "Roberto L.",
    ageLocation: "53, Sevilla",
    text: "El proceso FUE fue mucho más sencillo de lo que imaginaba. La Dra. Moreira es una gran profesional. Totalmente recomendable.",
    image: "https://placehold.co/100x100.png?text=RL",
    dataAiHint: "person avatar"
  }
];

const firstColumnTestimonials = testimonials.slice(0, Math.ceil(testimonials.length / 3));
const secondColumnTestimonials = testimonials.slice(Math.ceil(testimonials.length / 3), Math.ceil(testimonials.length / 3) * 2);
const thirdColumnTestimonials = testimonials.slice(Math.ceil(testimonials.length / 3) * 2);


const beforeAfterImages = [
  { id: 1, stage: "Preoperatorio", src: "/image/preope.png", hint: "hair beforeAfter" },
  { id: 2, stage: "A los 30 días", src: "/image/30 dias.png", hint: "hair beforeAfter" },
  { id: 3, stage: "A los 2 meses", src: "/image/3meses.png", hint: "hair beforeAfter" },
  { id: 4, stage: "A los 5 meses", src: "/image/6meses.png", hint: "hair beforeAfter" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-bone">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-primary/30 py-1 px-4 rounded-lg text-primary bg-accent/30 text-sm font-medium">Testimonios</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight tracking-tight">
            Tu Futuro, Reflejado en Nuestros Resultados
          </h2>
          <p className="text-lg text-foreground/90 mt-5">
            Historias de éxito reales de pacientes que han transformado su confianza con nosotros.
          </p>
        </motion.div>


        {/* Google Rating */}
        <div className="mb-12 text-center">
          <Card className="inline-block p-6 bg-accent/50 shadow-lg rounded-lg">
            <CardContent className="p-0">
              <p className="text-2xl font-semibold text-primary mb-2">Valoración en Google</p>
              <div className="flex items-center justify-center text-secondary mb-1">
                <Star className="w-7 h-7 fill-[#ffd60a] stroke-[#ffd60a]" />
                <Star className="w-7 h-7 fill-[#ffd60a] stroke-[#ffd60a]" />
                <Star className="w-7 h-7 fill-[#ffd60a] stroke-[#ffd60a]" />
                <Star className="w-7 h-7 fill-[#ffd60a] stroke-[#ffd60a]" />
                <Star className="w-7 h-7 fill-[#ffd60a] stroke-[#ffd60a]" />
              </div>
              <p className="text-xl font-bold text-primary">4.9 estrellas</p>
              <p className="text-foreground/90">(Más de 200 reseñas)</p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Columns */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden mb-16">
          <TestimonialsColumn testimonials={firstColumnTestimonials} duration={25} />
          <TestimonialsColumn testimonials={secondColumnTestimonials} className="hidden md:block" duration={30} />
          <TestimonialsColumn testimonials={thirdColumnTestimonials} className="hidden lg:block" duration={28} />
        </div>


        {/* Before & After Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">Galería de Antes y Después</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {beforeAfterImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-md aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.stage}
                  layout="fill"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.hint}
                />
                <div className="absolute bottom-0 left-0 bg-black/50 text-white p-2 text-sm w-full z-10">
                  {image.stage}
                </div>
              </div>
            ))}
          </div>
           <p className="text-center mt-4 text-foreground/90">Resultados individuales pueden variar. Imágenes con consentimiento del paciente.</p>
        </div>
        
      </div>
    </section>
  );
}
