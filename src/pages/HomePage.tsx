import HeroSection from '../components/HeroSection';
import AICMOHierarchy from '../components/AICMOHierarchy';
import ValueProposition from '../components/ValueProposition';
import OnboardingFlow from '../components/OnboardingFlow';
import ResultsSection from '../components/ResultsSection';

const HomePage = () => {
  return (
    // subtle royal-purple tint applied to the full page background
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/60 to-white">
      {/* Hero Section at the top */}
      <HeroSection />
      {/* AI CMO Hierarchy Visualization */}
      <AICMOHierarchy />
      {/* Value Proposition and rest of the platform sections */}
      <ValueProposition />
      <ResultsSection />
      <OnboardingFlow />
    </div>
  );
};

export default HomePage;