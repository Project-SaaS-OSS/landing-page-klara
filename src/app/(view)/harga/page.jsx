'use client';

import { HeroPricing } from './pricing_component/HeroPricing';
import { PricingCards } from './pricing_component/PricingCards';
import { GrowthPath } from './pricing_component/GrowthPath';
import { FeatureTable } from './pricing_component/FeatureTable';
import { RecommendPicker } from './pricing_component/RecommendPicker';
import { FAQPricing } from './pricing_component/FAQPricing';

export default function HargaPage() {
  return (
    <>
      <HeroPricing />
      <PricingCards />
      <GrowthPath />
      <FeatureTable />
      <RecommendPicker />
      <FAQPricing />
    </>
  );
}
