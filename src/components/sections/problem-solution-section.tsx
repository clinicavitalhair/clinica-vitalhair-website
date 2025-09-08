import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-16 md:py-24 bg-brand-sage-100">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ✅ Image first on mobile */}
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.05)] rounded-lg">
              <CardContent className="p-0">
                <Image
                  src="/image/macho-atravesando-un-proceso-de-extraccion-de-unidades-foliculares.jpg"
                  alt="Solución a la pérdida de cabello"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover max-h-[300px] md:max-h-none"
                  data-ai-hint="hair solution"
                />
              </CardContent>
            </Card>
          </div>

          {/* ✅ Text second on mobile */}
          <div className="order-2 md:order-1 space-y-6 max-w-prose">
            <h2 className="font-beauty leading-[1.15] text-[clamp(2rem,6vw,3.5rem)] text-brand-deep font-bold">
              Recupera tu confianza
            </h2>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-brand-gold mt-1 shrink-0" aria-hidden="true" />
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                ¿La pérdida de cabello te roba la confianza? Entendemos lo que sientes. Millones de personas experimentan la angustia de ver cómo su cabello se debilita y desaparece, afectando no solo su apariencia, sino también su autoestima y bienestar emocional. En Clínica Vital Hair, no solo tratamos la caída del cabello; restauramos tu seguridad y te acompañamos en cada paso hacia una imagen renovada y una confianza revitalizada.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-brand-gold mt-1 shrink-0" aria-hidden="true" />
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Nuestra solución se basa en un diagnóstico preciso, tratamientos de vanguardia como la técnica FUE y la mesoterapia capilar, y un seguimiento personalizado que garantiza resultados naturales y duraderos. Tu transformación es nuestra prioridad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
