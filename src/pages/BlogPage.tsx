import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, TrendingUp, Brain, Lightbulb, BarChart3, ArrowRight, Search, Filter } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchTerm, setSearchTerm] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const categories = [
    'All Posts', 'AI Marketing', 'Growth', 'Analytics', 'Automation', 'Strategy', 'Case Study'
  ];

  const iconMap = {
    'AI Marketing': Brain,
    'Growth': TrendingUp,
    'Analytics': BarChart3,
    'Automation': Brain,
    'Strategy': Lightbulb,
    'Case Study': TrendingUp
  };

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/blogs`);
        const data = await response.json();
        
        if (data.success) {
          setBlogs(data.data);
          // Set first featured blog as featured
          if (data.data.length > 0) {
            setFeaturedBlog(data.data[0]);
          }
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // Fallback to static data if API fails
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on category and search
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'All Posts' || blog.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Newsletter subscription
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      
      const data = await response.json();
      if (data.success) {
        alert('Successfully subscribed to newsletter!');
        setNewsletterEmail('');
      } else {
        alert(data.message || 'Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert('Subscription failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <BookOpen className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI Marketing Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI marketing, case studies, and strategies to maximize your ROI.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Post */}
        {featuredBlog && (
          <ScrollReveal variant="zoom">
            <div className="mb-16">
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-8 md:p-12 text-white">
                  <div className="max-w-4xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredBlog.category}
                      </span>
                      <span className="text-indigo-200">Featured Post</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-xl text-indigo-100 mb-6 leading-relaxed">
                      {featuredBlog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-indigo-200">
                        <span>{featuredBlog.author.name}</span>
                        <span>•</span>
                        <span>{new Date(featuredBlog.publishedAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{featuredBlog.readTime} min read</span>
                      </div>
                      <Link 
                        to={`/blog/${featuredBlog.slug}`}
                        className="btn-neo cursor-hover"
                      >
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Search and Filter */}
        <ScrollReveal>
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">Filter by category:</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredBlogs.map((blog, index) => {
              const IconComponent = iconMap[blog.category] || Brain;
              return (
                <ScrollReveal key={blog._id || index} variant="zoom">
                  <article className="glass-card hover-float-glow rounded-2xl overflow-hidden cursor-hover">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                          {blog.category}
                        </span>
                        <IconComponent className="h-6 w-6 text-indigo-600" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-indigo-600 transition-colors">
                        {blog.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span className="font-medium">{blog.author.name}</span>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{blog.readTime} min</span>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog/${blog.slug}`}
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                      >
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        )}

        {/* Newsletter Signup */}
        <ScrollReveal variant="zoom">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Stay Updated with AI Marketing Trends
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get weekly insights on AI marketing, case studies, and exclusive tips delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="btn-neo cursor-hover"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. Read our privacy policy.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default BlogPage;