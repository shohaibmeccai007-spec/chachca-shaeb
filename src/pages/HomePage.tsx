import React from 'react';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import ValueProposition from '../components/ValueProposition';
import AICMODiagram from '../components/AICMODiagram';
import AgentsSection from '../components/AgentsSection';
import ResultsSection from '../components/ResultsSection';
import OnboardingFlow from '../components/OnboardingFlow';
import TrustSection from '../components/TrustSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Seo
        title="Flable.ai — AI CMO Marketing Team"
        description="AI-powered digital marketing team that runs and optimizes campaigns 24/7. Boost ROI while cutting wasted ad spend."
      />
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

export default HomePage;
