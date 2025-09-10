import HeroSection from '@/components/sections/hero-section';
import ProblemSolutionSection from '@/components/sections/problem-solution-section';
import OurApproachSection from '@/components/sections/our-approach-section';
import MeetDoctorSection from '@/components/sections/meet-doctor-section';
import ServiceOverviewSection from '@/components/sections/service-overview-section';
import PricingSection from '@/components/sections/pricing-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import FAQSection from '@/components/sections/faq-section';
import QuickEvaluationSection from '@/components/sections/quick-evaluation-section';
import CtaSection from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <OurApproachSection />
      <MeetDoctorSection />
      <ServiceOverviewSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <QuickEvaluationSection />
      <CtaSection />
    </>
  );
}
