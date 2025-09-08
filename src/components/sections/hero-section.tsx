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
            <br />
            empieza aquí
          </h1>
          <p className="font-sans text-base text-brand-charcoal/80 max-w-[38ch]">
            Expertos en restauración capilar FUE con resultados naturales y permanentes.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="#contact" className="btn-primary w-full sm:w-auto h-12">
              Reserva tu consulta gratuita
            </Link>
            <Link
              href="/guia-gratuita.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto h-12"
            >
              Descarga la guía definitiva
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
    </section>
  )
}
