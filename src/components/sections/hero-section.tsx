'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

export default function HeroCard() {
  const [titleIndex, setTitleIndex] = useState(0)
  const titles = useMemo(
    () => ['confianza', 'naturalidad', 'juventud', 'vitalidad'],
    []
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <section id="hero" className="bg-white mx-4 md:mx-8 lg:mx-auto max-w-[1440px]">
      {/* Logo con Tagline - MEJORA AGREGADA */}
      <div className="text-center py-6">
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold text-brand-deep mb-2">
            VITAL HAIR
          </div>
          <div className="text-lg md:text-xl text-brand-gold font-semibold tracking-wide">
            MEDICINA CAPILAR DE EXCELENCIA
          </div>
        </div>
      </div>

      {/* Banner Promocional Móvil - MEJORA AGREGADA */}
      <div className="bg-brand-gold text-white py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-sm md:text-base font-medium">
            ✨ Tu primera visita es online y gratuita. Resolveremos tus dudas, te daremos una visión integral de tu caso y, si lo deseas, ¡podrás empezar el tratamiento desde el primer día! 🚀
          </span>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[36px] bg-brand-sage-50 shadow-[0_8px_24px_rgba(0,0,0,0.04)]
                      flex flex-col min-h-[600px] lg:min-h-[780px] lg:grid lg:grid-cols-2">
        {/* Mobile Image */}
        <div className="block lg:hidden">
          <Image
            src="/image/herosectionordic.png"
            alt="Recepción Clínica Vital Hair"
            width={600}
            height={600}
            priority
            className="h-56 w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="p-8 pt-[max(2rem,env(safe-area-inset-top))] flex flex-col gap-6 justify-center">
          <h1 className="font-beauty leading-[1.15] text-[clamp(2rem,6vw,3.5rem)] max-w-[15ch] uppercase text-brand-deep font-bold">
            Tu nueva{' '}
            <span
              key={titles[titleIndex]}
              className="text-brand-gold transition-colors duration-300 ease-out whitespace-nowrap"
              data-animate-word
            >
              {titles[titleIndex]}
            </span>
              

            empieza aquí
          </h1>
          <p className="font-sans text-base text-brand-charcoal/80 max-w-[38ch]">
            Expertos en restauración capilar{' '}
            <span className="text-blue-600 font-semibold cursor-help" title="La técnica FUE ZAFIRO utiliza cuchillas de zafiro para crear microincisiones más precisas, lo que resulta en una cicatrización más rápida, menor inflamación y resultados más naturales.">
              FUE ZAFIRO
            </span>{' '}
            con resultados naturales y permanentes.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="#contact" className="btn-primary w-full sm:w-auto h-12">
              Reserva tu consulta
            </Link>
            <Link href="#contact" className="btn-ghost w-full sm:w-auto h-12">
              Consulta online gratuita
            </Link>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:block relative h-full w-full">
          <Image
            src="/image/herosectionordic.png"
            alt="Fondo de Clínica Vital Hair"
            fill
            quality={90}
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* CSS para animación del banner */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
