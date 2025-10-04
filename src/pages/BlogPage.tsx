import React from 'react';
import Seo from '../components/Seo';

const posts = [
  { title: 'AI CMO: The Future of Marketing Leadership', date: '2025-09-01' },
  { title: 'Case Study: +35% Conversions in 30 Days', date: '2025-08-15' },
  { title: 'How AI Reduces Wasted Ad Spend', date: '2025-08-01' },
];

const BlogPage: React.FC = () => {
  return (
    <>
      <Seo title="Resources — Flable.ai" description="AI marketing insights and case studies." />
      <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources & Insights</h1>
          <p className="text-lg text-gray-600">AI marketing insights, case studies, and best practices</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition">
              <div className="text-sm text-gray-500 mb-2">{new Date(p.date).toLocaleDateString()}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{p.title}</h3>
              <a href="/book-demo" className="text-blue-600 font-semibold hover:underline">Read more →</a>
            </article>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default BlogPage;
