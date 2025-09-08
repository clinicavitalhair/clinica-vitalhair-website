
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function MeetDoctorSection() {
  return (
    <section id="meet-doctor" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-xl rounded-lg">
              <CardContent className="p-0">
                <Image
                  src="/image/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg"
                  alt="Dra. María Gabriela Moreira"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  data-ai-hint="doctor portrait"
                />
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Dra. María Gabriela Moreira: Más de Dos Décadas de Experiencia al Servicio de Tu Confianza.
            </h2>
            <div className="text-lg md:text-xl text-foreground/90 leading-relaxed space-y-4">
              <p>
                Con más de 25 años dedicados a la transformación capilar, la Dra. María Gabriela Moreira es una referente en el campo de la tricología y el trasplante capilar en Barcelona. Su pasión por la excelencia y su enfoque centrado en el paciente la han llevado a perfeccionar técnicas innovadoras, ofreciendo resultados que combinan naturalidad y densidad.
              </p>
              <p>
                Miembro de prestigiosas sociedades médicas y en constante formación, la Dra. Moreira se compromete a brindar la máxima calidad asistencial, utilizando su vasta experiencia para diseñar planes de tratamiento personalizados que aborden las causas subyacentes de la pérdida de cabello y restauren la vitalidad capilar. Su calidez humana y dedicación son la base de la confianza que sus pacientes depositan en ella.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
