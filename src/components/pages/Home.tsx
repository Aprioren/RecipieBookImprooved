import React from 'react';
import { Hero } from '../Hero/Hero';
import { ImprooveSkils } from '../ImprooveSkils/ImprooveSkils';
import { QuoteSection } from '../QuoteSection/QuoteSection';
import { ChiefsSection } from '../ChiefsSection/ChiefsSection';

export const Home = () => {
  return (
    <>
    <Hero />
    <ImprooveSkils />
    <QuoteSection />
    <ChiefsSection />
    </>
  )
}