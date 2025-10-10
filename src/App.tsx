import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CustomCursor from './components/CustomCursor';
import Particles from './components/Particles';
import BookDemoPage from './pages/BookDemoPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <div className="min-h-screen bg-aurora relative">
      <div className="absolute inset-0 -z-10">
        <Particles />
      </div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-demo" element={<BookDemoPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
}

export default App;