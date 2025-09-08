import { Award, ShieldCheck, Users, Activity } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import React from 'react'
import { cn } from '@/lib/utils'

const uspItems = [
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Excelencia Certificada',
    description: 'Profesionales altamente cualificados y certificados.',
    tooltip: 'Certificaciones validadas por organismos competentes.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Tecnología Avanzada',
    description: 'Equipamiento de última generación para resultados óptimos.',
    tooltip: 'Uso de tecnología FUE y mesoterapia de vanguardia.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Atención Personalizada',
    description: 'Planes de tratamiento adaptados a cada paciente.',
    tooltip: 'Cada paciente recibe un plan de tratamiento único.',
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: 'Seguimiento Continuo',
    description: 'Acompañamiento integral durante todo el proceso.',
    tooltip: 'Monitorización constante para asegurar la mejor recuperación.',
  },
]

export default function OurApproachSection() {
  return (
    <section id="our-approach" className="py-16 md:py-24 bg-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Precisión. Experiencia. Resultados Naturales.
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-primary/80 leading-snug max-w-3xl mx-auto">
            Más Allá del Procedimiento: Nuestro Compromiso Inquebrantable con Tu Recuperación Total.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-base md:text-lg text-foreground/90 space-y-6 mb-12 text-center">
          <p className="leading-relaxed">
            En Clínica Vital Hair, la Dra. María Gabriela Moreira y su equipo combinan arte y ciencia para ofrecerte soluciones capilares que no solo restauran tu cabello, sino también tu confianza. Creemos firmemente en un{' '}
            <strong className="bg-brand-gold/20 underline underline-offset-4 px-1 rounded-sm">
              Seguimiento integral
            </strong>
            , acompañándote desde la primera consulta hasta la completa recuperación, asegurando que cada etapa del proceso sea cómoda, clara y conduzca a los resultados naturales que deseas.
          </p>
          <p className="leading-relaxed">
            Nuestra filosofía se centra en la atención meticulosa al detalle, la aplicación de las técnicas más avanzadas y un profundo entendimiento de las necesidades individuales de cada paciente.
          </p>
        </div>

        {/* Horizontal timeline layout */}
        <div className="relative flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4 max-w-6xl mx-auto">
          <TooltipProvider delayDuration={100}>
            {uspItems.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      'group relative flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm cursor-pointer transition-all duration-300 ease-out hover:shadow-md hover:scale-[1.02]',
                      'lg:w-1/4'
                    )}
                  >
                    {/* Horizontal connector */}
                    {index !== uspItems.length - 1 && (
                      <span className="hidden lg:block absolute right-0 top-1/2 w-[calc(100%+1rem)] h-px bg-brand-gold/40"></span>
                    )}

                    {React.cloneElement(item.icon, {
                      className: cn(
                        item.icon.props.className,
                        'text-primary/90 group-hover:text-primary group-hover:scale-105 transition-all duration-300 ease-out'
                      ),
                    })}
                    <h3 className="mt-4 text-lg font-semibold text-primary tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-foreground/90 text-sm">{item.description}</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-[#474a43] text-white border-none shadow-lg">
                  <p>{item.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  )
}
