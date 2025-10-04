import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'The Future of AI Marketing: 5 Trends to Watch in 2024',
      excerpt: 'Discover how AI is revolutionizing digital marketing and what trends will shape the industry in the coming year.',
      author: 'Sarah Chen',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      category: 'AI Marketing Insights',
      image: '🤖',
      featured: true
    },
    {
      title: 'Case Study: How TechStart Increased ROI by 35% with AI Automation',
      excerpt: 'A detailed look at how one SaaS company transformed their marketing with AI-powered campaign optimization.',
      author: 'Michael Rodriguez',
      date: 'Dec 10, 2024',
      readTime: '7 min read',
      category: 'Case Studies',
      image: '📊',
      featured: false
    },
    {
      title: 'Cross-Channel Marketing: The Key to Unlocking Customer Insights',
      excerpt: 'Learn how unified data across channels can dramatically improve your marketing effectiveness and customer understanding.',
      author: 'Emily Watson',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      category: 'Marketing Strategy',
      image: '🔗',
      featured: false
    },
    {
      title: 'ROI Optimization: 10 Strategies That Actually Work',
      excerpt: 'Proven strategies for maximizing your marketing ROI, from budget allocation to performance tracking.',
      author: 'David Kim',
      date: 'Nov 28, 2024',
      readTime: '8 min read',
      category: 'Performance',
      image: '💰',
      featured: false
    },
    {
      title: 'The Complete Guide to Marketing Automation for Small Businesses',
      excerpt: 'Everything small business owners need to know about implementing marketing automation without breaking the bank.',
      author: 'Lisa Park',
      date: 'Nov 20, 2024',
      readTime: '10 min read',
      category: 'Automation',
      image: '⚙️',
      featured: false
    },
    {
      title: 'Privacy-First Marketing: How to Build Trust While Driving Results',
      excerpt: 'Navigate the evolving privacy landscape while maintaining effective marketing campaigns and customer trust.',
      author: 'Alex Thompson',
      date: 'Nov 15, 2024',
      readTime: '6 min read',
      category: 'Privacy & Compliance',
      image: '🔒',
      featured: false
    }
  ];

  const categories = [
    { name: 'AI Marketing Insights', icon: Lightbulb, count: 12 },
    { name: 'Case Studies', icon: TrendingUp, count: 8 },
    { name: 'Marketing Strategy', icon: BookOpen, count: 15 },
    { name: 'Performance', icon: TrendingUp, count: 10 },
    { name: 'Automation', icon: BookOpen, count: 6 },
    { name: 'Privacy & Compliance', icon: BookOpen, count: 4 }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with the latest insights, case studies, and strategies in AI-powered marketing
          </p>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <category.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">{category.name}</h4>
                <p className="text-sm text-gray-600">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-8">
                <div className="text-6xl">🤖</div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-gray-600 text-sm">AI Marketing Insights</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  The Future of AI Marketing: 5 Trends to Watch in 2024
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover how AI is revolutionizing digital marketing and what trends will shape the industry in the coming year. From predictive analytics to automated creative generation, learn what's next.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>Sarah Chen</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 15, 2024</span>
                    </div>
                    <span>5 min read</span>
                  </div>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
                  <div className="text-4xl">{post.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12">
            <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Marketing Insights
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest AI marketing trends, case studies, and strategies delivered to your inbox weekly
            </p>
            
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors transform hover:scale-105 duration-200 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;