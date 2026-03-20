'use client';

import { Hero } from './home_component/Hero';
import { TrustStrip } from './home_component/TrustStrip';
import { ProblemSection } from './home_component/ProblemSection';
import { SolutionSection } from './home_component/SolutionSection';
import { FeaturesSection } from './home_component/FeaturesSection';
import DashboardPreview from './home_component/DashboardPreview';
import { Testimonials } from './home_component/Testimonials';
import { FinalCTA } from './home_component/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <DashboardPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
