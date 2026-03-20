'use client';

import { HeroFeatures } from './features_component/HeroFeatures';
import { FeaturePhilosophy } from './features_component/FeaturePhilosophy';
import { FeatureCategories } from './features_component/FeatureCategories';
import { FeatureDetails } from './features_component/FeatureDetails';
import { RoleSection } from './features_component/RoleSection';
import { ScreenPreview } from './features_component/ScreenPreview';
import { ComparisonSection } from './features_component/ComparisonSection';
import { BenefitSection } from './features_component/BenefitSection';
import { FAQFeatures } from './features_component/FAQFeatures';

export default function FiturPage() {
  return (
    <>
      <HeroFeatures />
      <FeaturePhilosophy />
      <FeatureCategories />
      <FeatureDetails />
      <RoleSection />
      <ScreenPreview />
      <ComparisonSection />
      <BenefitSection />
      <FAQFeatures />
    </>
  );
}
