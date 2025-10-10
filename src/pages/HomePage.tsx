import HeroSection from '../components/HeroSection';
import ValueProposition from '../components/ValueProposition';
import AIChat from '../components/AIChat';
import AutoScrollCarousel from '../components/AutoScrollCarousel';
import OnboardingFlow from '../components/OnboardingFlow';

const HomePage = () => {
  return (
    // subtle royal-purple tint applied to the full page background
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/60 to-white">
      {/* Hero Section at the top */}
      <HeroSection />
      {/* Ask Your AI CMO Chat */}
      <AIChat />
      {/* Value Proposition */}
      <ValueProposition />
      {/* Auto-Scrolling Clients Carousel */}
      <AutoScrollCarousel />
      {/* Onboarding Flow */}
      <OnboardingFlow />
    </div>
  );
};

export default HomePage;