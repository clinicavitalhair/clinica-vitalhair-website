'use client'

import { CheckIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const pricingPlans = [
  {
    name: 'Plan M',
    price: '2.990',
    iva: 'IVA incluido',
    description:
      'Recomendado para ligeras entradas o si has perdido un poco de densidad. Ideal si buscas una mejora discreta pero efectiva.',
    features: [
      'Técnica FUE Zafiro Max Density',
      'Hasta 1500 folículos',
      'Analítica de sangre',
      '1 Mesoterapia',
      'Lavado en clínica',
      'Consultas post-operatorias',
      'Seguimiento clínico',
      'KIT post-operatorio',
    ],
    isPopular: false,
  },
  {
    name: 'Plan L',
    price: '3.590',
    iva: 'IVA incluido',
    description:
      'Alopecias más avanzadas para repoblar zona frontal, coronilla o ambas. Recomendado por nuestros pacientes.',
    features: [
      'Técnica FUE Zafiro Max Density',
      'Máximo número folículos',
      'Analítica de sangre',
      '1 Mesoterapia',
      'Lavado en clínica',
      'Consultas post-operatorias',
      'Seguimiento clínico',
      'KIT post-operatorio',
    ],
    isPopular: true,
  },
  {
    name: 'Plan XL',
    price: '4.290',
    iva: 'IVA incluido',
    description:
      'Recomendado si quieres todas las comodidades y el mejor resultado. *Resultados visibles a partir del segundo mes.',
    features: [
      'Técnica FUE Zafiro Max Density',
      'Máximo número folículos',
      'Analítica de sangre',
      '1 Mesoterapia',
      'Lavado en clínica',
      'Consultas post-operatorias',
      'Seguimiento clínico',
      'KIT post-operatorio',
      'Pre-anestesia',
      'Pack Gold',
      '3 tratamientos de Meso Dut.',
      '3 tratamientos de Meso Minox',
      'Combinando en 3 sesiones los tratamientos Meso Dut. y Meso Minox (una sesión cada 2 meses aprox.)',
    ],
    isPopular: false,
  },
]

export function PricingCardsComponent() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-4 flex-col">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary bg-accent/30 py-1 px-4 text-sm font-medium"
          >
            Nuestros Planes
          </Badge>
          <div className="flex gap-2 flex-col text-center">
            <h2 className="text-3xl md:text-5xl tracking-tight font-bold text-primary max-w-2xl mx-auto">
              Planes Flexibles para Tu Transformación Capilar
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-foreground/90 max-w-xl mx-auto">
              Elige el plan que mejor se adapta a tus necesidades y comienza tu
              viaje hacia la confianza renovada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-8 pt-12 md:pt-20 w-full">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={cn(
                  'w-full flex flex-col bg-white/80 backdrop-blur-sm border border-brand-sage-300 rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg',
                  plan.isPopular ? 'ring-2 ring-brand-gold' : ''
                )}
              >
                <CardHeader className="pb-4 relative">
                  {plan.isPopular && (
                    <div className="text-center mb-2">
                      <Badge
                        variant="secondary"
                        className="text-sm font-semibold px-3 py-1"
                      >
                        Más Popular
                      </Badge>
                    </div>
                  )}
                  <CardTitle className="text-2xl text-primary font-semibold">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-foreground/90 text-sm min-h-[4.5em]">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow gap-6 justify-between p-6">
                  <div>
                    <div className="flex flex-col gap-1 mb-6">
                      <span className="text-sm text-brand-charcoal/60 uppercase tracking-wide">
                        Desde
                      </span>
                      <span className="text-[40px] font-serifLuxury text-brand-charcoal leading-none">
                        <sup className="text-sm align-top">€</sup>
                        {plan.price}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {plan.iva}
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      {plan.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex flex-row gap-3 items-start"
                        >
                          <CheckIcon className="w-4 h-4 mt-1 text-secondary shrink-0" />
                          <span className="text-sm text-foreground/90">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="#contact"
                    passHref
                    legacyBehavior={false}
                    prefetch={false}
                    className="block w-full mt-auto"
                  >
                    <Button className="btn-primary w-full">
                      Solicitar presupuesto
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
