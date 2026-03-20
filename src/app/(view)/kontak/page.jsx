'use client';

import { HeroKontak } from './kontak_component/HeroKontak';
import { ContactOptionCards } from './kontak_component/ContactOptionCards';
import { ContactForm } from './kontak_component/ContactForm';
import { ContactInfo } from './kontak_component/ContactInfo';
import { ProcessSteps } from './kontak_component/ProcessSteps';
import { WhyContact } from './kontak_component/WhyContact';
import { FAQMini } from './kontak_component/FAQMini';
import { LocationSection } from './kontak_component/LocationSection';
import { SupportCTAStrip } from './kontak_component/SupportCTAStrip';
import { ResourceLinks } from './kontak_component/ResourceLinks';
import { FinalCTAKontak } from './kontak_component/FinalCTAKontak';

export default function KontakPage() {
  return (
    <>
      <HeroKontak />
      <ContactOptionCards />
      <ContactForm />
      <ContactInfo />
      <ProcessSteps />
      <WhyContact />
      <FAQMini />
      <LocationSection />
      <SupportCTAStrip />
      <ResourceLinks />
      <FinalCTAKontak />
    </>
  );
}
