'use client';

import { useState } from 'react';
import { HeroFAQ } from './faq_component/HeroFAQ';
import { CategoryTabs } from './faq_component/CategoryTabs';
import { TopQuestions } from './faq_component/TopQuestions';
import { MainFAQAccordion } from './faq_component/MainFAQAccordion';
import { SupportCTA } from './faq_component/SupportCTA';
import { ResourceCards } from './faq_component/ResourceCards';
import { MiniTrust } from './faq_component/MiniTrust';
import { FinalCTAFAQ } from './faq_component/FinalCTAFAQ';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCat, setActiveCat] = useState('semua');

  const handleSearch = (q) => {
    setSearchQuery(q);
    if (q.trim()) setActiveCat('semua');
  };

  const handleCatSelect = (id) => {
    setActiveCat(id);
    setSearchQuery('');

    setTimeout(() => {
      const el = document.getElementById('faq-accordion');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const handleTopSelect = (catId) => {
    setActiveCat(catId);
    setSearchQuery('');

    setTimeout(() => {
      const el = document.getElementById(`cat-${catId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <>
      <HeroFAQ onSearch={handleSearch} />
      <CategoryTabs
        active={activeCat}
        onSelect={handleCatSelect}
      />

      {!searchQuery && activeCat === 'semua' && <TopQuestions onSelect={handleTopSelect} />}

      <div id='faq-accordion'>
        <MainFAQAccordion
          activeCat={activeCat}
          searchQuery={searchQuery}
        />
      </div>

      <SupportCTA />
      <ResourceCards />
      <MiniTrust />
      <FinalCTAFAQ />
    </>
  );
}
