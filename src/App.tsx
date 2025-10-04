import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import ValueProposition from '../ValueProposition';
import AICMODiagram from '../AICMODiagram';
import AgentsSection from '../AgentsSection';
import ResultsSection from '../ResultsSection';
import PricingSection from '../PricingSection';
import FAQSection from '../FAQSection';
import BlogSection from '../BlogSection';
import OnboardingFlow from '../OnboardingFlow';
import TrustSection from '../TrustSection';
import BookDemo from '../BookDemo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ValueProposition />
              <AICMODiagram />
              <AgentsSection />
              <ResultsSection />
              <PricingSection />
              <FAQSection />
              <BlogSection />
              <OnboardingFlow />
              <TrustSection />
            </>
          } />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/pricing" element={
            <>
              <div className="pt-20">
                <PricingSection />
                <FAQSection />
                <TrustSection />
              </div>
            </>
          } />
          <Route path="/faq" element={
            <>
              <div className="pt-20">
                <FAQSection />
                <TrustSection />
              </div>
            </>
          } />
          <Route path="/blog" element={
            <>
              <div className="pt-20">
                <BlogSection />
              </div>
            </>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;