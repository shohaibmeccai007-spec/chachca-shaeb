import React from 'react';
import { BookOpen, Calendar, TrendingUp, Brain, Lightbulb, BarChart3 } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    title: 'The Future of AI-Powered Marketing: Beyond Human Capabilities',
    excerpt: 'Discover how AI CMO technology is revolutionizing digital marketing by providing 24/7 optimization, predictive analytics, and cross-channel intelligence that human teams simply cannot match.',
    author: 'Sarah Chen, AI Marketing Strategist',
    date: 'November 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=smart',
    category: 'AI Strategy'
  };

  const blogPosts = [
    {
      title: 'Case Study: How TechFlow Increased ROAS by 250% in 30 Days',
      excerpt: 'A deep dive into how our AI agents optimized TechFlow\'s multi-channel campaigns, resulting in dramatic improvements in return on ad spend.',
      author: 'Mike Rodriguez',
      date: 'November 10, 2024',
      readTime: '6 min read',
      category: 'Case Studies',
      icon: TrendingUp
    },
    {
      title: '5 AI Marketing Trends That Will Dominate 2025',
      excerpt: 'From predictive customer behavior to autonomous campaign management, explore the AI trends shaping the future of digital marketing.',
      author: 'Alex Johnson',
      date: 'November 8, 2024',
      readTime: '7 min read',
      category: 'Trends',
      icon: Brain
    },
    {
      title: 'The Complete Guide to Cross-Channel Marketing Intelligence',
      excerpt: 'Learn how to unify data from Google Ads, Meta, Shopify, and more to create a single source of truth for your marketing decisions.',
      author: 'Jennifer Park',
      date: 'November 5, 2024',
      readTime: '10 min read',
      category: 'Strategy',
      icon: BarChart3
    },
    {
      title: 'Why 60% of Ad Spend Gets Wasted (And How AI Fixes It)',
      excerpt: 'Understand the common causes of ad waste and how AI-powered diagnostics can identify and eliminate inefficiencies in real-time.',
      author: 'David Chen',
      date: 'November 2, 2024',
      readTime: '5 min read',
      category: 'Optimization',
      icon: Lightbulb
    },
    {
      title: 'Shopify + AI Marketing: The Ultimate Growth Stack',
      excerpt: 'Discover how integrating AI marketing automation with your Shopify store can dramatically increase conversions and customer lifetime value.',
      author: 'Maria Garcia',
      date: 'October 28, 2024',
      readTime: '8 min read',
      category: 'Integration',
      icon: BarChart3
    },
    {
      title: 'From Manual to Autonomous: The Evolution of Campaign Management',
      excerpt: 'See how marketing teams are transitioning from manual campaign management to fully autonomous AI-driven optimization.',
      author: 'Tom Wilson',
      date: 'October 25, 2024',
      readTime: '6 min read',
      category: 'Automation',
      icon: Brain
    }
  ];

  const categories = [
    'All Posts', 'AI Strategy', 'Case Studies', 'Trends', 'Optimization', 'Integration', 'Automation'
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Marketing Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights on AI marketing, case studies, and strategies to maximize your ROI.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12 text-white">
              <div className="max-w-4xl">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-blue-200">Featured Post</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-blue-200">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Read Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <post.icon className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium">{post.author}</span>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with AI Marketing Trends
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get weekly insights on AI marketing, case studies, and exclusive tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time. Read our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;