import React from 'react';
import HeroSection from '../components/HeroSection';
import ValueProposition from '../components/ValueProposition';
import AICMODiagram from '../components/AICMODiagram';
import AgentsSection from '../components/AgentsSection';
import ResultsSection from '../components/ResultsSection';
import OnboardingFlow from '../components/OnboardingFlow';
import TrustSection from '../components/TrustSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <AICMODiagram />
      <AgentsSection />
      <ResultsSection />
      <OnboardingFlow />
      <TrustSection />
    </>
  );
};

export default Home;
