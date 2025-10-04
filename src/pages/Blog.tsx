import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    { title: 'AI CMO: The Future of Marketing Leadership', excerpt: 'Why centralizing intelligence unlocks cross-channel performance gains.' },
    { title: 'Case Study: +35% Conversions in 30 Days', excerpt: 'How Flable.ai optimized spend to reduce waste and boost ROI.' },
    { title: 'Playbook: 24/7 Optimization', excerpt: 'Never sleep on campaigns again. Tactics and tooling to automate.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog & Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <article key={idx} className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href="#" className="text-blue-600 font-semibold">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
