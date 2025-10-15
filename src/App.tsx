import React, { useEffect, useState } from 'react';
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
import TermsPage from './pages/TermsPage';
import { Sun, Moon } from 'lucide-react';
import PrivacyPage from './pages/PrivacyPage';
import CancellationPage from './pages/CancellationPage';
import DataDeletion from './pages/Datadeletion';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
  }, [darkMode]);

  return (
    <div className={`min-h-screen relative bg-aurora dark:bg-gradient-to-br dark:from-[#15111B] dark:via-[#23223a] dark:to-[#181c24]`}>
      {/* Move the toggle to top LEFT */}
      <button
        className="fixed top-3 left-3 z-50 w-9 h-9 flex items-center justify-center rounded-full bg-white/70 dark:bg-[#23223a]/90 shadow border border-gray-200 dark:border-gray-800 hover:scale-105 transition"
        aria-label="Toggle theme"
        style={{fontSize:'1.5rem'}}
        onClick={() => setDarkMode(v=>!v)}
      >
        {darkMode ? <Sun className="text-yellow-400 w-5 h-5"/> : <Moon className="text-indigo-700 w-5 h-5"/>}
      </button>
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
          <Route path="/cancellation-refund-policy" element={<CancellationPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
        </Routes>
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
}

export default App;