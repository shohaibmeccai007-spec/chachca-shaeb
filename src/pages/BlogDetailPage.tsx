import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, Eye, Tag } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/blogs/${slug}`);
        const data = await response.json();
        
        if (data.success) {
          setBlog(data.data);
        } else {
          console.error('Blog not found');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedBlogs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/blogs/${slug}/related`);
        const data = await response.json();
        
        if (data.success) {
          setRelatedBlogs(data.data);
        }
      } catch (error) {
        console.error('Error fetching related blogs:', error);
      }
    };

    if (slug) {
      fetchBlog();
      fetchRelatedBlogs();
    }
  }, [slug]);

  const handleLike = async () => {
    if (!blog) return;
    
    setLiked(!liked);
    // In a real app, you'd send a request to the backend to update likes
    // For now, we'll just update the local state
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-neo cursor-hover">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{blog.readTime} min read</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center justify-center gap-6 text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{blog.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  <span>{blog.views} views</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollReveal>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {blog.heroImage && (
              <div className="aspect-video w-full">
                <img 
                  src={blog.heroImage} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              
              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-5 w-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-600">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Actions */}
              <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      liked 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                    <span>{blog.likes + (liked ? 1 : 0)}</span>
                  </button>
                  
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
                
                <div className="text-sm text-gray-500">
                  Last updated: {new Date(blog.updatedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Related Articles
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Continue exploring AI marketing insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog, index) => (
                <ScrollReveal key={relatedBlog._id} variant="zoom">
                  <Link 
                    to={`/blog/${relatedBlog.slug}`}
                    className="glass-card hover-float-glow rounded-2xl overflow-hidden cursor-hover block"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                          {relatedBlog.category}
                        </span>
                        <span className="text-sm text-gray-500">{relatedBlog.readTime} min</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight hover:text-indigo-600 transition-colors">
                        {relatedBlog.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {relatedBlog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="font-medium">{relatedBlog.author.name}</span>
                        <span>{new Date(relatedBlog.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      )}
    </div>
  );
};

export default BlogDetailPage;
