import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Calendar,
  User,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock LinkedIn articles - in production, these would be fetched from LinkedIn API
  const linkedInArticles = [
    {
      id: 1,
      title: "How AI is Revolutionizing D2C Marketing: A Flable AI Perspective",
      excerpt:
        "Exploring the transformative power of AI in direct-to-consumer marketing strategies and the future of automated customer acquisition.",
      author: "Flable AI Team",
      date: "2024-01-15",
      readTime: "5 min read",
      url: "https://linkedin.com/posts/flable-ai_ai-marketing-d2c-activity-1234567890",
      image: "/assets/blog-1.jpg",
      tags: ["AI Marketing", "D2C", "Automation"],
    },
    {
      id: 2,
      title:
        "Case Study: 340% ROAS Increase with AI-Powered Campaign Optimization",
      excerpt:
        "Deep dive into how MYOP achieved remarkable results using Flable AI's intelligent marketing automation platform.",
      author: "Alex Kumar",
      date: "2024-01-10",
      readTime: "7 min read",
      url: "https://linkedin.com/posts/alex-kumar_roas-optimization-ai-activity-1234567891",
      image: "/assets/blog-2.jpg",
      tags: ["Case Study", "ROAS", "Optimization"],
    },
    {
      id: 3,
      title: "The Future of Marketing: Why Every D2C Brand Needs an AI CMO",
      excerpt:
        "Understanding the shift from traditional marketing teams to AI-powered marketing leadership and its impact on business growth.",
      author: "Flable AI Team",
      date: "2024-01-05",
      readTime: "6 min read",
      url: "https://linkedin.com/posts/flable-ai_ai-cmo-marketing-future-activity-1234567892",
      image: "/assets/blog-3.jpg",
      tags: ["AI CMO", "Future", "Marketing"],
    },
    {
      id: 4,
      title: "Edureka's Success Story: 120% Conversion Boost with AI Marketing",
      excerpt:
        "How Edureka transformed their student acquisition process using intelligent marketing automation and achieved unprecedented results.",
      author: "Priya Sharma",
      date: "2024-01-01",
      readTime: "8 min read",
      url: "https://linkedin.com/posts/priya-sharma_education-marketing-ai-activity-1234567893",
      image: "/assets/blog-4.jpg",
      tags: ["Education", "Conversion", "Success"],
    },
  ];

  useEffect(() => {
    // Simulate API call
    const fetchBlogPosts = async () => {
      setLoading(true);
      // In production, this would fetch from LinkedIn API or your CMS
      setTimeout(() => {
        setBlogPosts(linkedInArticles);
        setLoading(false);
      }, 1000);
    };

    fetchBlogPosts();
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-fuchsia-50 via-white to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-100/20 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-fuchsia-200 rounded-full px-6 py-3 mb-8">
              <BookOpen className="h-5 w-5 text-fuchsia-600" />
              <span className="text-sm font-medium text-gray-700">
                Latest Insights
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500to-cyan-400 bg-clip-text text-transparent">
                AI Marketing Insights
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay ahead with the latest trends, case studies, and strategies
              from the Flable AI community
            </p>
          </div>
        </ScrollReveal>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fuchsia-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} variant="zoom">
                <article className="glass-card rounded-2xl overflow-hidden hover-float-glow cursor-hover group">
                  <div className="relative h-48 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4">
                      <ExternalLink className="h-5 w-5 text-white/80" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-fuchsia-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700 font-medium text-sm transition-colors"
                      >
                        Read on LinkedIn
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <div className="glass-card rounded-3xl p-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500to-cyan-400 bg-clip-text text-transparent">
                  Follow Our Journey
                </span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get the latest insights, case studies, and AI marketing
                strategies delivered to your LinkedIn feed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://linkedin.com/company/flable-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neo cursor-hover text-lg px-8 py-4"
                >
                  Follow on LinkedIn
                </a>
                <button className="px-8 py-4 rounded-2xl font-semibold text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 cursor-hover text-lg">
                  View All Articles
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogSection;
